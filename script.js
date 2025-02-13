document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                togglePassword.src = 'src/Hidepass.png';
            } else {
                passwordField.type = 'password';
                togglePassword.src = 'src/Showpass.png';
            }
        });
    }
});
