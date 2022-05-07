import React, { Component } from 'react';
import { connect } from 'react-redux';
import weatherDataSelector from './weather.selectors';
import * as weatherActions from './weather.actions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    const { towns } = this.props;
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {towns.length
            ? towns.map(({ id, name, temperature }) => (
                <li key={id} className="city">
                  <span className="city__name">{name}</span>
                  <span className="city__temperature">{`${temperature} F`}</span>
                </li>
              ))
            : null}
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
