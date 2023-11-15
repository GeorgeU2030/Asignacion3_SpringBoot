package com.project.library.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Optional;

@Entity
@Table(name = "films")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "genre")
    private String genre;

    @ManyToOne
    @JoinColumn(name = "director_id")
    private Director director;

    @Column(name = "launch_date")
    @Temporal(TemporalType.DATE)
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

    public void setDirector(Director director2) {
        this.director = director2;
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
