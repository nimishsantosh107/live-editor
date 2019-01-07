var socket = io();

const codeArea = document.querySelector("#code")

codeArea.addEventListener("input", function (e) {
	socket.emit('new',e.target.value);
});

socket.on('data' , function (str) {
	codeArea.value = str;
});