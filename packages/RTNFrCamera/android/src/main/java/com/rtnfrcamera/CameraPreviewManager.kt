package rtnfrcamera

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.RTNCameraPreviewManagerInterface
import com.facebook.react.viewmanagers.RTNCameraPreviewManagerDelegate

@ReactModule(name = CameraPreviewManager.NAME)
class CameraPreviewManager(context: ReactApplicationContext) : SimpleViewManager<CameraPreview>(), RTNCameraPreviewManagerInterface<CameraPreview> {
  private val delegate = RTNCameraPreviewManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<CameraPreview> = delegate

  override fun getName(): String = NAME 

  override fun createViewInstance(context: ThemedReactContext): CameraPreview = CameraPreview(context)

  companion object {
    const val NAME = "RTNCameraPreview"
  }
}