package com.Farm.pigCenter.model;

public class Client {
        private int id;
        private String name;

        private String lastName;

        private String adress;

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
