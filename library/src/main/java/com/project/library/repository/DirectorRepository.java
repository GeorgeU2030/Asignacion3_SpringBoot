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

    public void addDirector(Director director){
        directors.add(director);
    }

    public ArrayList<Director> getDirectors(){
        return directors;
    }

    public Director getDirectorById(long id){
        Iterator<Director> iterador = directors.iterator();
        if(iterador.hasNext()){
            Director director = (Director) iterador.next();
            if(id == director.getId()){
                return director;
            }
        }
        return null;
    }

    public void updateDirector(Director updatedDirector) {
        for (int i = 0; i < directors.size(); i++) {
            if (directors.get(i).getId() == updatedDirector.getId()) {
                directors.set(i, updatedDirector);
                break;
            }
        }
    }

    public void deleteDirector(long id) {
        directors.removeIf(director -> director.getId() == id);
    }


}
