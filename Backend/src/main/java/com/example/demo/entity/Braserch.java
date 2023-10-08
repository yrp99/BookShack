package com.example.demo.entity;

public class Braserch {
   private String branch;

public Braserch() {
	super();
}

public Braserch(String branch) {
	super();
	this.branch = branch;
}

public String getBranch() {
	return branch;
}

public void setBranch(String branch) {
	this.branch = branch;
}

@Override
public String toString() {
	return "Braserch [branch=" + branch + "]";
}
   
   
}
