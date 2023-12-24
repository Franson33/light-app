import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {spacing, shadowSizes, IShadowSizes, ISpacing} from '../styles';

type ScaleFunction = (size: number) => number;

interface Theme {
  scale: ScaleFunction;
  verticalScale: ScaleFunction;
  moderateScale: ScaleFunction;
  moderateVerticalScale: ScaleFunction;
  space: ISpacing;
  shadows: IShadowSizes;
}

export const theme: Theme = {
  // Functions from react-native-size-matters
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  // Constants from ./styles folder
  space: spacing,
  shadows: shadowSizes,
};
