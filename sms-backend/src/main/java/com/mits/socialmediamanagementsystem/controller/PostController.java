package com.mits.socialmediamanagementsystem.controller;

import com.mits.socialmediamanagementsystem.entity.PostEntity;
import com.mits.socialmediamanagementsystem.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    @Autowired
    PostService service;

    @PostMapping("/addPost")
    public PostEntity savePost(@RequestBody PostEntity post){
        return service.savePost(post);
    }

    @GetMapping("/getAllPost")
    public List<PostEntity> getAllPost(){
        return service.getAllPost();
    }

    @GetMapping("/getUserPost/{userId}")
    public List<PostEntity> getUserPost(@PathVariable int userId){
        return service.getAllPostById(userId);
    }

    @DeleteMapping("/deletePost")
    public String deletePost(@RequestBody PostEntity entity){
        return service.deletePost(entity);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable Long id){
        return service.deleteById(id);
    }

//    @DeleteMapping("/deleteId/{userId}")
//    public String deleteByID(@PathVariable int userId){
//        return service.deleteByID(userId);
//    }

    @PutMapping("/updatePut")
    public PostEntity editPost(@RequestBody PostEntity post){
        return service.updatePost(post);
    }

    @PatchMapping("/updatePatch")
    public String updatePostByPatch(@RequestParam Long id, @RequestParam String title, @RequestParam String description){
        return service.updatePostByPatch(id,title,description);
    }
}
