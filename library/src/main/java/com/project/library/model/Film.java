package com.project.library.model;

import java.util.Date;

public class Film {
    private long id;
    private String name;
    private String genre;
    private Director director;
    private Date launchDate;

    public Film(){

    }
    public Film(long id, String name, String genre, Director director, Date launDate){
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.director = director;
        this.launchDate = launDate;
    }

    @Override
    public String toString(){
        String description = "Name = " + name+ ", genre = " + genre+ ", director = " + director+ ", launch date = " + launchDate+".\n"; 
        return description;
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
