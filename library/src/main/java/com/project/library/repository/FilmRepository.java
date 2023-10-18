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

    public Film addFilm(Film film){
        films.add(film);
        return film;
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

    public boolean updateFilm(Film updatedFilm) {
        boolean validate=false;
        for (int i = 0; i < films.size(); i++) {
            if (films.get(i).getId() == updatedFilm.getId()) {
                films.set(i, updatedFilm);
                validate=true;
                break;
            }
        }
        return validate;
    }

    public boolean deleteFilm(long id) {
        boolean validate=false;
        if(films.removeIf(film -> film.getId() == id)){validate=true;}
        return validate;
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
