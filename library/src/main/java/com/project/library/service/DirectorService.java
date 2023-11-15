package com.project.library.service;

import com.project.library.DTO.DirectorDTO;
import com.project.library.model.Director;
import com.project.library.repository.DirectorRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DirectorService {

    private final DirectorRepository directorRepository;

    @Autowired
    public DirectorService(DirectorRepository directorRepository) {
        this.directorRepository = directorRepository;
    }

    public Director createDirector(DirectorDTO directorDTO) {
        Director director = new Director();
        BeanUtils.copyProperties(directorDTO, director);
        return directorRepository.save(director);
    }

    public List<Director> getAllDirectors() {
        return directorRepository.findAll();
    }

    public Optional<Director> getDirectorById(long id) {
        return directorRepository.findById(id);
    }

    public Optional<Director> getDirectorByName(String name) {
        return directorRepository.findByName(name);
    }

    public boolean updateDirector(long id, DirectorDTO directorDTO) {
        return directorRepository.findById(id)
                .map(existingDirector -> {
                    BeanUtils.copyProperties(directorDTO, existingDirector);
                    directorRepository.save(existingDirector);
                    return true;
                })
                .orElse(false);
    }

    public boolean deleteDirector(long id) {
        return directorRepository.findById(id)
                .map(existingDirector -> {
                    directorRepository.delete(existingDirector);
                    return true;
                })
                .orElse(false);
    }
}
