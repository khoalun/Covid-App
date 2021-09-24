import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import classes from './App.module.css'; 
import {fetchData} from './api';
import coronaImage from './images/Covidimage.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        console.log(fetchedData);
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        console.log(country);
        console.log(fetchedData);
        this.setState({data: fetchedData, country: country});
    }
    render() {
        const {data, country}= this.state; //destruct
        return (
            <div className={classes.container}>
            <img className={classes.image} src={coronaImage} alt='covid19'/>
                <Cards data={data}/>
                <CountryPicker clicked={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;