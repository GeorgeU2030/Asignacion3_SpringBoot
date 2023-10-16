package com.project.library.DTO;

public class DirectorDTO {
    
    private String name;

    public DirectorDTO(){

    }

    public DirectorDTO(String name){
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
