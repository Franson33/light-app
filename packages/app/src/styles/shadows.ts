export interface IIOSShadow {
  shadowOffset?: {height: number; width: number};
  shadowRadius?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  elevation?: number;
}

export interface IShadow {
  android: IIOSShadow | undefined;
  ios: IIOSShadow | undefined;
}

export type ShadowName = 'none' | 'small' | 'middle';

export type IShadowSizes = Record<ShadowName, IShadow>;

export const shadowSizes: IShadowSizes = {
  none: {
    android: {elevation: 0},
    ios: {
      shadowColor: '#000',
      shadowOffset: {height: 0, width: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
    },
  },
  small: {
    android: {elevation: 4},
    ios: {
      shadowOffset: {height: 4, width: 0},
      shadowRadius: 4,
      shadowColor: '#fff',
      shadowOpacity: 0.12,
    },
  },
  middle: {
    android: {elevation: 7},
    ios: {
      shadowOffset: {height: 7, width: 0},
      shadowRadius: 7,
      shadowColor: '#fff',
      shadowOpacity: 0.12,
    },
  },
};

export default shadowSizes;