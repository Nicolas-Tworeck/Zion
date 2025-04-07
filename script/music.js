window.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('music/ambiente.mp3');
    audio.play().catch((e) => {
      console.warn('Autoplay bloqueado pelo navegador:', e);
    });
  });