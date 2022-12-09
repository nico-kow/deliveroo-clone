import { useQuery } from 'react-query';
import { DIRECTUS_BASE_URL, DIRECTUS_JWT_TOKEN } from '@env'



const useFeatures = () => useQuery('features', () =>
    fetch(DIRECTUS_BASE_URL + '/items/Featured?fields=id,Name,Kurzbeschreibung,Restaurants.Restaurants_id.id,Restaurants.Restaurants_id.Name,Restaurants.Restaurants_id.Bewertung,Restaurants.Restaurants_id.Bild,Restaurants.Restaurants_id.Kategorien.Kategorien_id.Name',
        {
            headers: {
                "Authorization": "Bearer " + DIRECTUS_JWT_TOKEN
            }
        })
        .then(res => res.json())
        .then((json) => json.data)
);
export default useFeatures;