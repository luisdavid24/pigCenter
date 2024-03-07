package com.Farm.pigCenter.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Data
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

        public Client(int id, String name, String lastName, String adress, String phone) {
            this.id = id;
            this.name = name;
            this.lastName = lastName;
            this.adress = adress;
            this.phone = phone;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public String getAdress() {
            return adress;
        }

        public void setAdress(String adress) {
            this.adress = adress;
        }

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }
}
