// Database of sub-games (Direct Google Drive links integrated)
const subGamesData = {
    cyber: [
        { name: "Cyber Warriors: Origins (v1.0)", size: "45 GB", tag: "Base Game", link: "#" },
        { name: "Cyber Warriors: Phantom Liberty Edition", size: "62 GB", tag: "DLC Included", link: "#" }
    ],
    racing: [
        { name: "Speed Horizon: Tokyo Drift", size: "28 GB", tag: "Arcade", link: "#" },
        { name: "Speed Horizon: Ultimate Open World", size: "50 GB", tag: "Simulation", link: "#" }
    ],
    strategy: [
        { 
            name: "Papers, Please (v1.4.11.124)", 
            size: "93 MB", 
            tag: "Simulation / Indie", 
            link: "https://drive.google.com/uc?export=download&id=1XnPH4I8HASlWn2h3XPuxNPL0I88lnDYm" 
        }
    ]
};

// Function to open sub-category modal and load specific games
function openSubCategory(categoryKey) {
    const modal = document.getElementById('subCategoryModal');
    const modalTitle = document.getElementById('modalHubTitle');
    const subGameList = document.getElementById('subGameList');

    subGameList.innerHTML = '';

    if (categoryKey === 'cyber') {
        modalTitle.textContent = "Cyber Warriors Series Editions";
    } else if (categoryKey === 'racing') {
        modalTitle.textContent = "Speed Horizon Racing Editions";
    } else if (categoryKey === 'strategy') {
        modalTitle.textContent = "Strategy & Indie Editions";
    }

    const games = subGamesData[categoryKey] || [];
    games.forEach(game => {
        const item = document.createElement('div');
        item.className = 'sub-game-item';
        item.innerHTML = `
            <div class="sub-game-info">
                <h4>${game.name}</h4>
                <p>Size: ${game.size} | ${game.tag}</p>
            </div>
            <button class="download-btn" onclick="startDownload('${game.link}', '${game.name}')">
                <i class="fas fa-download"></i> Download
            </button>
        `;
        subGameList.appendChild(item);
    });

    modal.style.display = 'flex';
}

// Function to close sub-category modal
function closeSubModal() {
    document.getElementById('subCategoryModal').style.display = 'none';
}

// Function to filter main game cards based on category
function filterGames(category) {
    const cards = document.querySelectorAll('.game-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event && event.target && event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to handle download action
function startDownload(gameUrl, gameName) {
    if (gameUrl && gameUrl !== "#") {
        // Direct download via Google Drive link
        window.location.href = gameUrl;
    } else {
        alert("Download link for " + gameName + " will be available soon!");
    }
}

// Close modal when clicking outside the modal box
window.onclick = function(event) {
    const subModal = document.getElementById('subCategoryModal');
    if (event.target == subModal) {
        subModal.style.display = 'none';
    }
}