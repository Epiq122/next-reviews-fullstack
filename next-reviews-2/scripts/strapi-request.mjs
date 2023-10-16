import {writeFileSync} from 'fs';

const url = 'http://localhost:1337/api/reviews'+'?populate=*';
const response = await fetch(url);
const data = await response.json();
const formatted =JSON.stringify(data, null, 2);
const file = 'scripts/strapi-response.json';
writeFileSync(file, formatted, 'utf8');
