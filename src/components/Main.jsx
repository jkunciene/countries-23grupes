import { useState, useEffect } from 'react';
import { getAllCountriesInfo, searchCountry } from '../services/countriesService';
import Country from './Country';
import Regions from './Regions';


const Main = () => {
    //state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    const getData = () => {
        //gauti duomenis is services aprasyto axios get metodo
        getAllCountriesInfo().then(response =>{
            setCountries(response)
            setFilteredCountries(response)
        })}

    const getSearchResult = (searchWord)=>{
        searchCountry(searchWord).then(response =>{
            if(response !== undefined){
                console.log(response, searchWord)
                setFilteredCountries(response) }
            })
    }

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
        console.log('useEffect')
    }, []);

    return (
        <div className='container'>
            <Regions 
            regions={uniqueRegions} 
            filterData={filterData}
            searchCountries={getSearchResult}/>

            <Country allCountries={filteredCountries} />
        </div>
    )
}
export default Main
