"""Small local server with MP4 byte-range streaming; no external Python dependencies."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import mimetypes
import os
import re

os.chdir(Path(__file__).resolve().parent)
mimetypes.add_type('video/mp4', '.mp4')
mimetypes.add_type('video/webm', '.webm')
mimetypes.add_type('image/avif', '.avif')

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        file_path = self.path.lower().split('?', 1)[0]
        if file_path.endswith(('.webp', '.woff2', '.mp4', '.avif')):
            self.send_header('Cache-Control', 'public, max-age=86400')
        else:
            self.send_header('Cache-Control', 'no-cache')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

    def send_head(self):
        self._byte_range = None
        raw_range = self.headers.get('Range')
        if raw_range and self.path.lower().split('?', 1)[0].endswith('.mp4'):
            path = self.translate_path(self.path)
            if os.path.isfile(path):
                size = os.path.getsize(path)
                m = re.fullmatch(r'bytes=(\d*)-(\d*)', raw_range.strip())
                if m and size:
                    if not m.group(1) and not m.group(2):
                        return super().send_head()
                    if m.group(1):
                        start = int(m.group(1))
                        end = min(size - 1, int(m.group(2))) if m.group(2) else size - 1
                    else:
                        suffix = int(m.group(2))
                        start, end = max(0, size - suffix), size - 1
                    if start >= size or end < start:
                        self.send_response(416)
                        self.send_header('Content-Range', f'bytes */{size}')
                        self.send_header('Content-Length', '0')
                        self.end_headers()
                        return None
                    f = open(path, 'rb')
                    self._byte_range = (start, end)
                    self.send_response(206)
                    self.send_header('Content-Type', 'video/mp4')
                    self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
                    self.send_header('Content-Length', str(end-start+1))
                    self.send_header('Accept-Ranges', 'bytes')
                    self.end_headers()
                    f.seek(start)
                    return f
        return super().send_head()

    def copyfile(self, source, outputfile):
        if self._byte_range is not None:
            start, end = self._byte_range
            remaining = end - start + 1
            while remaining > 0:
                chunk = source.read(min(65536, remaining))
                if not chunk:
                    break
                outputfile.write(chunk)
                remaining -= len(chunk)
        else:
            super().copyfile(source, outputfile)

if __name__ == '__main__':
    print('Tesla local site at http://127.0.0.1:8765/ (Ctrl+C to stop)')
    ThreadingHTTPServer(('127.0.0.1', 8765), Handler).serve_forever()
