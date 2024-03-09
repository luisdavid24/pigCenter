package com.Farm.pigCenter.model.Persistence;

import com.Farm.pigCenter.model.Client;
import com.Farm.pigCenter.model.Porcine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PorcinoRepository  extends JpaRepository<Porcine, Integer> {
}
