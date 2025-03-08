const form = document.getElementById('registerForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    try {
        const response = await axios.post('https://api.goonket.com/register', {
            username,
            password,
            email
        });

        alert('User registered successfully!');
        console.log(response.data); 
       
    } catch (error) {
        console.error('Error registering:', error.response.data);
        alert('Registration failed. Please try again.');
    }
});