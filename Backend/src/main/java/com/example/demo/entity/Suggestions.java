package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Suggestions {

	
	@Id
	@GeneratedValue
	private int suggestionId;
	private String name;
	private String email;
	private String message;
	public int getSuggestionId() {
		return suggestionId;
	}
	public void setSuggestionId(int suggestionId) {
		this.suggestionId = suggestionId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Suggestions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Suggestions(int suggestionId, String name, String email, String message) {
		super();
		this.suggestionId = suggestionId;
		this.name = name;
		this.email = email;
		this.message = message;
	}
	@Override
	public String toString() {
		return "Suggestions [suggestionId=" + suggestionId + ", name=" + name + ", email=" + email + ", message="
				+ message + "]";
	}
	
	
	
	
	
	
	
}
