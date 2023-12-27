import React, {FC} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

import {theme} from '../../theme/theme';
import RTNFrCamera from 'rtn-fr-camera/js/NativeFrnCamera';
import RTNCameraPreview from 'rtn-camera-preview/js/RTNCameraPreviewNativeComponent';

interface CameraScreenProps {}

export const CameraScreen: FC<CameraScreenProps> = () => {
  const pressHandler = async () => {
    const message = await RTNFrCamera?.captureImage();
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <RTNCameraPreview style={styles.preview} />
      <Button title="Show message" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: theme.medium,
  },
  preview: {
    width: theme.scale(300),
    height: theme.verticalScale(300),
  },
});
