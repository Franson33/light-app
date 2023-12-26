package rtnfrcamera

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class CameraPreview: ReactPackage {
  override fun createViewManager(reactContext: ReactApplicationContext): List<ViewManager<*, *>>> =
    listOf(CameraPreviewManager(reactContext)) 

  override fun createNativeModule(reactContext: ReactApplicationContext): List<NativeModule> =
    emptyList()
}
