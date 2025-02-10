package com.assignment.Mapper.Functionality.Service;

import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class GeocodingService {

    private final RestTemplate restTemplate = new RestTemplate();
    public String search(String query) {
        String url = "https://nominatim.openstreetmap.org/search?format=json&q=" + query;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return response.getBody();
    }
}
