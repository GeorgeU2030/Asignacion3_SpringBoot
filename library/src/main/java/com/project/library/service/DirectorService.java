package com.project.library.service;

import com.project.library.Beans.DirectorComponent;
import com.project.library.DTO.FilmDTO;
import com.project.library.model.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.library.DTO.DirectorDTO;
import com.project.library.model.Director;
import com.project.library.repository.DirectorRepository;
import java.util.List;

@Service
public class DirectorService {
    private final DirectorComponent component;

    private final DirectorRepository directorRepository;

    @Autowired
    public DirectorService(DirectorComponent component, DirectorRepository directorRepository) {
        this.component = component;
        this.directorRepository = directorRepository;
    }

    public void createDirector(DirectorDTO directorDTO) {

        Director newDirector = fromDTOToDirector(directorDTO);
        directorRepository.addDirector(newDirector);
    }

    public List<Director> getAllDirectors() {
        return directorRepository.getDirectors();
    }

    public Director getDirectorById(long id) {
        return directorRepository.getDirectorById(id);
    }

    public void updateDirector(long id, DirectorDTO directorDTO) {
        Director director=fromDTOToDirector(directorDTO);
        Director existingDirector = directorRepository.getDirectorById(id);
        if (existingDirector != null) {
            existingDirector.setName(director.getName());
            directorRepository.updateDirector(existingDirector);
        }
    }

    public void deleteDirector(long id) {
        // Puedes eliminar al director por ID.
        directorRepository.deleteDirector(id);
    }

    public Director fromDTOToDirector(DirectorDTO dto){
        Director d = component.getDirector();
        d.setName(dto.getName());
        return d;
    }
}
