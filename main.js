const header=document.querySelector('.header');
const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.navlinks');
const setHeader=()=>header?.classList.toggle('scrolled',window.scrollY>24);
setHeader();window.addEventListener('scroll',setHeader,{passive:true});
if(toggle){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>{links?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const heroArt=document.querySelector('.hero-art');
if(heroArt && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){heroArt.addEventListener('pointermove',e=>{const r=heroArt.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;heroArt.style.transform=`translate3d(${x*18}px,${y*18}px,0) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;});heroArt.addEventListener('pointerleave',()=>heroArt.style.transform='');}
const form=document.querySelector('#project-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#form-status');status.className='form-status notice';status.textContent='The form design is ready. Submission will be activated when Catalyst connects its shared project inbox or form service.';});}
