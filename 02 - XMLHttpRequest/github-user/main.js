// Your code goes here
const input = document.querySelector(".search_input");
const button = document.querySelector(".search_button");
const img = document.querySelector("img");
const userName = document.querySelector(".user_name");
const gitCard = document.querySelector(".git_card");
const angleDown = document.querySelector(".angle_down");
function displayData(res) {
	let user = res;
	gitCard.className += " card";
	img.src = `${user.avatar_url}`;
	userName.innerHTML = `${user.name}`;
	angleDown.innerHTML = `👇`;

	angleDown.addEventListener("click", () => displayUserData(user));

	console.log(user);
}
function getUserData() {
	if (!input.value.trim() == "") {
		// console.log(input.value);
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `https://api.github.com/users/${input.value}`);
		xhr.addEventListener("load", () =>
			displayData(JSON.parse(xhr.response))
		);
		xhr.send();
	}
}

function displayUserData(user) {
	gitCard.className += " detail_card";
	img.src = `${user.avatar_url}`;
	userName.innerHTML = `${user.name}`;

	console.log(user);
}
button.addEventListener("click", getUserData);
