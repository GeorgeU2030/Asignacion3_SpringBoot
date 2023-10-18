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
@RequestMapping("/pelicula")
public class FilmController {

    public final FilmService service;

    @Autowired
    public FilmController(FilmService service){
        this.service = service;
    }
    
    @GetMapping("/peliculas")
    public List<Film> listFilms(){
        return service.listFilms();
    }

    @GetMapping("/pelicula/{id}")
    public Film filmDetails(@PathVariable long id){
        return service.detailFilm(id);
    }

    @PostMapping("/pelicula")
    public Film createFilm(@RequestBody FilmDTO film){
        return service.createFilm(film);
    }

    @PutMapping("/pelicula/{id}")
    public boolean updateFilm(@PathVariable long id, @RequestBody FilmDTO film){
        return service.updateFilm(id, film);
    }

    @DeleteMapping("/pelicula/{id}")
    public boolean deleteFilm(@PathVariable long id){
        return service.deleteFilm(id);
    }

    @GetMapping("/directores/{directorId}/peliculas")
    public List<Film> getFilmsByDirector(@PathVariable long directorId){
        return service.getFilmsByDirector(directorId);
    }
}
