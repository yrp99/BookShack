package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class BookOrder {

	
	@Id
	@GeneratedValue
	private int orderId;
	private int bookId;
	private String  bookName;
	private String bookAuthor;
	private String edition;
	private int actualPrice;
	private String email;
	
	
	public BookOrder() {
		super();
	}
	public BookOrder(int orderId, int bookId, String bookName, String bookAuthor, String edition, int actualPrice,
			String email) {
		super();
		this.orderId = orderId;
		this.bookId = bookId;
		this.bookName = bookName;
		this.bookAuthor = bookAuthor;
		this.edition = edition;
		this.actualPrice = actualPrice;
		this.email = email;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookAuthor() {
		return bookAuthor;
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
	public String getEdition() {
		return edition;
	}
	public void setEdition(String edition) {
		this.edition = edition;
	}
	public int getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(int actualPrice) {
		this.actualPrice = actualPrice;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "BookOrder [orderId=" + orderId + ", bookId=" + bookId + ", bookName=" + bookName + ", bookAuthor="
				+ bookAuthor + ", edition=" + edition + ", actualPrice=" + actualPrice + ", email=" + email + "]";
	}
	
	
	
}