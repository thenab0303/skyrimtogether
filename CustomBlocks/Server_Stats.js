const statsContainer = document.querySelector(".statsContainer");
const url = "https://list.skyrim-together.com/stat";

statsContainer.innerHTML = `
    <div class="statsCurrent">
        <div class="currentPlayers"><div id="currentPlayerNumbers">N/A</div><div class="statsName">Current Players</div></div>
        <div class="currentServers"><div id="currentServerNumbers">N/A</div><div class="statsName">Current Servers</div></div>
    </div>
    <div class="statsMax">
        <div class="maxPlayers"><div id="maxPlayerNumbers">N/A</div><div class="statsName">Max Players</div></div>
        <div class="maxServers"><div id="maxServerNumbers">N/A</div><div class="statsName">Max Servers</div></div>
    </div>
`;

fetch(url)
.then(resp => resp.json())
.then(data => {
    console.log(data);
})
.catch((error) => console.error("Error:", error));