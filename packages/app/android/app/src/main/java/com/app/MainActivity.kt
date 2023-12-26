package com.app

import android.Manifest
import android.os.Bundle;
import android.widget.Toast
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

class MainActivity : ReactActivity() {
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "app"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  private val REQUEST_CODE_PERMISSIONS = 20
  private val REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)

  /**
  * Setup of react-navigation/native
  */
  override fun onCreate(savedInstaceState: Bundle?) {
    super.onCreate(null)

    if (allPermissionsGranted()) {
        startCamera()
    } else {
        ActivityCompat.requestPermissions(this, REQUIRED_PERMISSIONS, REQUEST_CODE_PERMISSIONS)
    }
  }

  private fun allPermissionsGranted() = REQUIRED_PERMISSIONS.all {
    ContextCompat.checkSelfPermission(baseContext, it) == PackageManager.PERMISSION_GRANTED
  }

  override fun onRequestPermissionsResult(
      requestCode: Int, permissions: Array<String>, grantResults:
      IntArray
  ) {
      super.onRequestPermissionsResult(requestCode, permissions, grantResults)
      if (requestCode == REQUEST_CODE_PERMISSIONS) {
          // If all permissions granted , then start Camera
          if (allPermissionsGranted()) {
              startCamera()
          } else {
              Toast.makeText(this, "Permissions not granted by the user.", Toast.LENGTH_SHORT)
                  .show()
              finish()
          }
      }
  }
}
