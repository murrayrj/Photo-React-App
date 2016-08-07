import React, { Component } from 'react';
import PhotoList from "./PhotoList";
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();

class PhotoListContainer extends Component {

  constructor(props) {
      super(props);
      this.state = { photos : [] };

  }

  componentDidMount() {
    this.fetchPhotos(this.props.params.photos);
  }

  fetchPhotos() {
    fetch('http://jsonplaceholder.typicode.com/photos/', {
        method: 'get'
    }).then(response => response.json()
    ).then(data => {
        this.setState({photos : data});
    }).catch((err)=> {
        console.log(err);
    });
  }

  render() {
    return <PhotoList {...this.props} photos={this.state.photos}/>
  }
}

export default PhotoListContainer