const loginBtn = document.getElementById('login-btn');
const playBtn = document.getElementById('play-btn');

loginBtn.addEventListener("click", () => {
   window.location.href = "https://goonket.com/login";
});

playBtn.addEventListener("click", () => {
   window.location.href = "https://goonket.com/play";
});