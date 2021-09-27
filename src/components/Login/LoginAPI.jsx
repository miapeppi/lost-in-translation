const apiURL = "https://frontend-api-experis-academy.herokuapp.com/translations";
const apiKey = "E4j2vtTmDfPR8BqptYOS4h2loXZl87fqeafsQMu6Nhz9WUp4LWlisPwMYgnLVT7k";

export const LoginAPI = {
  // Fetching the user data from the API by username
  login(givenUsername) {
    return fetch(apiURL + `?username=${givenUsername}`)
    .then(async (response) => {
        // Checking that the fetch status is ok
        if (!response.ok) {
          const { error = "An unknown error occurred" } = await response.json();
          throw new Error(error);
        }
        const profile = await response.json();
        // If profile with the given username couldn't be found, create a new user
        if (profile.length === 0) {
          await this.createNewUser(givenUsername);
          return this.login(givenUsername);
        }
        return profile;
      }
    );
  },
  // Creating a new user with the given username
  createNewUser(username) {
    return fetch(apiURL, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        translations: [],
      }),
    })
    .then(async (response) => {
      // Checking that the fetch status is ok
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
    });
  },
};
