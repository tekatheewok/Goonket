const form = document.getElementById('registerForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    const messageIcon = document.getElementById('messageIcon');

    try {
        const response = await axios.post('https://api.goonket.com/register', {
            username,
            password,
            email
        });

       messageText.textContent = "Account created successfully!";
       messageIcon.innerHTML = "✔️";
       messageBox.classList.add('success');
       messageBox.classList.remove('error');
    } catch (error) {
        const errorMessage = error.response && error.response.data ? error.response.data.message : 'An error occurred. Please try again!';

        messageText.textContent = errorMessage;
        messageIcon.innerHTML = "❌";
        messageBox.classList.add('error');
        messageBox.classList.remove('success');
    }

    messageBox.style.display = 'flex';
    setTimeout(() => {
        messageBox.style.opacity = 1;
    }, 50);

   
   



    messageBox.style.opacity = 1;
}, 50);



document.getElementById("submit").onclick = function() {
    var newDiv = document.createElement("div");
    newDiv.className = "message-box"
    document.body.appendChild(newDiv); 
};
