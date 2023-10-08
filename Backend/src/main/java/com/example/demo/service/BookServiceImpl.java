package com.example.demo.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Books;
import com.example.demo.entity.Braserch;
import com.example.demo.entity.CataBooks;
import com.example.demo.entity.Images;
import com.example.demo.repository.BooksRepo;
import com.example.demo.repository.ImageRepo;

//import jakarta.persistence.criteria.Path;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	BooksRepo booksRepo;
	
	@Autowired
	imageUpload cnm;
	
	@Autowired
	ImageRepo imageRepo;
	
	private int bkid;

	public int getBkid() {
		return bkid;
	}

	public void setBkid(int bkid) {
		this.bkid = bkid;
	}

	public BookServiceImpl() {
		super();
	}

	@Override
	public void saveBookData(Books books) {
		booksRepo.save(books);
		bkid = booksRepo.getBookId(books.getEmail());
		
		
	}

//	public List<Books> getBookDetails(String bid) {
//		List<Books> getdetails = booksRepo.findBook(bid);
//		return getdetails;
//	}

	@Override
	public List<Books> getBooksList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteBook(int id) {
		
		booksRepo.deleteById(id);
		// TODO Auto-generated method stub
		
	}

	@Override
	public Books updateBook(Books book, int id) {
		// TODO Auto-generated method stub
		return null;
	}
		
	

	


	@Override
	public List<Books> getbyTyp(CataBooks nm) {
		List <Books> blist= booksRepo.findBook(nm.getSelectType());
		return blist;
	}
	
	@Override
	public String mgUpl(MultipartFile img) {
		 
		try {
			final String fullPath= new ClassPathResource("static/images/").getFile().getAbsolutePath();
			String newName = cnm.unique(img.getOriginalFilename());
			
			Files.copy(img.getInputStream(),Paths.get(fullPath+File.separator+newName),StandardCopyOption.REPLACE_EXISTING);
			
			return newName;
			
		} catch (IOException e) {
			
			return "File not uploaded";
		}
		
		
	}

	@Override
	public void saveBookImg(Images img) {
		imageRepo.save(img);
		
	}

	@Override
	public List<Books> getBookDetails(String bid) {
		// TODO Auto-generated method stub
		List<Books> getdetails = booksRepo.findBook(bid);
		return getdetails;
//		return null;
	}

	@Override
	public List<Books> getMyBranchBooks(Braserch branch) {
		 List<Books> brList = booksRepo.getMyBranchBooks(branch.getBranch());
		
		return brList;
	}

	@Override
	public Images getById(int id) {
		Images imglist =imageRepo.findById(id).get();
		
		return imglist;
	}
	
	@Override
	public List<Books> getMySellBooksDetails(String email) {
		
		return (List<Books>)booksRepo.getMyBooks(email);
	}
	
	@Override
	public List<Books> getMyBranchBooksa(String branch) {
		return (List<Books>)booksRepo.getMyBranchBooks(branch);
		
	}
	
	@Override
	public List<Books> getSelectType(String selectType) {
		return(List<Books>)booksRepo.getSelectType(selectType);
//		return list;
	}

}
