import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  captureImage(): Promise<unknown>;
}

export default TurboModuleRegistry.get<Spec>("RTNFrCamera") as Spec | null;
