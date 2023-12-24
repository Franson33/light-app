import React, {FC} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

import RTNFrCamera from 'rtn-fr-camera/js/NativeFrnCamera';

import {theme} from '../../theme/theme';

interface CameraScreenProps {}

export const CameraScreen: FC<CameraScreenProps> = () => {
  const pressHandler = async () => {
    const message = await RTNFrCamera?.captureImage();
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <Button title="Show message" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: theme.scale(15),
  },
});
