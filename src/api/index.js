import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => { //this case: data is object
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl); //after get url, will show {data: {}, status:200, config:{}} use destrucing js
        
        const modifiedData = { 
            confirmed,
            recovered, //if value and key has the same name, can take recovered instead of recovered=recovered 
            deaths,
            lastUpdate
        }
        return modifiedData;
        
    }catch(e){
        console.log(e);
    }
}

export const fetchDailyData = async () =>{ //this case: data is array [{0}, {1}, {2}]
    try {
        const {data} = await axios.get(`${url}/daily`);

        console.log(data);
        const modifiedData = data.map((dailyData) =>(
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        ));
        return modifiedData;
        
    } catch (e){
        console.log(e);
    }
}

export const fetchCountries = async () =>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
         const modifiedData = countries.map (country =>  country.name);
        return modifiedData;
    }catch(e){
        console.log(e);
    }
}