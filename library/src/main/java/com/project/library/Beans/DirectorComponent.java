package com.project.library.Beans;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.project.library.model.Director;
import com.project.library.repository.DirectorRepository;
import com.project.library.repository.FilmRepository;

@Component
public class DirectorComponent {

    private long directorId = 1;
    
    @Bean
    public Director getDirector(){
        Director director = new Director();
        director.setId(directorId);
        this.directorId = directorId+1;
        return director;
    }

}
