import { useState, useEffect } from 'react';
import getAllCountriesInfo from '../services/countriesService';
import Country from './Country';
import Regions from './Regions';


const Main = () => {
    //state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    const getData = () => {
        //gauti duomenis is services aprasyto axios get metodo
        getAllCountriesInfo().then(response =>setCountries(response))}

const uniqueRegions = ["All", ...new Set(countries.map((country) => country.region))]
  console.log(uniqueRegions);

  const filterData = (region)=>{
    console.log(region)
    if (region !== 'All'){
        const filtered = countries.filter((country) => country.region.includes(region));
        console.log(countries, filtered)
        setFilteredCountries(filtered)
    } else {
        setFilteredCountries(countries);
    }
  }

  console.log(filteredCountries);
    //kada pakviesti, daryti req - uzklausa - pasako mums useEffect
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <Regions 
            regions={uniqueRegions} 
            filterData={filterData}/>

            <Country allCountries={filteredCountries} />
        </div>
    )
}
export default Main
