import { API_TOKEN } from "../constans";
// Fetch random photos from unslash
function getPhotos() {
    const apiRes = fetch(`https://api.unsplash.com/photos?${API_TOKEN}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Something went wrong!');
        })
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return alert(error);
        })
    return apiRes;
}
export default getPhotos;