package com.mits.socialmediamanagementsystem.controller;

import com.mits.socialmediamanagementsystem.entity.UserEntity;
import com.mits.socialmediamanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/signUp1")
    public String userSignUp(@RequestBody UserEntity entity){

        return service.signUp(entity);
    }

    @PostMapping("/logIn1")
    public UserEntity userLogIn(@RequestBody UserEntity entity){
        return service.logIn(entity);
    }
}
