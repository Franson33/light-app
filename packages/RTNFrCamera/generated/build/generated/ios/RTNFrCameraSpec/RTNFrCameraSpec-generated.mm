/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleObjCpp
 *
 * We create an umbrella header (and corresponding implementation) here since
 * Cxx compilation in BUCK has a limitation: source-code producing genrule()s
 * must have a single output. More files => more genrule()s => slower builds.
 */

#import "RTNFrCameraSpec.h"


namespace facebook {
  namespace react {
    
    static facebook::jsi::Value __hostFunction_NativeFrnCameraSpecJSI_captureImage(facebook::jsi::Runtime& rt, TurboModule &turboModule, const facebook::jsi::Value* args, size_t count) {
      return static_cast<ObjCTurboModule&>(turboModule).invokeObjCMethod(rt, PromiseKind, "captureImage", @selector(captureImage:reject:), args, count);
    }

    NativeFrnCameraSpecJSI::NativeFrnCameraSpecJSI(const ObjCTurboModule::InitParams &params)
      : ObjCTurboModule(params) {
        
        methodMap_["captureImage"] = MethodMetadata {0, __hostFunction_NativeFrnCameraSpecJSI_captureImage};
        
    }
  } // namespace react
} // namespace facebook
