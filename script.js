document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scores").innerHTML = "Loading live scores...";
    document.getElementById("match-schedule").innerHTML = "Fetching schedule...";
    document.getElementById("player-status").innerHTML = "Loading player info...";
    document.getElementById("video-highlights").innerHTML = "Fetching highlights...";
    document.getElementById("image-gallery").innerHTML = "Loading gallery...";

    // Simulate API Call
    setTimeout(() => {
    const scoresElement = document.getElementById("scores");
    const playerStatusElement = document.getElementById("player-status");
    const matchScheduleElement = document.getElementById("match-schedule");

    const teams = [
        "Real Madrid", "Barcelona", "Manchester United", "Liverpool",
        "Bayern Munich", "PSG", "Juventus", "Chelsea", "Arsenal", "AC Milan"
    ];

    const players = [
        { name: "Lionel Messi", team: "Inter Miami", position: "FW" },
        { name: "Cristiano Ronaldo", team: "Al Nassr", position: "FW" },
        { name: "Kylian Mbappe", team: "PSG", position: "FW" },
        { name: "Kevin De Bruyne", team: "Manchester City", position: "MF" },
        { name: "Erling Haaland", team: "Manchester City", position: "FW" },
        { name: "Robert Lewandowski", team: "Barcelona", position: "FW" },
        { name: "Neymar Jr.", team: "Al Hilal", position: "FW" }
    ];

    function getRandomScore() {
        return Math.floor(Math.random() * 5);
    }

    function updateAll() {
        if (scoresElement) {
            scoresElement.innerHTML = "";
            for (let i = 0; i < 3; i++) {
                const teamA = teams[Math.floor(Math.random() * teams.length)];
                const teamB = teams[Math.floor(Math.random() * teams.length)];
                if (teamA === teamB) continue;

                const matchRow = document.createElement("div");
                matchRow.classList.add("scoreboard-row");
                matchRow.innerHTML = `
                    <div class='score-header'>
                        <span class='team-name'>${teamA}</span>
                        <span class='team-score'>${getRandomScore()}</span>
                        <span class='separator'>-</span>
                        <span class='team-score'>${getRandomScore()}</span>
                        <span class='team-name'>${teamB}</span>
                    </div>
                    <div class='score-timer'>⏳ ${Math.floor(Math.random() * 90)}' Live</div>
                `;
                scoresElement.appendChild(matchRow);
            }
        }

        if (playerStatusElement) {
            playerStatusElement.innerHTML = "";
            players.forEach(player => {
                const playerRow = document.createElement("div");
                playerRow.classList.add("player-status-row");
                playerRow.innerHTML = `
                    <div class='player-name'><strong>${player.name}</strong> (${player.team}) - ${player.position}</div>
                    <div class='player-stats'>
                        ⚽ Goals: ${getRandomScore()} | 🎯 Assists: ${getRandomScore()} | 🔥 Shots: ${getRandomScore()} |
                        🎯 Passes: ${Math.floor(Math.random() * 50) + 30} | 🛑 Tackles: ${getRandomScore()} | 🧤 Saves: ${getRandomScore()} |
                        🟨 Yellow: ${Math.random() > 0.8 ? 1 : 0} | 🟥 Red: ${Math.random() > 0.95 ? 1 : 0}
                    </div>
                `;
                playerStatusElement.appendChild(playerRow);
            });
        }

        if (matchScheduleElement) {
            matchScheduleElement.innerHTML = "";
            for (let i = 0; i < 5; i++) {
                const teamA = teams[Math.floor(Math.random() * teams.length)];
                const teamB = teams[Math.floor(Math.random() * teams.length)];
                if (teamA === teamB) continue;
                
                const matchRow = document.createElement("div");
                matchRow.classList.add("match-schedule-row");
                matchRow.innerHTML = `
                    <div class='match-teams'><strong>${teamA} vs ${teamB}</strong></div>
                    <div class='match-time'>🕒 Match Time: ${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? "PM" : "AM"}</div>
                `;
                matchScheduleElement.appendChild(matchRow);
            }
        }
    }

    setInterval(updateAll, 5000);
    updateAll();
    const highlightsElement = document.getElementById("video-highlights");
    const galleryElement = document.getElementById("image-gallery");

    const highlightVideos = [
        "highlight1.mp4", "highlight2.mp4", "highlight3.mp4", "highlight4.mp4", "highlight5.mp4", "highlight6.mp4"
    ];

    const galleryImages = [
        "gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg"
    ];

    function updateHighlights() {
        if (!highlightsElement) return;
        highlightsElement.innerHTML = "";
        const highlightWrapper = document.createElement("div");
        highlightWrapper.classList.add("highlight-slider");

        highlightVideos.forEach(video => {
            const videoContainer = document.createElement("div");
            videoContainer.classList.add("highlight-item");
            videoContainer.innerHTML = `
                <video width='300' height='180' controls>
                    <source src='videos/${video}' type='video/mp4'>
                </video>
            `;
            highlightWrapper.appendChild(videoContainer);
        });

        highlightsElement.appendChild(highlightWrapper);
    }

    function updateGallery() {
        if (!galleryElement) return;
        galleryElement.innerHTML = "";
        const galleryWrapper = document.createElement("div");
        galleryWrapper.classList.add("gallery-slider");

        galleryImages.forEach(img => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("gallery-item");
            imgContainer.innerHTML = `
                <img src='images/${img}' width='300'>
            `;
            galleryWrapper.appendChild(imgContainer);
        });

        galleryElement.appendChild(galleryWrapper);
    }

    updateHighlights();
    updateGallery();

    }, 2000);
});

function explore() {
    alert("Exploring Sports News!");
}
