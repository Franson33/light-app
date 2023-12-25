import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  startCameraPreview(): Promise<unknown>;
  stopCameraPreview(): Promise<unknown>;
  captureImage(): Promise<unknown>;
}

export default TurboModuleRegistry.get<Spec>("RTNFrCamera") as Spec | null;
