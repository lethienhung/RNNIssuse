package com.rnnissue

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NavigationModule constructor(
        context: ReactApplicationContext
): ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "NavigationModule"
    }

    init {
        instance = this
    }

    companion object {
        var instance: NavigationModule? = null
    }

    @ReactMethod
    fun navigateToNative(){
        val context: ReactContext? = MainApplication.instance?.reactNativeHost?.reactInstanceManager?.currentReactContext
        context?.let {
            var intent: Intent = Intent()
            intent.setClass(it, ExampleActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
            context.startActivity(intent)
        }

    }
}