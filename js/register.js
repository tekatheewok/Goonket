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

   
   
    // Create a new div element
    var newDiv = document.createElement("div");
  
    // Set attributes or styles for the new div (optional)
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "lightblue";
    newDiv.textContent = "New Div";
  
    // Append the new div to the body or another element
    document.body.appendChild(newDiv); 
});


document.getElementById("myElement").onclick = function() {
    // Create a new div element
    var newDiv = document.createElement("div");
  
    // Set attributes or styles for the new div (optional)
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "lightblue";
    newDiv.textContent = "New Div";
  
    // Append the new div to the body or another element
    document.body.appendChild(newDiv); 
  };