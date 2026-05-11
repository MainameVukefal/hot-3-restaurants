const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  try {
    const response = await fetch(
      `/api/restaurants?city=${city}`
    );

    const restaurants = await response.json();

    resultsDiv.innerHTML = "";

    restaurants.forEach((restaurant) => {
      const card = document.createElement("div");

      card.classList.add("restaurant-card");

      card.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p>Cuisine: ${restaurant.cuisine}</p>
        <p>Rating: ${restaurant.rating}</p>
        <p>${restaurant.description}</p>
      `;

      resultsDiv.appendChild(card);
    });

  } catch (error) {
    console.error("Fetch error:", error);
  }
});
