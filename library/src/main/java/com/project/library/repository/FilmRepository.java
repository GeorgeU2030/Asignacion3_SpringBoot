package com.project.library.repository;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.stereotype.Repository;

import com.project.library.model.Film;

@Repository
public class FilmRepository {

    ArrayList<Film> films;

    public FilmRepository(){
        films = new ArrayList<Film>();
    }

    public void addFilm(Film film){
        films.add(film);
    }

    public ArrayList<Film> getFilms(){
        return films;
    }

    public Film getFilmById(long id){
        Iterator<Film> iterador = films.iterator();
        if(iterador.hasNext()){
            Film film = (Film) iterador.next();
            if(id == film.getId()){
                return film;
            }
        }
        return null;
    }

    public void updateFilm(Film updatedFilm) {
        for (int i = 0; i < films.size(); i++) {
            if (films.get(i).getId() == updatedFilm.getId()) {
                films.set(i, updatedFilm);
                break;
            }
        }
    }

    public void deleteFilm(long id) {
        films.removeIf(film -> film.getId() == id);
    }

    public ArrayList<Film> findFilmsByDirectorId(long directorId) {
        ArrayList<Film> filmsByDirector = new ArrayList<>();
        for (Film film : films) {
            if (film.getDirector().getId() == directorId) {
                filmsByDirector.add(film);
            }
        }
        return filmsByDirector;
    }



}
