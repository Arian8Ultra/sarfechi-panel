/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from '@/components/ui/skeleton';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LoaderCircle, Locate } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  CircleMarker,
  ImageOverlay,
  MapContainer,
  Marker,
  TileLayer
} from 'react-leaflet';
import marker from './RedLocation.png';
import homeImage from './home.png';

interface Props {
  marks?: {
    position: [number, number];
    title?: string;
    image?: string;
    id?: string;
    href?: string;
  }[];
  isApproximate?: boolean;
  children?: React.ReactNode;
  center?: LatLngExpression;
  useUserLocation?: boolean;
  zoom?: number;
  maxZoom?: number;
  className?: string;
  useFirstMarkerPosition?: boolean;
  showZoomControl?: boolean;
}

const HomeMarket = L.icon({
  iconUrl: homeImage.src,
  iconSize: [30, 30],
  className: 'w-10 h-10 '
  // iconAnchor: [0, 0],
});
const Map = ({
  marks,
  center = [35.71981818771968, 51.398220629679315],
  useUserLocation = false,
  zoom = 8,
  maxZoom = 17,
  className = 'w-full h-[50dvh] relative rounded-2xl',
  children,
  isApproximate,
  useFirstMarkerPosition = true,
  showZoomControl = true
}: Props) => {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState<LatLngExpression>([0, 0]);
  const [userLocationArray, setUserLocationArray] = useState<number[]>([0, 0]);
  const [userHasGivenPermission, setUserHasGivenPermission] =
    useState<boolean>(true);
  const [userhasDeniedPermission, setUserHasDeniedPermission] =
    useState<boolean>(false);
  const mapRef = React.useRef<L.Map>(null);
  const [gettingLocation, setGettingLocation] = useState(false);
  // get user current location using  Geolocation API

  const getUserLocation = () => {
    setGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        if (latitude == 0 && longitude == 0) {
          setGettingLocation(true);
          // setUserHasGivenPermission(false);
          return;
        }
        if (!userHasGivenPermission) {
          setUserHasGivenPermission(true);
        }
        setGettingLocation(false);
        setUserLocation([latitude, longitude]);
        setUserLocationArray([latitude, longitude]);
        const accuracy = position.coords.accuracy;

        return [latitude, longitude];
      },
      (error) => {
        console.log(error);
        setUserHasGivenPermission(false);
        setGettingLocation(false);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 75000,
        timeout: 15000
      }
    );
  };

  const goToUserLocation = () => {
    mapRef.current?.panTo(userLocation);
  };

  useEffect(() => {
    if (useUserLocation) {
      setInterval(() => {
        if (userhasDeniedPermission) return;
        getUserLocation();
        //   recentreMap
      }, 5000);
    }
  }, [useUserLocation, userLocation]);

  return (
    <div className={`${className}`}>
      <MapContainer
        center={useFirstMarkerPosition ? marks?.[0].position : center}
        zoom={zoom}
        scrollWheelZoom={true}
        placeholder={
          <Skeleton
            className="w-full h-full rounded-2xl z-10"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          />
        }
        className="w-full h-full rounded-2xl z-10"
        ref={mapRef}
        maxZoom={maxZoom}
        markerZoomAnimation={true}
        zoomControl={showZoomControl}
      >
        <TileLayer
          key="tile-layer"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          keepBuffer={4}
          attribution="Sepanja"
        />
        <ImageOverlay
          key="image-overlay"
          url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
          bounds={[
            [userLocationArray[1] - 0.01, userLocationArray[0] - 0.01],
            [userLocationArray[1] + 0.01, userLocationArray[0] + 0.01]
          ]}
        />
        {useUserLocation && (
          <React.Fragment key="user-location-markers">
            <CircleMarker
              center={userLocation}
              radius={20}
              color="rgb(30, 136, 229)"
              fillColor="rgb(30, 136, 229)"
              fillOpacity={0.5}
              stroke={false}
              className="animate-pulse"
            />
            <CircleMarker
              center={userLocation}
              radius={7}
              color="rgb(30, 136, 229)"
              fillColor="rgb(30, 136, 229)"
              fillOpacity={1}
            />
          </React.Fragment>
        )}
        {marks &&
          marks.map((mark, index) => (
            <React.Fragment key={mark.id || `${mark.title}-${index}`}>
              {isApproximate ? (
                <>
                  <CircleMarker
                    center={mark.position}
                    radius={55}
                    color="#81D8D0"
                    fillColor="#81D8D0"
                    fillOpacity={0.5}
                    stroke={false}
                  />
                  <CircleMarker
                    center={mark.position}
                    radius={25}
                    color="#81D8D0"
                    fillColor="#81D8D0"
                    fillOpacity={1}
                    className="outline rounded-full outline-2 outline-white"
                  />
                  <Marker position={mark.position} icon={HomeMarket} />
                </>
              ) : mark.image ? (
                <Marker
                  eventHandlers={{
                    click: (e) => {
                      if (mark.href) {
                        router.push(mark.href);
                      } else {
                        router.push(`/provider/${mark.id}`);
                      }
                    }
                  }}
                  title={mark.title}
                  position={mark.position}
                  icon={L.icon({
                    iconUrl: mark.image,
                    iconSize: [40, 40],
                    className: 'w-10 h-10 rounded-full bg-white'
                  })}
                />
              ) : (
                <Marker
                  eventHandlers={{
                    click: (e) => {
                      if (mark.href) {
                        router.push(mark.href);
                      } else {
                        router.push(`/provider/${mark.id}`);
                      }
                    }
                  }}
                  title={mark.title}
                  position={mark.position}
                  icon={L.icon({
                    iconUrl: marker.src,
                    iconSize: [40, 40],
                    className: 'w-10 h-10 rounded-full'
                  })}
                />
              )}
            </React.Fragment>
          ))}
        {children}
      </MapContainer>
      <button
        className="absolute bottom-2 left-2 z-50 rounded-2xl bg-[#fff] p-1 shadow-box2 transition-all duration-300 hover:bg-[#81D8D0] disabled:opacity-50 disabled:backdrop-blur-lg"
        style={{
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
          display: useUserLocation && !userhasDeniedPermission ? 'flex' : 'none'
        }}
        disabled={gettingLocation}
        onClick={(e) => {
          goToUserLocation();
        }}
      >
        {gettingLocation ? (
          <LoaderCircle className="z-50 w-6 h-6 animate-pulse" />
        ) : (
          <Locate className="z-50 w-10 h-10" />
        )}
      </button>
    </div>
  );
};

export default Map;
