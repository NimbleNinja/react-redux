import React, { Component } from 'react';
import { connect } from 'react-redux';
import weatherDataSelector from './weather.selectors';
import * as weatherActions from './weather.actions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.towns.map(({ id, name, temperature }) => (
            <li key={id} className="city">
              <span className="city__name">{name}</span>
              <span className="city__temperature">{`${temperature} F`}</span>
            </li>
          ))}
          <li className="city">
            <span className="city__name">Lake Hilmaside</span>
            <span className="city__temperature">78 F</span>
          </li>
          <li className="city">
            <span className="city__name">Lake Minnieberg</span>
            <span className="city__temperature">8 F</span>
          </li>
          <li className="city">
            <span className="city__name">East Gerhardshire</span>
            <span className="city__temperature">23 F</span>
          </li>
        </ul>
      </main>
    );
  }
}

const mapState = state => ({
  towns: weatherDataSelector(state),
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
