package com.project.library.Beans;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.project.library.model.Film;
import com.project.library.repository.FilmRepository;

@Component
public class FilmComponent {

    private long filmId = 1;
    
    @Bean
    public Film getFilm(){
        Film film = new Film();
        film.setId(filmId);
        this.filmId = filmId+1;
        return film;
    }

    @Bean
    public FilmRepository getFilmRepository(){
        return new FilmRepository();
    }
}
