import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/all';

const getAllCountriesInfo = async() => {
    try {
        const res = await axios.get(API_URL);
        if(res.data !== undefined){
            return res.data}
    } catch (error) {
        console.log(error);
    }

}

const searchCountry = async (name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data =  await res.json()
    return data;
}

export {
    getAllCountriesInfo,
    searchCountry,
} 