package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.DonateBooks;
import com.example.demo.service.DonateService;

@RestController
@CrossOrigin  // (origins ="http://192.168.29.221:3000")
public class DonateController {

	@Autowired
	DonateService donateService;
	
	@PostMapping("/DonateBooks")
	@ResponseBody
	public String saveBooksdata(@RequestBody DonateBooks donbooks)
	{
		System.out.println(donbooks);
	         this.donateService.saveDonateBookData(donbooks);
//	         System.out.println(donbooks.getDonAuthor());
	         return "customer added successfully";

	}
	
	
	
//	@GetMapping("/DonateList")
//	public List<DonateBooks> getAllBooks()
//	{
//		return donateService.getDonateBooks();
//	}
}
