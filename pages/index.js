import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "react-widgets";
import "react-widgets/styles.css";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading..</div>;
  return (
    <div>
      <Map />
    </div>
  );

  function Map() {
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
    const [selected, setSelected] = useState(null);

    return (
      <>
        <div className="places-container">
          {/* <PlacesAutocomplete /> */}
          <PlacesAutocomplete setSelected={setSelected} />
        </div>

        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          {selected && <MarkerF position={selected} />}
          {/* <MarkerF position={{ lat: 43.45, lng: -80.49 }} /> */}
        </GoogleMap>
      </>
    );
  }
}
const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  return;
  <div>
    <Combobox>
      <ComboboxInput value={value} onChange={(e)=> setValue(e.target.value)}/>
    </Combobox>
  </div>;
};
