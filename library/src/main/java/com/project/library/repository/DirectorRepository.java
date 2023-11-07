package com.project.library.repository;

import com.project.library.model.Director;
import com.project.library.model.Film;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Iterator;

@Repository
public class DirectorRepository {
    ArrayList<Director> directors;

    public DirectorRepository(){
        directors = new ArrayList<Director>();
    }

    public Director addDirector(Director director){
        directors.add(director);
        return director;
    }

    public ArrayList<Director> getDirectors(){
        return directors;
    }

    public Director getDirectorById(long id){
        for (Director director : directors) {
            if (id == director.getId()) {
                return director;
            }
        }
        return null;
    }

    public Director getDirectorByName(String name){
        for (Director director : directors) {
            if (director.getName().equalsIgnoreCase(name)) {
                return director;
            }
        }
        return null;
    }

    public boolean updateDirector(Director updatedDirector) {
        boolean validate=false;
        for (int i = 0; i < directors.size(); i++) {
            if (directors.get(i).getId() == updatedDirector.getId()) {
                directors.set(i, updatedDirector);
                validate=true;
                break;
            }
        }
        return  validate;
    }

    public boolean deleteDirector(long id) {
        boolean validate=false;
        if (directors.removeIf(director -> director.getId() == id)){
            validate=true;
        }
        return validate;
    }


}
