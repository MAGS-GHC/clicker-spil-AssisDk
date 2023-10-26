let clickValue = 1;
let cookies = 0;
let autoclickerRate = 0; // klik per sekund
let autoValue = 0;
let achievements = [];

// Funktiom til at opdaterer scoredisplayet 
function updateDisplay() {
    document.getElementById("click-value").textContent = `Click Value: ${clickValue}`;
    document.getElementById("cookie-count").textContent = `Cookies: ${cookies}`;
    document.getElementById("auto-count").textContent = `Autocount: ${autoValue}`;

    updateAchievements();
}

// Funktion til klik
document.getElementById("click-button").addEventListener("click", function() {
    cookies += clickValue;
    updateDisplay();
});

// Funktion ti at opgraderer ens klik værdi
document.getElementById("upgrade-click-value").addEventListener("click", function() {
    if (cookies >= 10) {
        cookies -= 10;
        clickValue += 1;
        updateDisplay();
    }
});

// Funktion til at købe autoklikker 
document.getElementById("buy-autoclicker").addEventListener("click", function() {
    if (cookies >= 100) {
        cookies -= 100;
        autoclickerRate += 1;
        autoValue = autoclickerRate;
        startAutoclicker();
        updateDisplay();
    }
});


// Funktion til at starte Autoklikker
function startAutoclicker() {
    setInterval(function() {
        cookies += autoclickerRate;
        updateDisplay();
    }, 1000); // 1000ms = 1 sekund
}

// Funktion til at opdaterer opgraderinger
function updateAchievements() {
    let achievementList = document.getElementById("achievement-list");
    if (cookies >= 100) {
        if (!achievements.includes("Reached 100 Cookies")) {
            achievements.push("Reached 100 Cookies");
            achievementList.innerHTML += "<li>Reached 100 Cookies</li>";
        }
    }
}

// Initial display update
updateDisplay();
