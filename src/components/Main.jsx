import { useState, useEffect} from 'react';
import getAllCountriesInfo  from '../services/countriesService';

const Main = () => {
    //state visada top level - virsuje
    const [countries, setCountries] = useState([]);

    const getData = ()  => {
        //gauti duomenis is services aprasyto axios get metodo
       getAllCountriesInfo()
       .then(response => 
        setCountries(response.data)       
        )}

    //kada pakviesti, daryti req - uzklausa - pasako mums useEffect
    useEffect(()=>{
        getData();
    }, []);
    
    console.log(countries)
    return (
        <div>
            main
        </div>
    )
}

export default Main
