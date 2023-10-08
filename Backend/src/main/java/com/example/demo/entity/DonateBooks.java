package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class DonateBooks {

	@Id
	@GeneratedValue
	private int donId;
	private String donBook;
	private int donQuantity;
	private String donAuthor;
	private String donDiscripation;
	private String email;
	public DonateBooks() {
		super();
	}
	public DonateBooks(int donId, String donBook, int donQuantity, String donAuthor, String donDiscripation,
			String email) {
		super();
		this.donId = donId;
		this.donBook = donBook;
		this.donQuantity = donQuantity;
		this.donAuthor = donAuthor;
		this.donDiscripation = donDiscripation;
		this.email = email;
	}
	public int getDonId() {
		return donId;
	}
	public void setDonId(int donId) {
		this.donId = donId;
	}
	public String getDonBook() {
		return donBook;
	}
	public void setDonBook(String donBook) {
		this.donBook = donBook;
	}
	public int getDonQuantity() {
		return donQuantity;
	}
	public void setDonQuantity(int donQuantity) {
		this.donQuantity = donQuantity;
	}
	public String getDonAuthor() {
		return donAuthor;
	}
	public void setDonAuthor(String donAuthor) {
		this.donAuthor = donAuthor;
	}
	public String getDonDiscripation() {
		return donDiscripation;
	}
	public void setDonDiscripation(String donDiscripation) {
		this.donDiscripation = donDiscripation;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "DonateBooks [donId=" + donId + ", donBook=" + donBook + ", donQuantity=" + donQuantity + ", donAuthor="
				+ donAuthor + ", donDiscripation=" + donDiscripation + ", email=" + email + "]";
	}
	
	
	
	
	
}
