package com.assignment.Mapper.Functionality.Service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeocodingService {

    private final RestTemplate restTemplate = new RestTemplate();

    // Returns a list of maps with lat/lon
    public List<Map<String, String>> searchAsList(String query) {
        String url = "https://nominatim.openstreetmap.org/search?format=json&q=" + query;
        String response = restTemplate.getForObject(url, String.class);

        List<Map<String, String>> result = new ArrayList<>();

        if (response != null) {
            JSONArray array = new JSONArray(response);
            for (int i = 0; i < array.length(); i++) {
                JSONObject obj = array.getJSONObject(i);
                Map<String, String> location = new HashMap<>();
                location.put("lat", obj.getString("lat"));
                location.put("lon", obj.getString("lon"));
                result.add(location);
            }
        }
        return result;
    }
}
