package com.Farm.pigCenter.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Client")
public class Client implements Serializable {

        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        @Column(name = "name")
        private String name;

        @Column(name = "lastName")
        private String lastName;

        @Column(name = "adress")
        private String adress;

        @Column(name = "phone")
        private String phone;


       

        public String getAddress() {
                return adress;
        }
}

 //@OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
        //private List<Porcine> porcines;