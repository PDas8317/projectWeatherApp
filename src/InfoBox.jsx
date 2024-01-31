import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


import "./infoBox.css";

export default function InfoBox({ info }) {

    const cold_Img = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=";
    const hot_Img = "https://media.istockphoto.com/id/1269437391/photo/hermometer-shows-the-temperature-is-hot-in-the-sky.jpg?s=612x612&w=0&k=20&c=NOlc6WtG58O-PLZtV2t5E-M4k5hl-ztBdhXM1iqOjvE=";
    const rain_Img = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    return (
        <div >
            <div className='infoBox'>
                <Card sx={{ maxWidth: 380, maxHeight: 630 }}>
                    <div className='innerDiv'>
                        <CardMedia
                            sx={{ height: 190, width: 370 }}
                            image={info.humidity > 80 ? rain_Img : info.temp > 29 ? hot_Img : cold_Img}
                            title="image"
                        />
                        <div className='container'>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bolder", color: "Blue" }}>
                                    {info.city}
                                    &nbsp;
                                    {info.humidity > 80 ? <ThunderstormIcon style={{ color: "grey" }} /> : info.temp > 20 ? <WbSunnyIcon style={{ color: "yellow" }} /> : <AcUnitIcon style={{ color: "skyblue" }} />}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="span">
                                    {/* <div className='infoDiv'> */}
                                    <p>Current weather is <i>{info.weather}</i></p>
                                    <p>Temperature : {info.temp}&deg;C</p>
                                    <p>Min-temperature : {info.temp_min}&deg;C</p>
                                    <p>Feels like : {info.feels_like}&deg;C</p>
                                    <p>Humidity : {info.humidity}</p>
                                    {/* </div> */}
                                </Typography>
                            </CardContent>
                        </div>



                        <CardActions>
                            <Button ><a href='https://www.google.com/'>Learn more</a></Button>
                        </CardActions>
                    </div>

                </Card>
            </div>
        </div>
    );
}

