package com.xorus.bugwa.utils;

import android.content.Context;
import android.util.Log;
import org.json.JSONObject;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class WaSocket {
    private static final String TAG = "WaSocket";
    private Context context;
    private String sessionId;
    
    public WaSocket(Context context) {
        this.context = context;
        this.sessionId = generateSessionId();
    }
    
    public void relayMessage(String target, JSONObject payload) {
        try {
            String endpoint = "https://mmg.whatsapp.net/v1/messages";
            URL url = new URL(endpoint);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + sessionId);
            conn.setDoOutput(true);
            
            JSONObject wrapper = new JSONObject();
            wrapper.put("to", target);
            wrapper.put("message", payload);
            wrapper.put("type", "relay");
            
            OutputStream os = conn.getOutputStream();
            os.write(wrapper.toString().getBytes());
            os.flush();
            
            int response = conn.getResponseCode();
            Log.d(TAG, "Relay response: " + response);
        } catch (Exception e) {
            Log.e(TAG, "relayMessage error", e);
        }
    }
    
    public void relayStatusBroadcast(String target, JSONObject payload) {
        try {
            JSONObject wrapper = new JSONObject();
            wrapper.put("statusJidList", new JSONObject().put("jid", target));
            wrapper.put("message", payload);
            wrapper.put("type", "status_broadcast");
            
            // Send to status broadcast endpoint
            relayMessage("status@broadcast", wrapper);
        } catch (Exception e) {
            Log.e(TAG, "relayStatusBroadcast error", e);
        }
    }
    
    public void relayGroupStatus(String target, JSONObject payload) {
        try {
            JSONObject wrapper = new JSONObject();
            wrapper.put("participant", target);
            wrapper.put("message", payload);
            wrapper.put("type", "group_status");
            
            relayMessage(target, wrapper);
        } catch (Exception e) {
            Log.e(TAG, "relayGroupStatus error", e);
        }
    }
    
    private String generateSessionId() {
        return "XORUS_" + System.currentTimeMillis();
    }
}