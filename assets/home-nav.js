(()=>{
'use strict';
// This archive is a local, static reconstruction. Use local routes wherever supplied.
const localRoutes = new Set(["/","/2015shareholdermeeting","/about/legal","/charging-partners","/commercial-wall-connector","/commercial-wall-connector/get","/contact","/current-offers","/cybertruck","/features","/fsd","/home-charging","/megapack","/model3","/models","/modelx","/modely","/powerwall","/roadster","/robotaxi","/semi","/semi-charging-for-business","/semi-charging-for-business/get","/sitemap","/solarpanels","/supercharger","/supercharger-for-business","/supercharger-for-business/get"]);
const menus = {"Vehicles":[["Model Y","/modely/"],["Model 3","/model3/"],["Cybertruck","/cybertruck/"],["Model S","/models/"],["Model X","/modelx/"],["Roadster","/roadster/"],["Semi","/semi/"],["Current Offers","/current-offers/"]],"Energy":[["Solar Panels","/solarpanels/"],["Powerwall","/powerwall/"],["Megapack","/megapack/"]],"Charging":[["Home Charging","/home-charging/"],["Supercharging","/supercharger/"],["Charging Partners","/charging-partners/"],["Supercharger for Business","/supercharger-for-business/"],["Semi Charging","/semi-charging-for-business/"],["Wall Connector for Business","/commercial-wall-connector/"]],"Robotaxi":[["Explore Robotaxi","/robotaxi/"]],"Semi":[["Explore Semi","/semi/"],["Semi Charging for Business","/semi-charging-for-business/"]],"Discover":[["Full Self-Driving","/fsd/"],["Features","/features/"],["Current Offers","/current-offers/"],["Contact","/contact/"],["Legal","/about/legal/"],["All pages","/sitemap/"]]};
const localURL = (raw) => {
  if (!raw || raw.startsWith('#') || raw.startsWith('javascript:') || raw.startsWith('data:')) return null;
  try {
    const url = new URL(raw, document.location.href);
    if (!['www.tesla.com','tesla.com',document.location.hostname].includes(url.hostname)) return null;
    if (url.origin === document.location.origin && !url.pathname.startsWith('/')) return null;
    const path = url.pathname.replace(/\/+$/, '') || '/';
    // Do not pretend a live configurator, account, shop or an unarchived page is local.
    if (!localRoutes.has(path) || (url.hostname.includes('tesla.com') && url.search)) return null;
    return (path==='/' ? '/' : path+'/') + url.hash;
  } catch { return null; }
};
const localize = (anchor) => {
  const dest = localURL(anchor.getAttribute('href'));
  if (dest) {anchor.setAttribute('href', dest);anchor.removeAttribute('target');}
};
document.querySelectorAll('a[href]').forEach(localize);
// Some saved-page widgets create links later, after load.
document.addEventListener('click', (event)=> {
  const anchor=event.target.closest?.('a[href]');
  if(!anchor) return;
  const dest=localURL(anchor.getAttribute('href'));
  if(dest && anchor.getAttribute('href')!==dest){event.preventDefault();location.href=dest;}
}, true);

const header=document.getElementById('tds-site-header');
if(header){
  const dropdown=document.createElement('nav');
  dropdown.className='tesla-local-dropdown';dropdown.id='tesla-local-dropdown';
  dropdown.setAttribute('aria-label','Tesla website sections');
  document.body.appendChild(dropdown);
  const triggers=[...header.querySelectorAll('ol.tds-align--center button.tds-site-nav-item')];
  function closeDropdown(){dropdown.classList.remove('is-open');triggers.forEach(b=>b.setAttribute('aria-expanded','false'));}
  triggers.forEach(button=>{
    const group=button.textContent.trim(); if(!menus[group]) return;
    button.type='button';button.dataset.localCategory=group;
    button.setAttribute('aria-expanded','false');
    button.addEventListener('click',ev=>{
      ev.preventDefault();ev.stopImmediatePropagation();
      const already=dropdown.classList.contains('is-open') && dropdown.dataset.category===group;
      closeDropdown();if(already) return;
      dropdown.replaceChildren();dropdown.dataset.category=group;
      for(const [name,url] of menus[group]){
        const a=document.createElement('a');a.textContent=name;a.href=url;dropdown.appendChild(a);
      }
      dropdown.classList.add('is-open');button.setAttribute('aria-expanded','true');
    },true);
  });
  const mobileButton=document.createElement('button');mobileButton.type='button';
  mobileButton.id='tesla-local-menu-button';mobileButton.textContent='Menu';
  mobileButton.setAttribute('aria-expanded','false');mobileButton.setAttribute('aria-controls','tesla-local-mobile-menu');
  header.appendChild(mobileButton);
  const mobile=document.createElement('nav');mobile.id='tesla-local-mobile-menu';mobile.setAttribute('aria-label','Mobile website navigation');
  for(const [group,links] of Object.entries(menus)){
    const label=document.createElement('div');label.className='tesla-local-mob-label';label.textContent=group;mobile.appendChild(label);
    for(const [name,url] of links){const a=document.createElement('a');a.textContent=name;a.href=url;mobile.appendChild(a);}
  }
  document.body.appendChild(mobile);
  function closeMobile(){mobile.classList.remove('is-open');mobileButton.setAttribute('aria-expanded','false');mobileButton.textContent='Menu';document.body.classList.remove('local-mobile-menu-open');}
  mobileButton.addEventListener('click',()=>{
    closeDropdown();const opened=mobile.classList.toggle('is-open');
    mobileButton.setAttribute('aria-expanded',String(opened));mobileButton.textContent=opened?'Close':'Menu';
    document.body.classList.toggle('local-mobile-menu-open',opened);
  });
  mobile.addEventListener('click',e=>{if(e.target.closest('a[href]'))closeMobile();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDropdown();closeMobile();}});
  document.addEventListener('click',e=>{if(!dropdown.contains(e.target)&&!header.contains(e.target))closeDropdown();});
  window.addEventListener('resize',()=>{if(innerWidth>850)closeMobile();});
}

// Interactive homepage hero: restored controls from the saved single-file HTML.
const hero=document.querySelector('.tcl-flex-module-carousel--homepage_hero_carousel');
if(hero){
 const slides=[...hero.querySelectorAll('.tcl-flex-module-carousel__slides > .tcl-flex-module-carousel__slide')];
 if(slides.length){
   let active=Math.max(0,slides.findIndex(s=>s.classList.contains('tcl-flex-module-carousel__slide--active')));
   const dots=[...hero.querySelectorAll('button.tds-tab')];
   const render=i=>{
     active=(i+slides.length)%slides.length;
     slides.forEach((slide,n)=>{slide.classList.toggle('tcl-flex-module-carousel__slide--active',n===active);slide.setAttribute('aria-hidden',String(n!==active));});
     dots.forEach((dot,n)=>{const on=(n%slides.length)===active;dot.setAttribute('aria-selected',String(on));dot.tabIndex=on?0:-1;});
   };
   hero.querySelectorAll('button.tcl-carousel__nav--inline-start').forEach(b=>b.addEventListener('click',()=>render(active-1)));
   hero.querySelectorAll('button.tcl-carousel__nav--inline-end').forEach(b=>b.addEventListener('click',()=>render(active+1)));
   dots.forEach((b,n)=>b.addEventListener('click',()=>render(n)));
   render(active);
 }
}
const fsd=document.querySelector('video.tcl-react-media__asset');
if(fsd){const source=fsd.querySelector('source[type="video/mp4"]');if(source&&!source.hasAttribute('src')){source.src='/videos/Homepage-FSD-Card-Desktop.mp4';fsd.preload='metadata';}}
const footer=document.querySelector('footer');
if(footer&&!footer.querySelector('.tesla-local-footer-note')){
  const note=document.createElement('div');note.className='tesla-local-footer-note';
  note.textContent='Independent local preview from an archived Tesla webpage. Not affiliated with Tesla. Some services open Tesla.com.';
  footer.appendChild(note);
}
})();
