package rtnfrcamera

import android.content.Context
import android.graphics.Color

class CameraPreview : SurfaceView {
  constructor(context: Context?) : super(context) {
    configureComponent() 
  }

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
    configureComponent()
  }

  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(context, attrs, defStyleAttr) {
    configureComponent()
  }

  private fun configureComponent() {
    setBackgroundColor(Color.RED)
  }
}