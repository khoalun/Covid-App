import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames'; //apply multiple classes
import classes from './Cards.module.css';

//xs: sreen extra small on mobile devices, md: medium on bigger devices
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => { //we only have 1 props that is data (in App.js)
    console.log(confirmed);
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(classes.Card, classes.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                               start={0}
                               end={confirmed.value} 
                               duration={2.5}
                               separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.Card, classes.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                               start={0}
                               end={recovered.value} 
                               duration={2.5}
                               separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.Card, classes.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                               start={0}
                               end={deaths.value} 
                               duration={2.5}
                               separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
                
            </Grid> 
        </div>
    );
};

export default Cards;