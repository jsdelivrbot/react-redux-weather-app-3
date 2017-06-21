import React, { Component } from 'react';

export default class GoogleMap extends Component{
  // this function gets called automatically once this component has rendered on the screen
  componentDidMount(){
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    });

  }
  render(){
    return <div ref="map"/>;
  }
}
