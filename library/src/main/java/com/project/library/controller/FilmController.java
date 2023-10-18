package com.project.library.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.project.library.DTO.FilmDTO;
import com.project.library.model.Film;
import com.project.library.service.FilmService;

@RestController
@RequestMapping("/film")
public class FilmController {

    public final FilmService service;

    @Autowired
    public FilmController(FilmService service){
        this.service = service;
    }
    
    @GetMapping("/list")
    public List<Film> listFilms(){
        return service.listFilms();
    }

    @GetMapping("/get/{id}")
    public String filmDetails(@PathVariable long id){
        return service.detailFilm(id);
    }

    @PostMapping("/post")
    public void createFilm(@RequestBody FilmDTO film){
        service.createFilm(film);
    }

    @PutMapping("/update/{id}")
    public void updateFilm(@PathVariable long id, @RequestBody FilmDTO film){
        service.updateFilm(id, film);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFilm(@PathVariable long id){
        service.deleteFilm(id);
    }

    @GetMapping("/filterByDirector/{directorId}")
    public List<Film> getFilmsByDirector(@PathVariable long directorId){
        return service.getFilmsByDirector(directorId);
    }
}
