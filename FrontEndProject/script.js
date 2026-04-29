// Video data - all the workout videos we have
const videos = [
  {
    title: "Chest Workout at Home",
    category: "chest",
    desc: "10 minute chest workout without equipment",
    emoji: "💪",
    thumbnail: "https://img.youtube.com/vi/xtEFVrwZFGU/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=xtEFVrwZFGU"
  },
  {
    title: "Back Exercise Routine",
    category: "back",
    desc: "Strengthen your back with these exercises",
    emoji: "🏋️",
    thumbnail: "https://www.shutterstock.com/image-photo/portrait-young-muscular-man-training-600nw-2251364509.jpg",
    url: "https://www.youtube.com/watch?v=inJiwiWQDog"
  },
  {
    title: "Leg Day Workout",
    category: "legs",
    desc: "Full leg workout you can do at home",
    emoji: "🦵",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDIdkUlPlHvkZMoS0f0UJ80n2lkfYAl8d4g&s",
    url: "https://www.youtube.com/watch?v=KvJU6o50lLM"
  },
  {
    title: "Abs and Core Workout",
    category: "abs",
    desc: "Get abs of steel with this routine",
    emoji: "⚡",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_kWC6Fm85sVvOWZCR00TBcOvpsFY0NpWOA&s",
    url: "https://www.youtube.com/watch?v=IrA9dvgRKR0"
  },
  {
    title: "Push Up Challenge",
    category: "chest",
    desc: "50 push ups challenge for beginners",
    emoji: "💪",
    thumbnail: "https://www.shutterstock.com/image-photo/push-ups-workout-muscular-athlete-260nw-1591184866.jpg",
    url: "https://www.youtube.com/watch?v=mge3Q4nkMPI"
  },
  {
    title: "Pull Up Guide",
    category: "back",
    desc: "How to do pull ups properly",
    emoji: "🏋️",
    thumbnail: "https://img.youtube.com/vi/eGo4IYlbE5g/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=eGo4IYlbE5g"
  }
];

// This function puts videos on the page
function displayVideos(filter) {
  const grid = document.getElementById("videoGrid");
  if (!grid) return; 
  
  grid.innerHTML = "";
  videos.forEach((video) => {
    if (filter === "all" || video.category === filter) {
      grid.innerHTML += `
                <div class="video-card">
                    <a href="${video.url}" target="_blank" class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <span class="play-icon">▶</span>
                    </a>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-desc">${video.desc}</p>
                        <a href="${video.url}" target="_blank" class="watch-btn">Watch Now</a>
                    </div>
                </div>
            `;
    }
  });
}

// Handle filter button clicks
function filterVideos(category, event) {
  const buttons = document.querySelectorAll(".category-filter button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (event && event.target) {
    event.target.classList.add("active");
  }
  
  displayVideos(category);
}

// BMI calculator - takes weight and height, gives BMI number
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value) / 100;

  if (!weight || !height) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  let bmi = weight / (height * height);
  let result = "";

  if (bmi < 18.5) result = "Underweight";
  else if (bmi < 25) result = "Normal";
  else if (bmi < 30) result = "Overweight";
  else result = "Obese";

  document.getElementById("result").innerText =
    "Your BMI is " + bmi.toFixed(2) + " (" + result + ")";
}

// Generate workout plan based on what user selects
function generateWorkout() {
  const goal = document.getElementById("goal").value;
  const resultDiv = document.getElementById("workoutResult");

  if (!goal) {
    resultDiv.innerHTML = "Please select a workout type!";
    return;
  }

  let content = "";

  if (goal === "beginner") {
    content = `
            <h3>Beginner Plan (No Equipment)</h3>
            <ul>
                <li>Jumping Jacks - 20 sec</li>
                <li>High Knees - 20 sec</li>
                <li>Squats - 10 reps</li>
                <li>Rest - 30 sec</li>
            </ul>`;
  } else if (goal === "intermediate") {
    content = `
            <h3>Intermediate Plan</h3>
            <ul>
                <li>Burpees - 10 reps</li>
                <li>Mountain Climbers - 30 sec</li>
                <li>Lunges - 12 reps</li>
                <li>Plank - 30 sec</li>
            </ul>`;
  } else if (goal === "advanced") {
    content = `
            <h3>Advanced Plan</h3>
            <ul>
                <li>Burpees - 15 reps</li>
                <li>Jump Squats - 15 reps</li>
                <li>Plank - 45 sec</li>
                <li>High Knees - 40 sec</li>
            </ul>`;
  }

  resultDiv.innerHTML = content;
}

// Show all videos when page loads
displayVideos("all");