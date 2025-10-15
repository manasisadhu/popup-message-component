const background = document.getElementById("sec");
const btn = document.getElementById("btn");
const modalparent = document.getElementById("modal");
const closebtn = document.getElementById("close");
let song = new Audio();

btn.addEventListener("mouseover", () => {
	btn.style.backgroundColor = "blueviolet";
});

btn.addEventListener("mouseout", () => {
	btn.style.backgroundColor = "black";
	btn.style.transition = "2s";
});

btn.addEventListener("click", () => {
	modalparent.style.display = "flex";
	btn.style.backgroundColor = "blueviolet";
	background.style.filter = "blur(5px)";
	background.style.transition = "2s";
	song.src = "/Assets/music.mp3";
	song.autoplay = true;
	song.loop = true;
});

closebtn.addEventListener("click", () => {
	modalparent.style.display = "none";
	btn.style.backgroundColor = "black";
	background.style.filter = "blur(0px)";
	song.pause();
});

background.addEventListener(
	"click",
	() => {
		modalparent.style.display = "none";
		btn.style.backgroundColor = "black";
		background.style.filter = "blur(0px)";
		song.pause();
		btn.style.backgroundColor = "black";
	},
	true
);
