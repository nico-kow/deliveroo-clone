import { useQuery } from 'react-query';
import { DIRECTUS_BASE_URL, DIRECTUS_JWT_TOKEN } from '@env'



const useRestaurant = (restaurantId) => useQuery(['restaurant', restaurantId], () =>
    fetch(DIRECTUS_BASE_URL+'/items/Restaurants/' + restaurantId + '?fields=*,Kategorien.Kategorien_id.Name,Gerichte.*',
        {
            headers: {
                "Authorization": "Bearer " + DIRECTUS_JWT_TOKEN
            }
        })
        .then(res => res.json())
        .then((json) => json.data)
);

export default useRestaurant;