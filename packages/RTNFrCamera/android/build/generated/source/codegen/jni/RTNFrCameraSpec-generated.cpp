
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleJniCpp.js
 */

#include "RTNFrCameraSpec.h"

namespace facebook {
namespace react {

static facebook::jsi::Value __hostFunction_NativeFrnCameraSpecJSI_captureImage(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
  static jmethodID cachedMethodId = nullptr;
  return static_cast<JavaTurboModule &>(turboModule).invokeJavaMethod(rt, PromiseKind, "captureImage", "(Lcom/facebook/react/bridge/Promise;)V", args, count, cachedMethodId);
}

NativeFrnCameraSpecJSI::NativeFrnCameraSpecJSI(const JavaTurboModule::InitParams &params)
  : JavaTurboModule(params) {
  methodMap_["captureImage"] = MethodMetadata {0, __hostFunction_NativeFrnCameraSpecJSI_captureImage};
}

std::shared_ptr<TurboModule> RTNFrCameraSpec_ModuleProvider(const std::string &moduleName, const JavaTurboModule::InitParams &params) {
  if (moduleName == "RTNFrCamera") {
    return std::make_shared<NativeFrnCameraSpecJSI>(params);
  }
  return nullptr;
}

} // namespace react
} // namespace facebook