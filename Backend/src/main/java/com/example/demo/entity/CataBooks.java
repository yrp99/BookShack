package com.example.demo.entity;

public class CataBooks {
  private String selectType;

  
public CataBooks() {
	super();
}

public CataBooks(String selectType) {
	super();
	this.selectType = selectType;
}

public String getSelectType() {
	return selectType;
}

public void setSelectType(String selectType) {
	this.selectType = selectType;
}

@Override
public String toString() {
	return "CataBooks [selectType=" + selectType + "]";
}


  
}
