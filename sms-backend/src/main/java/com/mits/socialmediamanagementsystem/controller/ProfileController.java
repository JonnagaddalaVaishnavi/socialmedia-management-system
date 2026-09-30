package com.mits.socialmediamanagementsystem.controller;

import com.mits.socialmediamanagementsystem.entity.ProfileEntity;
import com.mits.socialmediamanagementsystem.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class ProfileController {
    @Autowired
    ProfileService service;

    @PostMapping("/saveProfile")
    public ProfileEntity saveProfile(@RequestBody ProfileEntity entity){
        return service.saveProfile(entity);
    }

    @GetMapping("/getProfile/{userId}")
    public ProfileEntity getProfile(@PathVariable int userId){
        return service.getProfile(userId);
    }

}
