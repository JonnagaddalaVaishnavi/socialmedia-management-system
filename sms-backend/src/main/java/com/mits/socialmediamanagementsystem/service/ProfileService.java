package com.mits.socialmediamanagementsystem.service;

import com.mits.socialmediamanagementsystem.entity.ProfileEntity;
import com.mits.socialmediamanagementsystem.repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    ProfileRepo repo;

    public ProfileEntity saveProfile(ProfileEntity entity){

        return repo.save(entity);
    }

    public ProfileEntity getProfile(int userId){
        return repo.findByUserId(userId);
    }
}
