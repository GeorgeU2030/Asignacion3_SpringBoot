package com.project.library.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/get/{id}")
    public Director directorDetails(@PathVariable long id) {
        return service.getDirectorById(id);
    }

    @PostMapping("/post")
    public void createDirector(@RequestBody DirectorDTO directorDTO) {
        service.createDirector(directorDTO);
    }

    @PutMapping("/update/{id}")
    public void updateDirector(@PathVariable long id, @RequestBody DirectorDTO directorDTO) {
        service.updateDirector(id, directorDTO);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDirector(@PathVariable long id) {
        service.deleteDirector(id);
    }
}