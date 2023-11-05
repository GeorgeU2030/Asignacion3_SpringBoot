package com.project.library.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.project.library.DTO.DirectorDTO;
import com.project.library.model.Director;
import com.project.library.service.DirectorService;

@RestController
@RequestMapping("/director")
public class DirectorController {

    private final DirectorService service;

    @Autowired
    public DirectorController(DirectorService service){
        this.service = service;
    }
    
    @GetMapping("/directores")
    public List<Director> listDirector(){
        return service.getAllDirectors();
    }

    @GetMapping("/director/{id}")
    public Director directorDetails(@PathVariable long id) {
        System.out.println(service.getDirectorById(id));
        return service.getDirectorById(id);
    }

    @PostMapping("/director")
    public Director createDirector(@RequestBody DirectorDTO directorDTO) {return service.createDirector(directorDTO);
    }

    @PutMapping("/director/{id}")
    public boolean updateDirector(@PathVariable long id, @RequestBody DirectorDTO directorDTO) {
        return service.updateDirector(id, directorDTO);
    }

    @DeleteMapping("/director/{id}")
    public boolean deleteDirector(@PathVariable long id) {
        return service.deleteDirector(id);
    }
}