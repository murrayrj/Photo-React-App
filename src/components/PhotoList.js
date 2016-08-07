import React from "react";

class PhotoList extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        let photoItems = this.props.photos.map(photo => (
            <img src={photo.thumbnailUrl} key={photo.id}/>
        ));
        return (
            <ul>
                {photoItems}
            </ul>
        );
    }
}

export default PhotoList;