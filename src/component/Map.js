/* global google */
import React, {Component} from "react";
import { 
    withScriptjs, 
    withGoogleMap, 
    GoogleMap, 
    Marker,
    InfoWindow
 } from "react-google-maps"

const MyMapComponent = withScriptjs(
    withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            zoom={props.zoom}
            center={props.center}
            defaultCenter={{ lat: 52.481150, lng: 13.435350 }}
        >
    {props.markers && 
    props.markers.filter(marker => marker.isVisible).map((marker, idx, arr) => {
        const venueInfo = props.venues.find(venue => venue.id === marker.id);
        return (
            <Marker 
                key={idx} 
                position={{ lat: marker.lat, lng: marker.lng }} 
                onClick={() => props.handleMarkerClick(marker)}
                animation={arr.length === 1 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
            >
                {marker.isOpen && venueInfo.bestPhoto && (
                    <InfoWindow>
                        <React.Fragment>
                            <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={"Venue"}/>
                            <p>{venueInfo.name}</p>
                            <p>Foursquare Rating: {venueInfo.rating}</p>
                        </React.Fragment>
                    </InfoWindow>
                )}
        </Marker>)
    })}
  </GoogleMap>
))

export default class Map extends Component {
    render() {
        return (
        <MyMapComponent
            {...this.props}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyABvaKOgqqYSEIMQUGKKfVYzl9qVFt65K8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div role="application" className="mapContainer"/>}
            mapElement={<div style={{ height: `100%` }} />}
        />)
    }
}