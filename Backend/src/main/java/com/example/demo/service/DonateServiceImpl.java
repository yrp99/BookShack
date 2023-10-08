package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.DonateBooks;
import com.example.demo.repository.DonateRepo;


@Service
public class DonateServiceImpl implements DonateService {
	
	@Autowired
	DonateRepo donate ;

	@Override
	public void saveDonateBookData(DonateBooks donbooks) {
		
		donate.save(donbooks);
		
	}

	@Override
	public List<DonateBooks> getDonateBooks() {
		List<DonateBooks> li=(List<DonateBooks>)donate.findAll();
		return li;
	}

}
