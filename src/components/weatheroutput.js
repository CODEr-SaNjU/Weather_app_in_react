import React from 'react';
import '../style/weatheroutput.css';
import Card from "react-bootstrap/Card";


const Weatheroutput = ({ description, city,  error, temperature,country,temperaturemin,temperaturemax }) => {
    return (
        <div className="WeaOutput">
            <Card className="bg-info text-dark  card ">
                <Card.Title className="text-center" >Weather of your city is  </Card.Title>
                <Card.Text>
                    <div>
                        <p className="name">{city && country && <p>City Name : {city}, { country}</p>}</p>
                        <p className="temp">{temperature && <p>temperature is : {temperature}</p>}</p>
                        <p className="max_tem">{temperaturemax && <p> Max temperature is : {temperaturemax}</p>} </p>
                        <p className="min_temp">{temperaturemin && <p>Min temperature is :  {temperaturemin}</p>}</p>
                        <p className="desc">{description && <p> Weather is {description}</p>}</p>
                        <p className="error text-center">{error && <p>{error}</p>}</p>
                  </div>
                </Card.Text>
            </Card>
        </div>
    )
}

export default Weatheroutput;
