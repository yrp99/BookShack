package com.example.demo.entity;

public class CustomerProfile {
		
	private String username;

	public CustomerProfile() {
		super();
	}

	public CustomerProfile(String username) {
		super();
		this.username = username;
	}

	public String getUsername() {
	
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "CustomerProfile [username=" + username + "]";
	}
	
}
