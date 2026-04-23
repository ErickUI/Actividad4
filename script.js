document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Simulate a login process
        if (username === 'admin' && password === 'password') {
            alert('Inicio de sesión exitoso!');
            // Redirect or perform other actions
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });
});