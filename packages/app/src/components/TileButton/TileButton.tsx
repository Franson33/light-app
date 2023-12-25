import React, {FC} from 'react';
import {Pressable, PressableStateCallbackType, StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {theme} from '../../theme/theme';

interface ITileButtonProps {
  Icon: FC<SvgProps>;
  iconSize?: number;
  onPress: () => void;
}

export const TileButton: FC<ITileButtonProps> = ({Icon, iconSize, onPress}) => {
  const size = iconSize ? theme.scale(iconSize) : theme.scale(85);

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
    width: theme.scale(100),
    height: theme.scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonPressed: {
    opacity: 0.9,
    ...theme.shadowSmall,
  },
  buttonUnpressed: {
    ...theme.shadowMiddle,
  },
});
