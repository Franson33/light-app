/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleH.js
 */

#pragma once

#include <ReactCommon/TurboModule.h>
#include <react/bridging/Bridging.h>

namespace facebook {
namespace react {


  class JSI_EXPORT NativeFrnCameraCxxSpecJSI : public TurboModule {
protected:
  NativeFrnCameraCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker);

public:
  virtual jsi::Value captureImage(jsi::Runtime &rt) = 0;

};

template <typename T>
class JSI_EXPORT NativeFrnCameraCxxSpec : public TurboModule {
public:
  jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &propName) override {
    return delegate_.get(rt, propName);
  }

  static constexpr std::string_view kModuleName = "RTNFrCamera";

protected:
  NativeFrnCameraCxxSpec(std::shared_ptr<CallInvoker> jsInvoker)
    : TurboModule(std::string{NativeFrnCameraCxxSpec::kModuleName}, jsInvoker),
      delegate_(static_cast<T*>(this), jsInvoker) {}

private:
  class Delegate : public NativeFrnCameraCxxSpecJSI {
  public:
    Delegate(T *instance, std::shared_ptr<CallInvoker> jsInvoker) :
      NativeFrnCameraCxxSpecJSI(std::move(jsInvoker)), instance_(instance) {}

    jsi::Value captureImage(jsi::Runtime &rt) override {
      static_assert(
          bridging::getParameterCount(&T::captureImage) == 1,
          "Expected captureImage(...) to have 1 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::captureImage, jsInvoker_, instance_);
    }

  private:
    T *instance_;
  };

  Delegate delegate_;
};

} // namespace react
} // namespace facebook