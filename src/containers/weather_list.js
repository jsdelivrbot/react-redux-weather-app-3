import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

  renderCityList(cityData){
    const cityName = cityData.city.name;
    const temperatureArray = _.map(cityData.list.map(weather => weather.main.temp), (tempInK) => tempInK - 273);
    const presssureArray = cityData.list.map(weather => weather.main.pressure);
    const humidityArray = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return(
      <tr key={cityName} >
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart dataArray={temperatureArray} color="orange" units="C" /></td>
        <td><Chart dataArray={presssureArray} color="green" units="hPa"/></td>
        <td><Chart dataArray={humidityArray} color="blue" units="%"/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (C) </th>
            <th> Pressure (hPa) </th>
            <th> Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityList)}
        </tbody>
      </table>

    );
  }
}

// function mapStateToProps(state){
//     return { weather : state.weather };
// }

function mapStateToProps ({weather}){
  return {weather};
}

export default connect (mapStateToProps)(WeatherList);
