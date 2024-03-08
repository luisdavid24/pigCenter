package com.Farm.pigCenter.model.Persistence;


import com.Farm.pigCenter.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Client, Integer> {

}
