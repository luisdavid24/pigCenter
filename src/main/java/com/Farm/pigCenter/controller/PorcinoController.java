package com.Farm.pigCenter.controller;

import com.Farm.pigCenter.model.Client;
import com.Farm.pigCenter.model.Persistence.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/porcino")
public class PorcinoController {

    @Autowired
    private ClienteRepository clientRepository;

    @GetMapping
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable int id) {
        return clientRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Client createClient(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable int id, @RequestBody Client clientDetails) {
        Client client = clientRepository.findById(id).orElse(null);
        if (client != null) {
            client.setName(clientDetails.getName());
            client.setLastName(clientDetails.getLastName());
            client.setAdress(clientDetails.getAddress());
            client.setPhone(clientDetails.getPhone());
            return clientRepository.save(client);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable int id) {
        clientRepository.deleteById(id);
    }
}
