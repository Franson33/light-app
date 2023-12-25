package com.rtnfrcamera;

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry

class ServiceLifecycleOwner : LifecycleOwner {
    privat val lifecycleRegistry = LifecycleRegistry(this)

    init {
      lifecycleRegistry.currentState = Lifecycle.State.CREATED
    }

    fun start() {
      lifecycleRegistry.currentState = Lifecycle.State.STARTED 
    }

    fun stop() {
      lifecycleRegistry.currentState = Lifecycle.State.DESTROYED
    }

    override fun getLifecycle(): Lifecycle = lifecycleRegistry
}