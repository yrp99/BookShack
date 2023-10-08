package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToMany;

@Entity
public class Books {

	@Id
	@GeneratedValue
	private int bookId;
	private String  bookName;
	private String isbnNumber;
	private String bookAuthor;
	private String edition;
	private String selectType;
	private String bookCondition;
	private String bookDescription;
	private int actualPrice;
	private String branch;
	private String email;
	public Books() {
		super();
	}
	public Books(int bookId, String bookName, String isbnNumber, String bookAuthor, String edition, String selectType,
			String bookCondition, String bookDescription, int actualPrice, String branch, String email) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.isbnNumber = isbnNumber;
		this.bookAuthor = bookAuthor;
		this.edition = edition;
		this.selectType = selectType;
		this.bookCondition = bookCondition;
		this.bookDescription = bookDescription;
		this.actualPrice = actualPrice;
		this.branch = branch;
		this.email = email;
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
	public String getIsbnNumber() {
		return isbnNumber;
	}
	public void setIsbnNumber(String isbnNumber) {
		this.isbnNumber = isbnNumber;
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
	public String getSelectType() {
		return selectType;
	}
	public void setSelectType(String selectType) {
		this.selectType = selectType;
	}
	public String getBookCondition() {
		return bookCondition;
	}
	public void setBookCondition(String bookCondition) {
		this.bookCondition = bookCondition;
	}
	public String getBookDescription() {
		return bookDescription;
	}
	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}
	public int getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(int actualPrice) {
		this.actualPrice = actualPrice;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Books [bookId=" + bookId + ", bookName=" + bookName + ", isbnNumber=" + isbnNumber + ", bookAuthor="
				+ bookAuthor + ", edition=" + edition + ", selectType=" + selectType + ", bookCondition="
				+ bookCondition + ", bookDescription=" + bookDescription + ", actualPrice=" + actualPrice + ", branch="
				+ branch + ", email=" + email + "]";
	}
	
	
}
