import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {performancePageStyles} from './stylesheets';
import * as colors from './colors';

import images from '../images/index';
import CircularButton from './circular_button';

interface PerformancePageProps {
  data: {image: string; title: string};
}

export default function PerformancePage(props: PerformancePageProps) {
  return (
    <View style={performancePageStyles.container}>
      <Image
        style={performancePageStyles.borderedImage}
        source={images[props.data.image]}
      />
      <View style={performancePageStyles.row}>
        <View style={performancePageStyles.titleTextBackground}>
          <Text style={performancePageStyles.h1Text}>{props.data.title}</Text>
        </View>
      </View>
      <View style={performancePageStyles.row}>
        <View style={performancePageStyles.cell50percent}>
          <View style={performancePageStyles.iconBackground}>
            <Icon
              name={'palette'}
              size={30}
              color={colors.ACCENT_COLOR_BRIGHT}
            />
          </View>
          <View style={performancePageStyles.halfRowTextBackground}>
            <Text style={performancePageStyles.h3Text}>{'Mural'}</Text>
          </View>
        </View>
        <View style={performancePageStyles.rowDelimiter} />
        <View style={performancePageStyles.cell50percent}>
          <View style={performancePageStyles.iconBackground}>
            <Icon
              name={'schedule'}
              size={30}
              color={colors.ACCENT_COLOR_BRIGHT}
            />
          </View>
          <View style={performancePageStyles.halfRowTextBackground}>
            <Text style={performancePageStyles.h3Text}>{'18:00'}</Text>
          </View>
        </View>
      </View>
      <View style={performancePageStyles.row}>
        <View style={performancePageStyles.iconBackground}>
          <Icon name={'place'} size={30} color={colors.ACCENT_COLOR_BRIGHT} />
        </View>
        <View style={performancePageStyles.rowTextBackground}>
          <Text style={performancePageStyles.h3Text}>
            {'Duindoornstraat 115-13'}
          </Text>
        </View>
      </View>
      <View style={performancePageStyles.row}>
        <View style={performancePageStyles.iconBackground}>
          <Icon
            name={'emoji-people'}
            size={30}
            color={colors.ACCENT_COLOR_BRIGHT}
          />
        </View>
        <View style={performancePageStyles.rowTextBackground}>
          <Text style={performancePageStyles.h3Text}>{'Blanksy'}</Text>
        </View>
      </View>
      <View style={performancePageStyles.textBlock}>
        <View style={performancePageStyles.textBlockText}>
          <View style={performancePageStyles.bodyTextBackground}>
            <Text style={performancePageStyles.h5Text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            </Text>
          </View>
        </View>
      </View>
      <View style={performancePageStyles.buttonWrapper2}>
        <View style={performancePageStyles.buttonWrapper}>
          <CircularButton
            name={'credit-card'}
            onPress={() => console.log('askdalsjdlk')}
          />
        </View>
      </View>
    </View>
  );
}

/*
      <CustomButton
        size="sm"
        backgroundColor="#000000"
        title="Donate"
        onPress={() => console.log('test1')}
      />
*/
