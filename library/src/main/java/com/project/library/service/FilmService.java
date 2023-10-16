package com.project.library.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.library.Beans.FilmComponent;
import com.project.library.DTO.FilmDTO;
import com.project.library.model.Film;
import com.project.library.repository.FilmRepository;

@Service
public class FilmService {
    
    private final FilmComponent component;
    private final FilmRepository repository;

    @Autowired
    public FilmService(FilmComponent component, FilmRepository repository){
        this.component = component;
        this.repository = repository;
    }

    public void createFilm(FilmDTO dto){
        Film film =component.getFilm();
        film.setName(dto.getName());
        film.setGenre(dto.getGenre());
        film.setDirector(dto.getDirector());
        film.setLaunchDate(dto.getLaunchDate());
        repository.addFilm(film);
    }

    public List<Film> listFilms(){
        return repository.getFilms();
    }

    public String detailFilm(long id){
        Film film = repository.getFilmById(id);
        if(film != null){
            return film.toString();
        }
        return "Film doesn't exist.";
    }

    public Film fromDTOToFilm(FilmDTO dto){
        Film film = component.getFilm();
        film.setGenre(dto.getGenre());
        film.setDirector(dto.getDirector());
        film.setLaunchDate(dto.getLaunchDate());
        return film;
    }

}
