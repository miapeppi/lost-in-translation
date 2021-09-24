export const LoginAPI = {
    login(givenUsername){
        return fetch(`https://frontend-api-experis-academy.herokuapp.com/translations?username=${givenUsername}`)
            .then(async (response) => {
                if (!response.ok) {
                    const { error = 'An unknown error occured' } = await response.json()
                    throw new Error(error)
                }
                const profile = await response.json()
                if(profile.length === 0){
                    return this.createNewUser(givenUsername)
                }
                return profile
            })
    },
    createNewUser(username) {
        return fetch('https://frontend-api-experis-academy.herokuapp.com/translations', {
            method: 'POST',
            headers: {
                'X-API-Key': 'E4j2vtTmDfPR8BqptYOS4h2loXZl87fqeafsQMu6Nhz9WUp4LWlisPwMYgnLVT7k',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "translations": []
            })
        })
        .then(async (response) => {
            if (!response.ok) {
                const { error = 'An unknown error occured' } = await response.json()
                throw new Error(error)
            }

            return response.json()
        })
    }
}