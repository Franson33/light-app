import type { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import type { HostComponent } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface NativeProps extends ViewProps {}

export default codegenNativeComponent<NativeProps>(
  "RTNCameraPreview"
) as HostComponent<NativeProps>;