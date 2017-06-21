import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = { searchTerm: '' };
    this.onSearchBoxInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    // this refers to the component: SearchBar
    this.setState({searchTerm: event.target.value});
    // this.setState
  }

  onFormSubmit(event){
    event.preventDefault();
    // herein we call our action creator and fetch the weather forecast for a particular city
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({searchTerm:''});
  }


  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Enter cities"
          value={this.state.searchTerm}
          onChange={this.onSearchBoxInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    );
  }
}

// hook up the action creator fetchWeather to our SearchBar container.
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

// no state associated
export default connect ( null, mapDispatchToProps)(SearchBar);
