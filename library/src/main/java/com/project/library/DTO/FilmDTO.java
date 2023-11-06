package com.project.library.DTO;

import com.project.library.model.Director;

import java.util.Date;

public class FilmDTO {

    private long id = 0;
    private String name;
    private String genre;
    private String director;
    private Date launchDate;

    public FilmDTO(){

    }

    public FilmDTO(String name, String genre, String director, Date launchDate){
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

    public void setDirector(String director) {
        this.director = director;
    }

    public String getDirector() {
        return director;
    }

    public void setLaunchDate(Date launchDate) {
        this.launchDate = launchDate;
    }

    public Date getLaunchDate() {
        return launchDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
