// Your code goes here
const input = document.querySelector(".search_input");
const button = document.querySelector(".search_button");
const img = document.querySelector("img");
const userImg = document.querySelector(".user_image");
const userName = document.querySelector(".user_name");
const detailUserName = document.querySelector(".user_Name");
const userId = document.querySelector(".user_id");
const userLocation = document.querySelector(".location");
const bio = document.querySelector(".bio");
const followersCount = document.querySelector(".followers_count");
const followingCount = document.querySelector(".following_count");
const repoCount = document.querySelector(".repo_count");
const gistCount = document.querySelector(".gists_count");
const gitCard = document.querySelector(".git_card");
const detailCard = document.querySelector(".detail_card");
const ul = document.querySelector("ul");
const angleDown = document.querySelector(".angle_down");

//  Functions

function displayData(res) {
	let user = res;
	gitCard.className += " card";
	img.src = `${user.avatar_url}`;
	userName.innerHTML = `${user.name}`;
	// angleDown.text = "👇";

	// angleDown.addEventListener("click", () =>
	displayUserData(user);
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
		input.value = "";
	}
}
function displayRepo(repo) {
	// let li = document.createElement("li");
	// let div = document.createElement("div");
	ul.innerHTML = "";
	for (let i = 0; i < repo.length; i++) {
		let li = document.createElement("li");
		// let div = document.createElement("div");
		let repoName = document.createElement("p");
		repoName.classList.add("repo_name");
		let repoDescription = document.createElement("span");
		repoDescription.classList.add("repo_description");
		let repolanguage = document.createElement("span");
		repolanguage.classList.add("repo_language");
		repoName.innerHTML = repo[i].name;
		repoDescription.innerHTML = repo[i].description;
		repolanguage.innerHTML = `🛠${repo[i].language}`;
		// div.appendChild(repoName, repoDescription, repolanguage);
		li.append(repoName, repoDescription, repolanguage);
		ul.appendChild(li);
	}
}
function displayUserData(user) {
	gitCard.style.display = "none";
	detailCard.style.display = "flex";
	detailUserName.innerHTML = `${user.name}`;
	userImg.src = `${user.avatar_url}`;
	userId.innerHTML = `👤${user.login}`;
	userLocation.innerHTML = ` 📍${user.location}`;
	bio.innerHTML = `✍️${user.bio}`;
	followersCount.innerHTML = `Followers: ${user.followers}`;
	followingCount.innerHTML = `Following: ${user.following}`;
	repoCount.innerHTML = `Repos: ${user.public_repos}`;
	gistCount.innerHTML = `Gists: ${user.public_gists}`;

	const repoUrl = user.repos_url;
	let xhrRepo = new XMLHttpRequest();
	xhrRepo.open("GET", `${repoUrl}`);
	xhrRepo.addEventListener("load", () =>
		displayRepo(JSON.parse(xhrRepo.response))
	);
	xhrRepo.send();

	console.log(user);
}
button.addEventListener("click", getUserData);
