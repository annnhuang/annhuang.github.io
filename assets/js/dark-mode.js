document.addEventListener('DOMContentLoaded', function () {
  const template = document.getElementById('_dark-mode-template');
  if (template) {
    const navbar = document.querySelector('.navbar'); // Adjust this selector if needed
    if (navbar) {
      const clone = document.importNode(template.content, true);
      navbar.appendChild(clone);

      // Your dark mode toggle code here
      const darkModeButton = document.getElementById('_dark-mode');
      const body = document.body;

      if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
      }

      darkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
        } else {
          localStorage.setItem('darkMode', 'disabled');
        }
      });
    } else {
      console.error('Navbar not found');
    }
  } else {
    console.error('_dark-mode-template not found');
  }
});
