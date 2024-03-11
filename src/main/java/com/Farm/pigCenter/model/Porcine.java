package com.Farm.pigCenter.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Porcine")
public class Porcine implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "race")
    private String race;

    @Column(name = "age")
    private int age;

    @Column(name = "weight")
    private float weight;

    @Column(name = "idClient")
    private int idlCliente;

    public Porcine(int id, String race, int age, float weight) {
        this.id = id;
        this.race = race;
        this.age = age;
        this.weight = weight;
        this.idlCliente = -1;
    }
}
