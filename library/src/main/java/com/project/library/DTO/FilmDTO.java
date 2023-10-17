package com.project.library.DTO;

import com.project.library.model.Director;

import java.util.Date;

public class FilmDTO {
    
    private String name;
    private String genre;
    private Director director;
    private Date launchDate;

    public FilmDTO(){

    }

    public FilmDTO(String name, String genre, Director director, Date launchDate){
        this.name = name;
        this.genre = genre;
        this.director = director;
        this.launchDate = launchDate;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return genre;
    }

    public void setDirector(Director director) {
        this.director = director;
    }

    public Director getDirector() {
        return director;
    }

    public void setLaunchDate(Date launchDate) {
        this.launchDate = launchDate;
    }

    public Date getLaunchDate() {
        return launchDate;
    }
}
