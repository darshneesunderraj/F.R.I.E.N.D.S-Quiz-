// ending.js

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve leaderboard data from localStorage or a backend
    var leaderboardData = getLeaderboardData();

    // Display the leaderboard on the page
    displayLeaderboard(leaderboardData);
});

function getLeaderboardData() {
    // Retrieve leaderboard data from localStorage or a backend
    // In this example, it's assumed that the leaderboard data is stored in localStorage
    // You can replace this with fetching data from a server or any other source
    var storedData = localStorage.getItem("leaderboardData");
    return storedData ? JSON.parse(storedData) : [];
}

function displayLeaderboard(leaderboardData) {
    var leaderboardContainer = document.getElementById("leaderboard");

    if (leaderboardData.length > 0) {
        // Sort the leaderboardData based on scores (assuming scores are present in the data)
        leaderboardData.sort((a, b) => b.score - a.score);

        // Display the sorted leaderboard
        var leaderboardHTML = "<h2>Leaderboard</h2><ul>";
        leaderboardData.forEach(function (entry) {
            leaderboardHTML += `<li>${entry.name}: ${entry.score}</li>`;
        });
        leaderboardHTML += "</ul>";
        leaderboardContainer.innerHTML = leaderboardHTML;
    } else {
        leaderboardContainer.innerHTML = "<p>No leaderboard data available.</p>";
    }
}
