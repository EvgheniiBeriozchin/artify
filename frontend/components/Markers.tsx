import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const Markers = showPanel => {
  const data = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        properties: {icon: 'red', showPin: true},
        geometry: {
          type: 'Point',
          coordinates: [11.671077511981789, 48.26661559214509],
        },
      },
      {
        type: 'Feature',
        id: 2,
        properties: {icon: 'black', showPin: true},
        geometry: {
          type: 'Point',
          coordinates: [11.671297474912228, 48.263818816145935],
        },
      },
      {
        type: 'Feature',
        id: 3,
        properties: {icon: 'red', showPin: true},
        geometry: {
          type: 'Point',
          coordinates: [11.675370566471237, 48.26722440636233],
        },
      },
    ],
  };

  const getDescription = (id) => {
      if (id === 1)
      return {
        image: 'image1',
        title: "Jugga Jugglers",
        type: "Street performance",
        address: "",
        links: "instagram.com/jugga_jugglers\npatreon.com/jugga_jugglers",
      }

      if (id === 2)
      return {
        image: 'image2',
        title: "Time for school",
        type: "Street art",
        address: "",
        links: "instagram.com/munich_grafitti\n",
      }

      return {
        image: 'image3',
        title: "Santi Cazorla classical guitar",
        type: "Street musician",
        address: "",
        links: "facebook.com/SantiCazorla",
      }
  }

  const icon = {
    iconAllowOverlap: true,
    iconSize: 0.03,
    iconImage: require('../images/headphones_icon.jpg'),
  };

  return (
    //<>
    //<MapboxGL.Images images={images} />
    <MapboxGL.ShapeSource
    id="exampleShareSource"
      hitbox={{width: 20, height: 20}}
      onPress={e => {
        console.log("onPress: ", e.features[0].id)
        showPanel.showPanel.showPanel(getDescription(e.features[0].id));
        //console.log(e.features.at(0).properties.icon)
        if (e.features[0] && e.features[0].properties.icon === 'red') {
          console.log('Opening red icon info');
        } else {
          console.log('Opening black icon info');
        }
      }}
      shape={data}>
    <MapboxGL.SymbolLayer
        id="exampleIconName"
        //filter={['==', 'showPin', true]}
        style={icon}
    />
    </MapboxGL.ShapeSource>
    //</>
  );
};

export default Markers;
