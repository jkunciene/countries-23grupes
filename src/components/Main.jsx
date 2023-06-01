import { useState, useEffect } from 'react';
import getAllCountriesInfo from '../services/countriesService';
import Country from './Country';

const Main = () => {
    //state visada top level - virsuje
    const [countries, setCountries] = useState([]);

    const getData = () => {
        //gauti duomenis is services aprasyto axios get metodo
        getAllCountriesInfo()
            .then(response => {
                setCountries(response)
            }

            )
    }

    //kada pakviesti, daryti req - uzklausa - pasako mums useEffect
    useEffect(() => {
        getData();
    }, []);

    // console.log(countries)
    return (
        <div>
            <Country allCountries={countries} />
        </div>
    )
}

export default Main
