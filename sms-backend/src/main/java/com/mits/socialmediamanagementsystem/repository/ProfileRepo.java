package com.mits.socialmediamanagementsystem.repository;

import com.mits.socialmediamanagementsystem.entity.ProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepo extends JpaRepository<ProfileEntity, Long> {
    ProfileEntity findByUserId(int id);
}
