// import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
// import mapboxgl from "mapbox-gl";
// import MapCard from "./MapCard/MapCard.js";
// import { connect } from "react-redux";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibXlha2ltZW5rbyIsImEiOiJjazV2NGs5bDQwOHBhM25sYjdoejN5YmlhIn0.jrA7S2ccVQ6ZuC3tU9wCbQ";

// class Map extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 30.3,
//       lat: 59.9,
//       zoom: 12,
//     };

//     this.mapRef = React.createRef();
//   }

//   static propTypes = {
//     cardIsExist: PropTypes.bool,
//   };

//   static defaultProps = {
//     cardIsExist: false,
//   };

//   componentDidMount() {
//     const { lng, lat, zoom } = this.state;

//     const map = new mapboxgl.Map({
//       container: this.mapRef.current,
//       style: "mapbox://styles/mapbox/streets-v9",
//       center: [lng, lat],
//       zoom,
//     });

//     map.on("move", () => {
//       const { lng, lat } = map.getCenter();

//       this.setState({
//         lng: lng.toFixed(4),
//         lat: lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2),
//       });
//     });
//   }

//   render() {
//     const { cardIsExist } = this.props;
//     return (
//       <>
//         <div
//           ref={this.mapRef}
//           style={{ height: "100vh", width: "100vw" }}
//           data-testid="map"
//         />
//         {!cardIsExist && <MapCard />}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   cardIsExist: state.cardIsExist,
// });

export const Map = () => <>mapmap</>;

// export default connect(mapStateToProps)(Map);
