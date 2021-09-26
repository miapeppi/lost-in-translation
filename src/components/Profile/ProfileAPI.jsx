const apiURL = "https://frontend-api-experis-academy.herokuapp.com/translations";

export const ProfileAPI = {
  // Fetching the array of translations by the username
  getTranslations(username) {
    return fetch(apiURL + `?username=${username}`)
    .then(async (response) => {
      // Checking that the fetch status is ok
      if (!response.ok) {
        const { error = "Error occurred while fetching translations" } =
          await response.json();
        throw Error(error);
      }
      return response.json();
    });
  },
};
