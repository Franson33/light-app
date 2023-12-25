import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams, routeNames} from '../../navigator/routs';
import {theme} from '../../theme/theme';

import {TileButton} from '../../components';
import {CameraIcon} from '../../assets';

type IMainScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export const MainScreen: FC<IMainScreenProps> = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate(routeNames.CAMERA);
  };

  return (
    <View style={styles.container}>
      <TileButton Icon={CameraIcon} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: theme.small,
  },
});
