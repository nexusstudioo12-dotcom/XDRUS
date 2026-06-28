<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#0A0A0F">
    
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="XORUS — BUG WA FRAMEWORK"
        android:textColor="#00FF88"
        android:textSize="18sp"
        android:gravity="center"
        android:padding="16dp"/>
    
    <EditText
        android:id="@+id/targetInput"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Target JID (628xxx@s.whatsapp.net)"
        android:textColorHint="#666666"
        android:textColor="#FFFFFF"
        android:background="#1A1A2E"
        android:padding="12dp"
        android:layout_margin="8dp"/>
    
    <ListView
        android:id="@+id/menuList"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:divider="#333333"
        android:dividerHeight="1dp"/>
    
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="(c) Mr. Zero | XORUS v1.0"
        android:textColor="#334455"
        android:textSize="10sp"
        android:gravity="center"
        android:padding="8dp"/>
</LinearLayout>