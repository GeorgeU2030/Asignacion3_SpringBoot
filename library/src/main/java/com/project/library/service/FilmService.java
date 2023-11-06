package com.project.library.service;

import java.util.List;
import java.util.stream.Collectors;

import com.project.library.DTO.DirectorDTO;
import com.project.library.model.Director;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.library.Beans.FilmComponent;
import com.project.library.DTO.FilmDTO;
import com.project.library.model.Film;
import com.project.library.repository.FilmRepository;

@Service
public class FilmService {

    private final DirectorService directorService;
    private final FilmComponent component;
    private final FilmRepository repository;

    @Autowired
    public FilmService(FilmComponent component, FilmRepository repository, DirectorService directorService){
        this.component = component;
        this.repository = repository;
        this.directorService = directorService;
    }

    public Film createFilm(FilmDTO dto){
        Film film =fromDTOToFilm(dto);
        return repository.addFilm(film);
    }

    public List<Film> listFilms(){
        return repository.getFilms();
    }

    public List<FilmDTO> listFilmDTO() {
        List<Film> films = repository.getFilms();

        return films.stream()
                .map(film -> fromFilmToDTO(film))
                .collect(Collectors.toList());
    }

    public Film detailFilm(long id){
        Film film = repository.getFilmById(id);
        if(film != null){
            return film;
        }
        return null;
    }

    public boolean updateFilm(long id, FilmDTO filmDTO) {
        boolean validate=false;
        Film film=fromDTOToFilm(filmDTO);
        Film existingFilm = repository.getFilmById(id);
        if (existingFilm != null) {
            // Actualiza los campos necesarios del film existente
            existingFilm.setName(film.getName());
            existingFilm.setGenre(film.getGenre());
            existingFilm.setDirector(film.getDirector());
            existingFilm.setLaunchDate(film.getLaunchDate());
            // Luego, actualiza el film en el repositorio
            validate=repository.updateFilm(existingFilm);
        }
        return validate;
    }

    public boolean deleteFilm(long id) {
        return repository.deleteFilm(id);
    }

    public List<Film> getFilmsByDirector(long directorId) {
        return repository.findFilmsByDirectorId(directorId);
    }
    public Film fromDTOToFilm(FilmDTO dto){
        Film film = component.getFilm();
        film.setName(dto.getName());
        film.setGenre(dto.getGenre());
        if(directorService.getDirectorByName(dto.getDirector()) != null){
            film.setDirector(directorService.getDirectorByName(dto.getDirector()));
        }else{
            film.setDirector(directorService.createDirector(new DirectorDTO(dto.getDirector())));
        }
        film.setLaunchDate(dto.getLaunchDate());
        return film;
    }

    public FilmDTO fromFilmToDTO(Film film){
        FilmDTO filmDTO = new FilmDTO(
                film.getName(), film.getGenre(), film.getDirector().getName(),film.getLaunchDate()
        );
        filmDTO.setId(film.getId());
        return filmDTO;
    }
}
