import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { mapStyles } from "./google-map.config";
import styles from "./google-map.module.scss";

function GoogleMap() {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY) {
    return null;
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
      <Map
        styles={mapStyles}
        defaultCenter={{ lat: 53.121, lng: 18.034 }}
        defaultZoom={17}
        gestureHandling={"cooperative"}
        disableDefaultUI={true}
        className={styles.gmap}
      >
        <Marker position={{ lat: 53.121, lng: 18.037 }} />
      </Map>
    </APIProvider>
  );
}

export { GoogleMap };
