import React, {FC} from 'react';
import {
  Platform,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {scale} from 'react-native-size-matters';

import {theme} from '../../theme/theme';

interface ITileButtonProps {
  Icon: FC<SvgProps>;
  iconSize?: number;
  onPress: () => void;
}

export const TileButton: FC<ITileButtonProps> = ({Icon, iconSize, onPress}) => {
  const size = iconSize ? scale(iconSize) : scale(85);

  const styleHandler = (state: PressableStateCallbackType) => [
    state.pressed ? styles.buttonPressed : styles.buttonUnpressed,
    styles.container,
  ];

  return (
    <Pressable onPress={onPress} style={styleHandler}>
      <Icon width={size} height={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(100),
    height: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(5),
    backgroundColor: '#fff',
  },
  buttonPressed: {
    opacity: 0.9,
    ...Platform.select({
      ...theme.shadows.small,
    }),
  },
  buttonUnpressed: {
    ...Platform.select({
      ...theme.shadows.middle,
    }),
  },
});
