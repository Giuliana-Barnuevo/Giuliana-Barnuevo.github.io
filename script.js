// Slider (estático, sin animaciones automáticas)
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const counter = document.getElementById('counter');
  let idx = 0;

  function show(i){
    slides.forEach(s=>s.classList.remove('active'));
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active');
    counter.textContent = (idx+1);
  }

  prevBtn.addEventListener('click',()=>show(idx-1));
  nextBtn.addEventListener('click',()=>show(idx+1));
})();

// Contact form (demo con mailto)
function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Contacto desde portafolio: ' + name);
  const body = encodeURIComponent(message + '\\n\\nEmail: ' + email);
  window.location.href = `mailto:tuemail@ejemplo.com?subject=${subject}&body=${body}`;
}
