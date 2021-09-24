export const ProfileAPI = {
    getTranslations(username) {
        return fetch(`https://frontend-api-experis-academy.herokuapp.com/translations?username=${username}`)
            .then(async response => {
                if(!response.ok) {
                    const { error = 'Error occurred while fetching translations'} = await response.json()
                    throw Error(error)
                }

                return response.json()
            })
    }
}