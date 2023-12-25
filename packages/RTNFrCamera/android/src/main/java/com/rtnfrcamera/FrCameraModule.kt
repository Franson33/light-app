package com.rtnfrcamera

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import androidx.core.content.ContextCompat;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.camera.core.CameraSelector
import androidx.camera.core.Preview;
import androidx.camera.core.Exepton;

import com.rtnfrcamera.NativeFrnCameraSpec
import com.rtnfrcamera.ServiceLifecycleOwner

class FrCameraModule(reactContext: ReactApplicationContext) : NativeFrnCameraSpec(reactContext) {
    private val lifecycleOwner = ServiceLifecycleOwner()

    override fun getName() = NAME

    override fun startCameraPreview(promise: Promise) {
        val executor = ContextCompat.getMainExecutor(reactContext)
        val cameraProviderFuture = ProcessCameraProvider.getInstance(reactContext)

        cameraProviderFuture.addListener({
            val cameraProvider = cameraProviderFuture.get()
            val preview = Preview.Builder().build().also {
                // TODO: find out how to add view to render camera preview
                it.setSurfaceProvider(/* Provide a SurfaceHolder here */)
            }

            cameraProvider.unbindAll()

            try {
                cameraProvider.bindToLifecycle(lifecycleOwner, CameraSelector.DEFAULT_BACK_CAMERA, preview)
                lifecycleOwner.start()
                promise.resolve("Camera preview started")
            } catch (exc: Exepton) {
                promise.reject("ERROR", exc)
            }
        }, executor)
    }

    override fun stopCameraPreview(promise: Promise) {
        try {
            lifecycleOwner.stop()
            promise.resolve("Camera preview stopped")
        } catch (exc: Exepton) {
            promise.reject("ERROR", exc)
        }

    }

    override fun captureImage(promise: Promise) {
        return promise.resolve("Look mom, its from Kotlin!") 
    }

    companion object {
        const val NAME = "RTNFrCamera"
    }
}
