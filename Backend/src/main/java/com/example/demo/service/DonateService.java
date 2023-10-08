package com.example.demo.service;

import java.util.List;

//import com.example.demo.entity.Books;
import com.example.demo.entity.DonateBooks;

//import org.springframework.stereotype.Service;

public interface DonateService {
	public void saveDonateBookData(DonateBooks donbooks);

	public List<DonateBooks> getDonateBooks();

}
