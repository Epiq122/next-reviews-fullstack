import {writeFileSync} from 'fs';
import qs from 'qs';

const url = 'http://localhost:1337/api/reviews' + '?' + qs.stringify({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: {
        image: {
            fields: ['url', 'width', 'height', 'alt']
        }
    },
    sort: 'publishedAt:desc',
    pagination: {
        pageSize: 6
    }
}, {encodeValuesOnly: true});

console.log(url);

const response = await fetch(url);
const data = await response.json();
const formatted = JSON.stringify(data, null, 2);
const file = 'scripts/strapi-response.json';
writeFileSync(file, formatted, 'utf8');
