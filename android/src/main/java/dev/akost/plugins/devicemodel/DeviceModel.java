package dev.akost.plugins.devicemodel;

import android.util.Log;

public class DeviceModel {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
