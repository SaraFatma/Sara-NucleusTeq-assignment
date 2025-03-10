
// id elements

const categorySelect = document.getElementById("category");
const levelSelect = document.getElementById("level");
const startButton = document.getElementById("startButton");

// fetching categories from api and adding them to dropdown
async function loadCategories(){
    try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        
        categorySelect.innerHTML = '<option value="">Select Category</option>';
        
        data.trivia_categories.forEach( category => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching categories, Refresh the page!", error);
    }
}

// as Open Trivia Database (OTDB) has only 3 difficulty level i wont fetch it using the api
// but will be dynamically loading them.

function loadLevels() {
    const levels = ["easy", "medium", "hard"];
    levelSelect.innerHTML = '<option value="">Select Level</option>'
    levels.forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        levelSelect.appendChild(option);
    });
}

// Save user choices and navigate to quiz page
startButton.addEventListener("click", () => {
    const selectedCategory = categorySelect.value;
    const selectedLevel = levelSelect.value;

    if (selectedCategory && selectedLevel) {
        localStorage.setItem("category", selectedCategory);
        localStorage.setItem("difficulty", selectedLevel);
        window.location.href = "questionPage.html";
    } else {
        alert("Please select both category and difficulty!");
    }
});

// Initialize the page
window.addEventListener("DOMContentLoaded", () => {
    loadCategories();
    loadLevels();
});