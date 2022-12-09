import { useQuery } from 'react-query';
import { DIRECTUS_BASE_URL, DIRECTUS_JWT_TOKEN } from '@env'



const useCategories = () => useQuery('categories', () =>
    fetch(DIRECTUS_BASE_URL+'/items/Kategorien',
        {
            headers: {
                "Authorization": "Bearer " + DIRECTUS_JWT_TOKEN
            }
        })
        .then(res => res.json())
        .then((json) => json.data)
);
export default useCategories;