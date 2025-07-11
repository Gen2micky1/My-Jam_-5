const form = document.querySelector('#rsvpForm');
const input = document.querySelector('input[type="email"]');
const button = document.querySelector('.rsvpForm__button');
const statusMessage = document.querySelector('.status-message');
const statusIcon = document.querySelector('.rsvpForm__status-icon');

// Safety Check: Ensure the form and elements exist
if (form && input && button && statusMessage && statusIcon) {
  // define helper function
  function setError(message) {
    // Add a CSS class .invalid to the input for styling
    input.classList.add('invalid');
    statusMessage.textContent = message;
    statusMessage.style.display = 'block';
    statusMessage.style.color = '#f96464';
    input.style.borderColor = '#f96464';
    button.disabled = true;
    statusIcon.innerHTML = `
    <img
      src="./images/icon-error.svg"
      alt="icon-error"
      width="24"
      height="24"
    />

    <figcaption class="offscreen">icon-error</figcaption>`;
  }

  function setSuccess(message) {
    // Add a CSS class valid to the input for styling
    input.classList.add('valid');
    statusMessage.textContent = message;
    statusMessage.style.display = 'block';
    statusMessage.style.color = '#008000';
    input.style.borderColor = '#008000';
    button.disabled = false;
    statusIcon.innerHTML = `
    <img
      src="./images/icon-success.svg"
      alt="icon-success"
      width="24"
      height="24"
    />

    <figcaption class="offscreen">icon-error</figcaption>`;
  }

  function restFormUI() {
    statusMessage.style.display = 'none';
    input.style.bolderColor = 'hsla(0, 36%, 70%, 0.5)';
    input.classList.remove('valid', 'invalid');
    statusIcon.innerHTML = '';
    button.disabled = true;
    input.value = '';
  }

  // Real Time Validation
  input.addEventListener('input', () => {
    const value = input.value.trim();
    const isEmailEmpty = value === '';
    const isEmailValid = input.validity.valid;

    if (isEmailEmpty) {
      setError('Email address is required.');
    } else if (!isEmailValid) {
      setError('Please enter a valid email address.');
    } else {
      setSuccess('Successful');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      restFormUI();
    });
  });

}