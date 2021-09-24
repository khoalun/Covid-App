import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import classes from './CountryPicker.module.css';

import {fetchCountries} from '../../api';
const CountryPicker = ({clicked}) => {

    const [fetchedCountries, setfetchedCountries] = useState([]);
    useEffect( () =>{
      const fetchCountriesList = async () =>{
        setfetchedCountries(await fetchCountries());
      } 
      fetchCountriesList(); 
    }, [setfetchedCountries]);

    console.log(fetchedCountries);

    // const CountriesList = (
    //     fetchCountries.map( country => ()
    //         <option value="global">{country.name}</option>
    //     ))
    //     ) ;
    return (
        <FormControl className={classes.FormControl}>
            <NativeSelect defaultValue=" " onChange={(e) => clicked(e.target.value)}>
                <option value="">Global</option> {/*delete value="global" to avoid the url to : ${url}/countries/global in fetchData index.js/api */}
                {fetchedCountries.map((country,i) =><option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;