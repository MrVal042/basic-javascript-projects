const users = document.getElementById('users');
const alert = document.getElementById('alert');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

let closeSignup = () => {
	signup.style.display = 'none';
};
closeSignup();
let isLogIn = false;

function handleLogin() {
	isLogIn = !isLogIn;
	return !isLogIn ? (display.style.display = 'block') : (display.style.display = 'none');
}
