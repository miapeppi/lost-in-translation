export const InputAPI = {
    updateTranslations(id, posts) {      
        return fetch(`https://frontend-api-experis-academy.herokuapp.com/translations/${id}`, {
            method: 'PATCH',
            headers: {
                'X-API-Key': 'E4j2vtTmDfPR8BqptYOS4h2loXZl87fqeafsQMu6Nhz9WUp4LWlisPwMYgnLVT7k',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: posts
            })
        })
        .then(async response => {
            
            if(response.status === 404){
                return 'logout'
            }
            if(!response.ok) {
                console.log(response.status);
                const { error = 'Error occurred while updating translations'} = await response.json()
                throw Error(error)
            }

            return response.json()
        })
    }
}