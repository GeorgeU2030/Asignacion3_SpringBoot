package com.project.library.model;

import java.util.Date;

public class Film {
    private long id;
    private String name;
    private String genre;
    private String director;
    private Date launchDate;

    public Film(){

    }
    public Film(long id, String name, String genre, String director, Date launDate){
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.director = director;
        this.launchDate = launDate;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
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
}
