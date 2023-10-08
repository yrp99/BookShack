package com.example.demo.entity;


//import java.util.List;

//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToMany;

@Entity
public class Customer {

	
	
	@GeneratedValue
	private int Id;
	
	private String fullName;
	
	private long contactNo;
	@Id
	@Column(unique = true)
	private String email;
	
	private String address;
	
	private String city; 
	
	private String state;
	
//	
	private int pincode;
	
	@Column(unique = true)
	private String password;
	
	public Customer(int id, String fullName, long contactNo, String email, String address, String city, String state,
			int pincode, String password) {
		super();
		Id = id;
		this.fullName = fullName;
		this.contactNo = contactNo;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.password = password;
	}

	public Customer() {
		super();
	}
	

	

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Customer [Id=" + Id + ", fullName=" + fullName + ", contactNo=" + contactNo + ", email=" + email
				+ ", address=" + address + ", city=" + city + ", state=" + state + ", pincode=" + pincode
				+ ", password=" + password + "]";
	}
	
	
}
