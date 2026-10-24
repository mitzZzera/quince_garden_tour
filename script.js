const landing = document.querySelector('#landing-page');
const booking = document.querySelector('#booking-page');
const showBooking = () => { landing.classList.add('hidden'); booking.classList.remove('hidden'); window.scrollTo(0, 0); };
document.querySelectorAll('[data-book]').forEach(b => b.addEventListener('click', showBooking));
document.querySelector('[data-home]').addEventListener('click', () => { booking.classList.add('hidden'); landing.classList.remove('hidden'); window.scrollTo(0,0); });

const days = document.querySelector('#calendar-days');
for (let i=1;i<=31;i++) { const b=document.createElement('button'); b.textContent=i; if(i<5){b.className='muted'}else{b.className='available';b.addEventListener('click',()=>{document.querySelectorAll('.days button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');document.querySelector('#booking-day').textContent=i;});} if(i===18)b.classList.add('selected'); days.append(b); }
document.querySelectorAll('.time').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.time').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.querySelector('#booking-time').textContent=`${t.textContent} — ${String(Number(t.textContent.slice(0,2))+2).padStart(2,'0')}:00`; }));
document.querySelector('#confirm-booking').addEventListener('click',function(){this.innerHTML='Walk requested <span>✓</span>';this.style.background='#cfe5d5';document.querySelector('.status-pill.pending').textContent='REQUESTED';});
document.querySelectorAll('.role').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.role').forEach(x=>x.classList.remove('active'));button.classList.add('active');document.querySelectorAll('.role-content').forEach(x=>x.classList.add('hidden'));document.querySelector('#'+button.dataset.role).classList.remove('hidden');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
