import './style/App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Weatherinput from './components/weatherinput';
import Weatheroutput from './components/weatheroutput';
import Container from 'react-bootstrap/Container';
import './style/App.css';

function App() {
  const [weather, setWeather] = useState([])
  const ApiKey = 'ebf06a6308489861a27888b030612b8c'
  async function fetchData(e) {
    const city = e.target.elements.city.value
    e.preventDefault()
    const apidata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`)
      .then(res => res.json())
      .then(data => data)
    if (city) {
      setWeather({
      data: apidata,
      city: apidata.name,
      country: apidata.sys.country,
      description: apidata.weather[0].description,
      temperature: apidata.main.temp,
      temperaturemin: apidata.main.temp_min,
      temperaturemax: apidata.main.temp_max,
      error:""
      }
      )
    } else {
      setWeather({
      data: '',
      city: '',
      country: '',
      description: '',
      temperature: '',
      error:'please Type City Name'
      }
      )
    }
    
  }
  
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <Container>
        <div className="row">
          <div className="col-sm-6">
            <Weatherinput getWeather={fetchData }/>
          </div>
          <div className="col-sm-6">
            <Weatheroutput
              city={weather.city}
              description={weather.description}
              temperature={weather.temperature}
              country={weather.country}
              temperaturemin= {weather.temperaturemin}
              temperaturemax= {weather.temperaturemax}
              error={weather.error}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
