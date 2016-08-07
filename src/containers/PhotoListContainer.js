import React, { Component } from 'react';
import PhotoList from "../components/PhotoList";
import * as actions from '../actions/Photos';
import { connect } from 'react-redux'
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();

class PhotoListContainer extends Component {

  constructor(props) {
      super(props);
  }
  componentDidMount() {
    this.fetchPhotos(this.props.params.photos);
  }

  fetchPhotos() {
    fetch('http://jsonplaceholder.typicode.com/photos/', {
        method: 'get'
    }).then(response => response.json()
    ).then(data => {
        this.props.receivePhotos(data.slice(0, 50))
    }).catch((err)=> {
        console.log(err);
    });
  }

  render() {
    return <PhotoList {...this.props} photos={this.props.photos}/>
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    receivePhotos: (photos) => {
      dispatch(actions.receivePhotos(photos))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoListContainer)