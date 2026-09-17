package com.aprendiz.proyecto.service;

import com.aprendiz.proyecto.model.AprendizEntity;
import com.aprendiz.proyecto.repository.AprendizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AprendizService {
    @Autowired
    private AprendizRepository aprendizRepository;

    public void crearAprendiz(AprendizEntity aprendiz) {
        aprendizRepository.save(aprendiz);
    }

    public List<AprendizEntity> obtenerAprendices() {
        return aprendizRepository.findAll();
    }

    public void eliminarAprendiz(Long id) {
        aprendizRepository.deleteById(id);
    }

    public AprendizEntity buscarAprendiz(Long id) {
        return aprendizRepository.findById(id).orElse(null);
    }

    public AprendizEntity actualizarAprendiz(Long id, AprendizEntity aprendiz) {
        aprendiz.setId(id);
        return aprendizRepository.save(aprendiz);
    }
}
