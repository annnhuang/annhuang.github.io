document.addEventListener('DOMContentLoaded', function () {
           const darkModeButton = document.getElementById('_dark-mode');
           const body = document.body;
         
           // Check for saved user preference, if any, on load of the website
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
         });
         