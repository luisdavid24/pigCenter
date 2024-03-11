package com.Farm.pigCenter.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Feeding")
public class Feeding {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description")
    private String description;

    @Column(name = "dose")
    private float dose;


    @ManyToOne
    @JoinColumn(name = "porcino_id", nullable = true)
    private Porcine porcine;

    public Porcine getPorcine() {
        return porcine;
    }

    public void setPorcine(Porcine porcine) {
        this.porcine = porcine;
    }
}
