/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import marker from "@/components/map/RedLocation.png";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { CircleMarker, MapContainer, Marker, TileLayer } from "react-leaflet";
import { Skeleton } from "../ui/skeleton";
import LeafletSearch from "./LeafletSearch";
import { LocateIcon, MapPin } from "lucide-react";
export interface SelectableMapProps {
  children?: React.ReactNode;
  center?: LatLngExpression;
  useUserLocation?: boolean;
  zoom?: number;
  maxZoom?: number;
  className?: string;
  location?: LatLngExpression;
  setLocation?: React.Dispatch<React.SetStateAction<LatLngExpression>>;
  mapRef: React.RefObject<L.Map | null>;
  hasSearch?: boolean;
}

const NewMarker = L.icon({
  iconUrl: marker.src,
  iconSize: [40, 40],
  // iconAnchor: [0, 0],
});

const SelectableMap = ({
  center = [35.71981818771968, 51.398220629679315],
  useUserLocation = false,
  zoom = 8,
  maxZoom = 17,
  className = "w-full h-[50dvh] relative rounded-2xl",
  children,
  location,
  mapRef,
  hasSearch = true,
}: SelectableMapProps) => {
  // const mapRef = React.useRef<L.Map>(null);
  const [userLocation, setUserLocation] = useState<LatLngExpression>([0, 0]);
  const [userLocationArray, setUserLocationArray] = useState<number[]>([0, 0]);
  const [markerLoaction, setMarkerLocation] = useState<LatLngExpression>(
    location || center,
  );

  const [searchLocation, setSearchLocation] = useState<LatLngExpression>();

  const [zoomScale, setZoomScale] = useState<number>(zoom);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        setUserLocationArray([latitude, longitude]);
        return [latitude, longitude];
      },
      () => {
        console.log("location not found");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      },
    );
  };

  const goToUserLocation = () => {
    mapRef?.current?.panTo(userLocation);
  };

  useEffect(() => {
    if (useUserLocation) {
      getUserLocation();
      setInterval(() => {
        getUserLocation();
      }, 10000);
    }
  }, [useUserLocation]);

  useEffect(() => {
    if (searchLocation) {
      mapRef?.current?.panTo(
        searchLocation || location || [35.71981818771968, 51.398220629679315],
      );
    }
  }, [location, mapRef, searchLocation]);
  return (
    <div className={`${className}`}>
      <MapContainer
        center={location}
        zoom={zoomScale}
        zoomAnimation={true}
        doubleClickZoom={false}
        scrollWheelZoom={true}
        placeholder={<Skeleton className='w-full h-full rounded-2xl z-10' />}
        className='w-full h-full rounded-2xl z-10'
        ref={mapRef}
        maxZoom={maxZoom}
        markerZoomAnimation={true}
        zoomControl={false}
      >
        <TileLayer
          key='tile-layer'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          keepBuffer={4}
          attribution='Sepanja'
        />
        {/* <Marker icon={NewMarker} position={location || center} /> */}
        {/* {searchLocation && (
          <Marker position={searchLocation} icon={NewMarker} />
        )} */}
        {useUserLocation && (
          <>
            <CircleMarker
              center={userLocation}
              radius={20}
              color='rgb(30, 136, 229)'
              fillColor='rgb(30, 136, 229)'
              fillOpacity={0.5}
              stroke={false}
              className='
            animate-pulse
            '
            />
            <CircleMarker
              center={userLocation}
              radius={7}
              color='rgb(30, 136, 229)'
              fillColor='rgb(30, 136, 229)'
              fillOpacity={1}
            />
          </>
        )}
        {children}
      </MapContainer>
      {hasSearch && <LeafletSearch setSearchingLocation={setSearchLocation} />}

      <button
        className='absolute bottom-2 left-2 z-50 rounded-full aspect-square bg-[#fff] p-1 shadow-box2 transition-all duration-300 hover:bg-[#81D8D0]'
        style={{
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          display: useUserLocation ? "flex" : "none",
        }}
        onClick={(e) => {
          goToUserLocation();
        }}
      >
        <LocateIcon className='z-50 w-10 h-10' />
      </button>
      <MapPin className='absolute bottom-1/2 left-1/2 z-50 w-[30px] h-[30px] transform -translate-x-1/2 translate-y-1/2 fill-gold-400 text-primary-700' />

      <div className='flex flex-col absolute bottom-2 right-2 bg-white rounded-full z-50'>
        <button
          className='w-8 h-8 rounded-full bg-white text-xlarge'
          onClick={() => {
            mapRef?.current?.zoomIn();
          }}
        >
          +
        </button>
        <button
          className='w-8 h-8 rounded-full bg-white text-xlarge'
          onClick={() => {
            mapRef?.current?.zoomOut();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default SelectableMap;
