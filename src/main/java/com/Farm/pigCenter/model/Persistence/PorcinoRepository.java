package com.Farm.pigCenter.model.Persistence;


import com.Farm.pigCenter.model.Porcine;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PorcinoRepository  extends JpaRepository<Porcine, Integer> {
    
    @Query("SELECT p FROM Porcine p INNER JOIN FETCH p.client c")
    //@Query("SELECT * FROM Porcine p INNER JOIN client c on p.client_id=c.id")
    List<Porcine> findAllWithClient();
    
}
