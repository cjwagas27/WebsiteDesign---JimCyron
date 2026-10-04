/* CY CAFÉ — contact.js */

document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('contactForm');
  const nameInput  = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const msgInput   = document.getElementById('message');
  const nameError  = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const msgError   = document.getElementById('messageError');
  const success    = document.getElementById('formSuccess');

  if (!form) return;

  function validate() {
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    msgError.textContent = '';

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email.';
      valid = false;
    }
    if (msgInput.value.trim().length < 10) {
      msgError.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }
    return valid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 1200);
  });
});
