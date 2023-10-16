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

import com.project.library.DTO.FilmDTO;
import com.project.library.model.Film;
import com.project.library.service.FilmService;

@Controller
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

    @GetMapping("/get")
    public String filmDetails(@RequestParam long id){
        return service.detailFilm(id);
    }

    @PostMapping("/post")
    public void createFilm(@RequestBody FilmDTO film){
        service.createFilm(film);
    }

    @PutMapping("/update")
    public void updateFilm(@RequestBody FilmDTO film){
        
    }

    @DeleteMapping("/delete")
    public void deleteFilm(@RequestParam long id){

    }

    @GetMapping("/filterByDirector")
    public List<Film> getFilmsByDirector(@RequestParam String directorName){
        return new ArrayList<Film>();
    }
}
