import type { ViewProps } from "ViewPropTypes";
import type { HostComponent } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export default codegenNativeComponent<ViewProps>(
  "RTNCameraPreview"
) as HostComponent<ViewProps>;
