package com.aprendiz.proyecto.repository;

import com.aprendiz.proyecto.model.AprendizEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AprendizRepository extends JpaRepository<AprendizEntity, Long> {
}
