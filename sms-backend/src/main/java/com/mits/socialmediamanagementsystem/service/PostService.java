package com.mits.socialmediamanagementsystem.service;

import com.mits.socialmediamanagementsystem.entity.PostEntity;
import com.mits.socialmediamanagementsystem.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepo repo;

    public PostEntity savePost(PostEntity post){
       return repo.save(post);
    }

    public List<PostEntity> getAllPost(){
        return repo.findAll();
    }

    public List<PostEntity> getAllPostById(int userId){
        return repo.findByUserId(userId);
    }

    //public String editPost(){

    //}

    public String deletePost(PostEntity entity){
        repo.delete(entity);
        return "Post deleted successfully";
    }

//    public String deleteByID(int userId){
//        repo.deleteById((long) userId);
//        return "Post deleted successfully by using id";
//    }

    public String deleteById(Long id){
        repo.deleteById(id);
        return "Deleted post using post id";
    }

    public PostEntity updatePost(PostEntity post){
        PostEntity res = repo.findById(post.getId()).orElse(null);
        if(res != null){
            res.setTitle(post.getTitle());
            res.setDescription(post.getDescription());
            res.setPostImage(post.getPostImage());
            return repo.save(res);
        }
        return null;
    }

    public String updatePostByPatch(Long id, String title, String description){
        PostEntity post = repo.findById(id).orElse(null);
        if(post != null){
            post.setTitle(title);
            post.setDescription(description);
            repo.save(post);
        }
        return "Post updated successfully";
    }
}
