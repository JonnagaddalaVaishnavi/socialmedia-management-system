package com.mits.socialmediamanagementsystem.service;

import com.mits.socialmediamanagementsystem.entity.UserEntity;
import com.mits.socialmediamanagementsystem.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.autoconfigure.WebMvcProperties;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo repo;

    public String signUp(UserEntity entity){
        UserEntity result = repo.findByEmail(entity.getEmail());
        if(result == null){
            repo.save(entity);
            return "Sign up successfull";
        }
        return "User already exists! please login ";
    }

//    public UserEntity logIn(UserEntity entity){
//        UserEntity res = repo.findByEmail(entity.getEmail());
//        if( res != null && entity.getPassword().equals(res.getPassword())){
//            return res;
//        }
//        return null;
//    }

    public UserEntity logIn(UserEntity entity) {

        System.out.println("Entered Email: " + entity.getEmail());
        System.out.println("Entered Password: " + entity.getPassword());

        UserEntity res = repo.findByEmail(entity.getEmail());

        System.out.println("User Found: " + res);

        if(res != null) {
            System.out.println("DB Password: " + res.getPassword());
        }

        if (res != null &&
                entity.getPassword().equals(res.getPassword())) {

            System.out.println("LOGIN SUCCESS");
            return res;
        }

        System.out.println("LOGIN FAILED");
        return null;
    }

}
