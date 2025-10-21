package com.assignment.Mapper.Functionality.Controller;

import com.assignment.Mapper.Functionality.Service.GeocodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
public class MapController {

    private final GeocodingService geocodingService;

    @Autowired
    public MapController(GeocodingService geocodingService){
        this.geocodingService = geocodingService;
    }

    @GetMapping("/location")
    public ResponseEntity<List<Map<String, String>>> getGeocode(@RequestParam String query){
        // Use the method that returns a List<Map<String, String>>
        List<Map<String, String>> result = geocodingService.searchAsList(query);
        return ResponseEntity.ok(result);
    }
}
