package com.aprendiz.proyecto.controller;

import com.aprendiz.proyecto.model.AprendizEntity;
import com.aprendiz.proyecto.service.AprendizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/aprendiz")
@CrossOrigin(origins = "http://localhost:5173")

public class AprendizController {
    @Autowired
    private AprendizService aprendizService;

    @PostMapping
    public void crearAprendiz(@RequestBody AprendizEntity aprendiz){
        aprendizService.crearAprendiz(aprendiz);
    }

    @GetMapping
    public List<AprendizEntity> obtenerAprendices(){
        return aprendizService.obtenerAprendices();
    }

    @GetMapping("/{id}")
    public AprendizEntity buscarAprendiz(@PathVariable Long id){
        return aprendizService.buscarAprendiz(id);
    }

    @PutMapping("/{id}")
    public AprendizEntity actualizarAprendiz(@PathVariable Long id, @RequestBody AprendizEntity aprendiz){
        return aprendizService.actualizarAprendiz(id, aprendiz);
    }

    @DeleteMapping("/{id}")
    public void eliminarAprendiz(@PathVariable Long id) {
        aprendizService.eliminarAprendiz(id);
    }
}
