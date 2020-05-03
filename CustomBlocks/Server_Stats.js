const statsContainer = document.querySelector(".statsContainer");
const url = "https://list.skyrim-together.com/stat";

fetch(url)
.then(resp => resp.json())
.then(data => console.log(data))
.catch((error) => console.error("Error:", error));