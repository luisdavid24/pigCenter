package com.Farm.pigCenter.controller;

import com.Farm.pigCenter.model.Client;
import com.Farm.pigCenter.model.Persistence.ClienteRepository;
import com.Farm.pigCenter.model.Persistence.PorcinoRepository;
import com.Farm.pigCenter.model.Porcine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/porcino")
public class PorcinoController {

    @Autowired
    private PorcinoRepository porcinoRepository;

    @GetMapping
    public List<Porcine> getAllPorcines() {
        return porcinoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Porcine getPorcineById(@PathVariable int id) {
        return porcinoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Porcine createPorcine(@RequestBody Porcine client) {
        return porcinoRepository.save(client);
    }

    @PutMapping("/{id}")
    public Porcine updatePorcine(@PathVariable int id, @RequestBody Porcine clientDetails) {
        Porcine porcine = porcinoRepository.findById(id).orElse(null);
        if (porcine != null) {
            porcine.setAge(clientDetails.getAge());
            porcine.setRace(clientDetails.getRace());
            porcine.setWeight(clientDetails.getWeight());
            return porcinoRepository.save(porcine);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deletePorcine(@PathVariable int id) {
        porcinoRepository.deleteById(id);
    }
}
