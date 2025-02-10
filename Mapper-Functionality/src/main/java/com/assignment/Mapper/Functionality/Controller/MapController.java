package com.assignment.Mapper.Functionality.Controller;

import com.assignment.Mapper.Functionality.Service.GeocodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MapController {

    private final GeocodingService geocodingService;

    @Autowired
    public MapController(GeocodingService geocodingService){
        this.geocodingService=geocodingService;
}

    @GetMapping("/location")
    public String getGeocode(@RequestParam String query){
        return geocodingService.search(query);
    }



}
