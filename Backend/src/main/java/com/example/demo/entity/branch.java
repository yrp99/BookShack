package com.example.demo.entity;

public class branch {
   private String branch;

public branch() {
	super();
}

public branch(String branch) {
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
	return "branch [branch=" + branch + "]";
}
   
   
}
