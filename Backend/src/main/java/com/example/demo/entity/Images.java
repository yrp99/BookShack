package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Images {
	@Id
	private int bookId;
  

  private String image1;
  private String image2;
  private String image3;
  private String image4;
  private String image5;
  
  private String email;

public Images() {
	super();
}

public Images(int bookId, String image1, String image2, String image3, String image4, String image5, String email) {
	super();
	this.bookId = bookId;
	this.image1 = image1;
	this.image2 = image2;
	this.image3 = image3;
	this.image4 = image4;
	this.image5 = image5;
	this.email = email;
}

public int getBookId() {
	return bookId;
}

public void setBookId(int bookId) {
	this.bookId = bookId;
}

public String getImage1() {
	return image1;
}

public void setImage1(String image1) {
	this.image1 = image1;
}

public String getImage2() {
	return image2;
}

public void setImage2(String image2) {
	this.image2 = image2;
}

public String getImage3() {
	return image3;
}

public void setImage3(String image3) {
	this.image3 = image3;
}

public String getImage4() {
	return image4;
}

public void setImage4(String image4) {
	this.image4 = image4;
}

public String getImage5() {
	return image5;
}

public void setImage5(String image5) {
	this.image5 = image5;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}
@Override
public String toString() {
	return "Images [bookId=" + bookId + ", image1=" + image1 + ", image2=" + image2 + ", image3=" + image3
			+ ", image4=" + image4 + ", image5=" + image5 + ", email=" + email + "]";
}
  
  
}
