package com.rtnfrcamera

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.rtnfrcamera.NativeFrnCameraSpec

class FrCameraModule(reactContext: ReactApplicationContext) : NativeFrnCameraSpec(reactContext) {

  override fun getName() = NAME

  override fun captureImage(promise: Promise) {
      return promise.resolve("Look mom, its from Kotlin!") 
  }

  companion object {
      const val NAME = "RTNFrCamera"
  }
}
