package com.Farm.pigCenter.controller;

import com.Farm.pigCenter.model.Feeding;
import com.Farm.pigCenter.model.Persistence.FeedingRepository;
import com.Farm.pigCenter.model.Persistence.PorcinoRepository;
import com.Farm.pigCenter.model.Porcine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
    @RequestMapping("/feeding")
public class FeedingController {

    @Autowired
    private FeedingRepository feedingRepository;

    @GetMapping
    public List<Feeding> getAllFeeding() {
        return feedingRepository.findAll();
    }

    @GetMapping("/{id}")
    public Feeding getFeedingById(@PathVariable int id) {
        return feedingRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Feeding createFeeding(@RequestBody Feeding feeding) {
        return feedingRepository.save(feeding);
    }

    @PutMapping("/{id}")
    public Feeding updateFeeding(@PathVariable int id, @RequestBody Feeding feedingDetails) {
        Feeding feeding = feedingRepository.findById(id).orElse(null);
        if (feeding != null) {
            feeding.setDescription(feedingDetails.getDescription());
            feeding.setDose(feedingDetails.getDose());
            feeding.setPorcine(feedingDetails.getPorcine());
            return feedingRepository.save(feeding);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteFeeding(@PathVariable int id) {
        feedingRepository.deleteById(id);
    }
}
