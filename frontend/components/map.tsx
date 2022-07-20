import React, {useEffect, useState, useCallback} from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Markers from './markers';
import {baseContainerStyles} from './stylesheets';
import RNLocation, {Location} from 'react-native-location';

MapboxGL.setAccessToken('');

const DEFAULT_LOCATION = [11.5711, 48.1499];

interface MapProps {
  showPanel: (description: string) => void;
  centerUserLocation: boolean;
  setCenterUserLocationFalse: () => void;
}

const Map = (props: MapProps) => {
  const IS_ANDROID = Platform.OS === 'android';
  const [state, setState] = useState({
    isAndroidPermissionGranted: false,
    isFetchingAndroidPermission: IS_ANDROID,
    showUserLocation: true,
  });

  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [userLocation, setUserLocation] = useState<number[] | null>(null);

  useEffect(() => {
    if (IS_ANDROID) {
      MapboxGL.requestAndroidLocationPermissions().then(isGranted => {
        setState({
          ...state,
          isAndroidPermissionGranted: isGranted,
          isFetchingAndroidPermission: false,
        });
      });
    }
  }, [state, IS_ANDROID]);

  useEffect(() => {
    console.log('props.centerUserLocation: ', props.centerUserLocation);
    if (props.centerUserLocation) {
      console.log(userLocation);
      setLocation(userLocation || DEFAULT_LOCATION);
      props.setCenterUserLocationFalse();
    }
  }, [
    props.centerUserLocation,
    props.setCenterUserLocationFalse,
    setLocation,
    location,
    userLocation,
  ]);

  const onUpdateUserLocation = useCallback(
    (newLocation: {coords: {latitude: number; longitude: number}}) => {
      setUserLocation([
        newLocation.coords.longitude,
        newLocation.coords.latitude,
      ]);
    },
    [setUserLocation],
  );

  const onSetUserLocation = useCallback(
    (newLocation: Location | null) => {
      if (!newLocation) {
        return;
      }
      setUserLocation([newLocation.longitude, newLocation.latitude]);
    },
    [setUserLocation],
  );

  useEffect(() => {
    RNLocation.getLatestLocation({timeout: 100}).then(onSetUserLocation);
  }, []);

  return (
    <SafeAreaView style={baseContainerStyles.container}>
      <View style={baseContainerStyles.container}>
        <MapboxGL.MapView
          style={baseContainerStyles.container}
          onUserLocationUpdate={onUpdateUserLocation}>
          <MapboxGL.Camera
            zoomLevel={16}
            animationMode="flyTo"
            animationDuration={0}
            centerCoordinate={location}
          />
          <MapboxGL.UserLocation visible={state.showUserLocation} />
          <Markers showPanel={props.showPanel} />
        </MapboxGL.MapView>
      </View>
    </SafeAreaView>
  );
};

export default Map;
