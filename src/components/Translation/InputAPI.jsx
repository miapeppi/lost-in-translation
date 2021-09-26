const apiURL = "https://frontend-api-experis-academy.herokuapp.com/translations";
const apiKey = "E4j2vtTmDfPR8BqptYOS4h2loXZl87fqeafsQMu6Nhz9WUp4LWlisPwMYgnLVT7k";

export const InputAPI = {
  // Updating users translation list with new translation
  updateTranslations(id, posts) {
    return fetch(apiURL + `/${id}`,
      {
        method: "PATCH",
        headers: {
          "X-API-Key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          translations: posts,
        }),
      })
      .then(async (response) => {
        // Checking user was found
      if (response.status === 404) {
        return "logout";
      }
      // Checking that the fetch status is ok
      if (!response.ok) {
        console.log(response.status);
        const { error = "Error occurred while updating translations" } =
          await response.json();
        throw Error(error);
      }

      return response.json();
    });
  },
};
