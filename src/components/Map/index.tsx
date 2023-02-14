import { FC } from "react";
import { Map as MapGL } from "react-map-gl";

import { MAP_TOKEN } from "constants/mapToken.js";

import MapCard from "./MapCard/MapCard.js";

export const Map: FC = () => {
  return (
    <MapGL
      initialViewState={{
        longitude: 24.938379,
        latitude: 60.169857,
        zoom: 12,
      }}
      style={{ height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAP_TOKEN}
    />
  );
};
// class Map extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 30.3,
//       lat: 59.9,
//       zoom: 12,
//     };

//     this.mapRef = createRef();
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
//     // const { cardIsExist } = this.props;
//     return (
//       <>
//         <div
//           ref={this.mapRef}
//           style={{ height: "100vh", width: "100vw" }}
//           data-testid="map"
//         />
//         {/* {!cardIsExist && <MapCard />} */}
//       </>
//     );
//   }
// }
