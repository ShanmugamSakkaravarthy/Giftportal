package com.example.payment.model;

// import java.util.List;

// import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
// import jakarta.persistence.OneToOne;



@Entity
public class Register {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String gifttype;
    private String phoneNumber;
    private String Address;


    public Register() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGifttype() {
        return gifttype;
    }

    public void setGiftType(String gifttype) {
        this.gifttype = gifttype;
    }
    public String getAddress() {
        return Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

    @Override
    public String toString() {
        return "Register [id=" + id + ", name=" + name +  ", phoneNumber=" + phoneNumber + ", gifttype=" + gifttype
                + "]";
    }

    public Register(Long id, String name, String phoneNumber, String gifttype) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.gifttype = gifttype;
    }
}