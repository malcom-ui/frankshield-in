// Frank Shields India — small enhancements, no dependencies.
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Enquiry form: builds an email to the sales inbox.
  // To use a form service instead (Formspree, Netlify Forms, etc.),
  // set an action/method on the <form> in contact.html and delete this block.
  var form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-note');
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      if (!name || !email || email.indexOf('@') < 1) {
        note.textContent = 'Please enter your name and a valid email address.';
        note.style.color = '#7a1f2b';
        return;
      }
      var f = form.elements;
      var subject = 'Website enquiry: ' + f.interest.value + ' (' + (f.organisation.value || name) + ')';
      var body = [
        'Name: ' + name,
        'Hospital / company: ' + f.organisation.value,
        'Phone: ' + f.phone.value,
        'Email: ' + email,
        'City / state: ' + f.city.value,
        'Interested in: ' + f.interest.value,
        'Scanner: ' + f.scanner.value,
        '',
        f.message.value
      ].join('\n');
      window.location.href = 'mailto:' + form.getAttribute('data-email') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      note.textContent = 'Your email app should open now. If it does not, call or WhatsApp +91 75580 80935.';
      note.style.color = '';
    });
  }
})();
