import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";

const photos = [
  {
    src: "https://i.imgur.com/KaQDBGs.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/PlOhTQ7.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://i.imgur.com/VgT5WmF.png",
    width: 3,
    height: 4
  },
  {
    src: "https://i.imgur.com/ZTRx5ar.png/",
    width: 3,
    height: 4
  },
  {
    src: "https://i.imgur.com/LkdKaEH.png",
    width: 3,
    height: 4
  },
  {
    src: "https://i.imgur.com/84BLUHy.png",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/aqij4Od.png",
    width: 3,
    height: 4
  }
];

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: photos, selectAll: false };
    this.selectPhoto = this.selectPhoto.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }
  selectPhoto(event, obj) {
    let photos = this.state.photos;
    photos[obj.index].selected = !photos[obj.index].selected;
    this.setState({ photos: photos });
  }
  toggleSelect() {
    let photos = this.state.photos.map((photo, index) => {
      return { ...photo, selected: !this.state.selectAll };
    });
    this.setState({ photos: photos, selectAll: !this.state.selectAll });
  }
  render() {
    return (
      <div>
        <p>
          <button className="toggle-select" onClick={this.toggleSelect}>
            toggle select all
          </button>
        </p>
        <Gallery
          photos={this.state.photos}
          onClick={this.selectPhoto}
          ImageComponent={SelectedImage}
          direction={"column"}
        />
      </div>
    );
  }
}
export default Picture;
