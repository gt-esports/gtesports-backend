// tests/gameApi.spec.js
const { test, expect } = require("@playwright/test");

// Base URL of your API
const BASE_URL = "http://localhost:3000/games";

test.describe("Game API Tests", () => {
  let gameId; // Variable to store the created game's ID

  // Test for creating a game
  test("should create a new game", async ({ request }) => {
    const newGame = {
      name: "Test Game",
      gameType: "comp",
      discordLink: "http://discord.gg/test",
      imageLink: "http://example.com/image.png",
    };

    const response = await request.post(BASE_URL, { data: newGame });
    expect(response.status()).toBe(201);
    const game = await response.json();
    expect(game.newGame.name).toBe(newGame.name);
    gameId = game.newGame._id; // Store the ID for later use
  });

  // Test for getting all games
  test("should fetch all games", async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
    const games = await response.json();
    expect(Array.isArray(games)).toBeTruthy(); // Ensure the response is an array
  });

  // Test for updating a game
  test("should update a game", async ({ request }) => {
    const updateData = { discordLink: "http://discord.gg/updated" };
    const response = await request.patch(`${BASE_URL}/${gameId}`, {
      data: updateData,
    });
    expect(response.status()).toBe(200);

    const updatedGame = await response.json();
    expect(updatedGame.discordLink).toBe(updateData.discordLink);
  });

  // Test to create and delete game
  test("should delete a game by ID", async ({ request }) => {
    // Ensure gameId is valid
    if (!gameId) {
      throw new Error(
        "gameId is not set. Ensure the game creation test ran successfully."
      );
    }

    console.log("Attempting to check if game exists with ID:", gameId);
    const getResponse = await request.get(`${BASE_URL}/${gameId}`);
    expect(getResponse.status()).toBe(200);
    console.log("Attempting to delete game with ID:", gameId);

    const response = await request.delete(`${BASE_URL}/${gameId}`);
    expect(response.status()).toBe(204); // No content returned

    // Verify that the game has been deleted
    const fetchResponse = await request.get(`${BASE_URL}/${gameId}`);
    expect(fetchResponse.status()).toBe(404); // Should return 404 Not Found
  });

  // Test for creating a game again to check delete all functionality
  test("should create another game for delete all test", async ({
    request,
  }) => {
    const newGame = {
      name: "Another Game",
      gameType: "casual",
      discordLink: "http://discord.gg/another",
      imageLink: "http://example.com/another.png",
    };

    const response = await request.post(BASE_URL, { data: newGame });
    expect(response.status()).toBe(201);
  });

  // Test for deleting all games
  test("should delete all games", async ({ request }) => {
    const response = await request.delete(BASE_URL); // Ensure this route is implemented
    expect(response.status()).toBe(204); // No content returned

    // Verify that all games are deleted
    const fetchResponse = await request.get(BASE_URL);
    expect(fetchResponse.status()).toBe(200);
    const games = await fetchResponse.json();
    expect(games.length).toBe(0); // Should be an empty array
  });
});
