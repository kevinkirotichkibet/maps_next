import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading..</div>;
  return (
    <div>
      <Map />
    </div>
  );

  function Map() {
    const center = useMemo(()=>({ lat: 1.2879, lng: 36.825 }),[]);



    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF position={{ lat: -1.2879, lng: 36.825 }} />
      </GoogleMap>
    );
  }
}
