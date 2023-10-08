package com.example.demo.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class imageUpload {

private String uniqNm;
	
	public String unique(String origName) {
		String extn = origName.substring(origName.lastIndexOf('.'));
		uniqNm = UUID.randomUUID().toString()+ extn;
		return uniqNm;
	}

	
	
	public imageUpload() {
		super();
		
	}

	public String getUniqNm() {
		return uniqNm;
	}


	
}
