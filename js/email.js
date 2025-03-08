window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
        try {
            const response = await fetch(`https://goonket.com/verify-email?token=${token}`);
            const result = await response.json();

            const messageElement = document.getElementById('message');

            if (response.ok) {
                messageElement.innerHTML = '<p style="color: green;">Email verified successfully! You can now log in.</p>';
            } else {
                messageElement.innerHTML = `<p style="color: red;">${result.message}</p>`;
            }
        } catch (error) {
            document.getElementById('message').innerHTML = '<p style="color: red;">Something went wrong. Please try again later.</p>';
        }
    } else {
        document.getElementById('message').innerHTML = '<p style="color: red;">No token found in the URL.</p>';
    }
};