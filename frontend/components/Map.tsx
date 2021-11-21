import React, {useState, Component, useEffect} from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Markers from './Markers';

MapboxGL.setAccessToken(
  'INSERT_ACCESS_TOKEN',
);

const Map = showPanel => {
  const IS_ANDROID = Platform.OS === 'android';
  const [state, setState] = useState({
    isAndroidPermissionGranted: false,
    isFetchingAndroidPermission: IS_ANDROID,
    showUserLocation: true,
    location: [11.667886132841891, 48.262606587451224],
  });
  /*
  useEffect(() => {
    if (IS_ANDROID) {
      const isGranted = getIsGranted();
      setState({
        ...state,
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
  }, [state, IS_ANDROID]); 

  const getIsGranted = async () => {
    return await MapboxGL.requestAndroidLocationPermissions();
  };
  */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.container}>
          <MapboxGL.Camera
            zoomLevel={16}
            animationMode="flyTo"
            animationDuration={0}
            centerCoordinate={state.location}
          />
          <MapboxGL.UserLocation />
          <Markers showPanel={showPanel} />
        </MapboxGL.MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
