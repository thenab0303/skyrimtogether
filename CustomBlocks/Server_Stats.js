const statsContainer = document.querySelector(".statsContainer");
const url = "https://list.skyrim-together.com/stat";

statsContainer.innerHTML = `
    <div class="currentPlayers">N/A</div>
    <div class="currentServers">N/A</div>
    <div class="maxPlayers">N/A</div>
    <div class="maxServers">N/A</div>
`;

fetch(url)
.then(resp => resp.json())
.then(data => {
    console.log(data);
})
.catch((error) => console.error("Error:", error));