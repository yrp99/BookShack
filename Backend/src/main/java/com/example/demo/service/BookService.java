package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Books;
import com.example.demo.entity.Braserch;
import com.example.demo.entity.CataBooks;
import com.example.demo.entity.Images;

public interface BookService {

	public void saveBookData(Books books);

	public List<Books> getBookDetails(String bid);

	public List<Books> getBooksList();
	
	public void deleteBook(int id);
	
	public Books updateBook(Books book,int id);
	
	
	public String mgUpl(MultipartFile img);
	
	public List<Books> getbyTyp(CataBooks nm);

	public void saveBookImg(Images img);
	
	public List<Books> getMyBranchBooks(Braserch branch);

	public Images getById(int id);
	
	public List<Books> getMySellBooksDetails(String email);
	
	public List<Books> getMyBranchBooksa(String branch);
	
	public List<Books> getSelectType(String selectType);
	
	


}
