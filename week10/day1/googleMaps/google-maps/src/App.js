import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const App = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 32.0853, lng: 34.7818 }}
  >
    <Marker
      position={ {lat: 32.0853, lng: 34.7818 }}
    />
  </GoogleMap>
));

<App
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnvjQD1GtUzZDb9RN9BB1MtHnHgo3_Fjo&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

export default App;
