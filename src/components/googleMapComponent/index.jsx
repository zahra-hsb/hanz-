// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// ));

// const MyMap = () => {
//   return (
//     <MyMapComponent
//       isMarkerShown
//       googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places"
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `400px` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   );
// };

// export default MyMap;

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}
//   >
//     <Marker position={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }} />
//   </GoogleMap>
// ));

// const MyMap = () => {
//   return (
//     <MyMapComponent
//       googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `400px` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   );
// };

// export default MyMap;

// import { useEffect, useRef } from "react"
// import { Map } from "@neshan-maps-platform/ol"
// import NeshanMap, { NeshanMapRef } from "@neshan-maps-platform/react-openlayers"


// function App() {
//   return <NeshanMap
//     mapKey="YOUR_MAP_KEY"
//   ></NeshanMap>
// }


// export default App