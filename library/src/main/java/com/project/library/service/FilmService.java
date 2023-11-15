package com.project.library.service;

import com.project.library.Beans.FilmComponent;
import com.project.library.DTO.DirectorDTO;
import com.project.library.DTO.FilmDTO;
import com.project.library.model.Director;
import com.project.library.model.Film;
import com.project.library.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FilmService {

    private final DirectorService directorService;
    private final FilmComponent component;
    private final FilmRepository repository;

    @Autowired
    public FilmService(FilmComponent component, FilmRepository repository, DirectorService directorService) {
        this.component = component;
        this.repository = repository;
        this.directorService = directorService;
    }

    public Film createFilm(FilmDTO dto) {
        Film film = fromDTOToFilm(dto);
        return repository.save(film);
    }

    public List<Film> listFilms() {
        return repository.findAll();
    }

    public List<FilmDTO> listFilmDTO() {
        List<Film> films = repository.findAll();

        return films.stream()
                .map(this::fromFilmToDTO)
                .collect(Collectors.toList());
    }

    public FilmDTO detailFilm(long id) {
        return repository.findById(id)
                .map(this::fromFilmToDTO)
                .orElse(null);
    }

    public boolean updateFilm(long id, FilmDTO filmDTO) {
        return repository.findById(id)
                .map(existingFilm -> {
                    Film film = fromDTOToFilm(filmDTO);
                    existingFilm.setName(film.getName());
                    existingFilm.setGenre(film.getGenre());
                    existingFilm.setDirector(film.getDirector());
                    existingFilm.setLaunchDate(film.getLaunchDate());
                    repository.save(existingFilm);
                    return true;
                })
                .orElse(false);
    }

    public boolean deleteFilm(long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Film> getFilmsByDirector(long directorId) {
        return repository.findByDirectorId(directorId);
    }

    public Film fromDTOToFilm(FilmDTO dto) {
        Film film = component.getFilm();
        film.setName(dto.getName());
        film.setGenre(dto.getGenre());
        Optional<Director> directorOptional = directorService.getDirectorByName(dto.getDirector());

        if (directorOptional.isPresent()) {
            film.setDirector(directorOptional.get());
        } else {
            film.setDirector(directorService.createDirector(new DirectorDTO(dto.getDirector())));
        }

        film.setLaunchDate(dto.getLaunchDate());
        return film;
    }

    public FilmDTO fromFilmToDTO(Film film) {
        FilmDTO filmDTO = new FilmDTO(
                film.getName(), film.getGenre(), film.getDirector().getName(), film.getLaunchDate()
        );
        filmDTO.setId(film.getId());
        return filmDTO;
    }
}
