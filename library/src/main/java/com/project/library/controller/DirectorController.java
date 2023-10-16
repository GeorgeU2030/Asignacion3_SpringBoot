package com.project.library.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.library.DTO.DirectorDTO;
import com.project.library.model.Director;
import com.project.library.service.DirectorService;

@Controller
@RequestMapping("/director")
public class DirectorController {

    private final DirectorService service;

    @Autowired
    public DirectorController(DirectorService service){
        this.service = service;
    }
    
    @GetMapping("/list")
    public List<Director> listDirector(){
        return new ArrayList<Director>();
    } 

    @GetMapping("/get")
    public String directorDetails(){
        return "";
    }

    @PostMapping("/post")
    public void createDirector(@RequestBody DirectorDTO director){

    }

    @PutMapping("/update")
    public void updateDirector(@RequestBody DirectorDTO director){

    }

    @DeleteMapping("/delete")
    public void deleteDirector(@RequestParam long id){

    }
}
