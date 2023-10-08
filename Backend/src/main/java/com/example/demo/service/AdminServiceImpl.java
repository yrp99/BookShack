package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
import com.example.demo.entity.BookOrder;
import com.example.demo.entity.Books;
import com.example.demo.entity.Customer;
import com.example.demo.entity.CustomerLogin;
import com.example.demo.entity.DonateBooks;
import com.example.demo.repository.AdminRepo;
import com.example.demo.repository.BooksRepo;
import com.example.demo.repository.CustRepo;
import com.example.demo.repository.DonateRepo;
import com.example.demo.repository.SuggestRepo;


@Service
public class AdminServiceImpl implements AdminService {

	
	
	@Autowired
	AdminRepo adminRepo;
	
	@Autowired
	BooksRepo booksRepo;
	
	
	@Autowired
	CustRepo custRepo;
	
	@Autowired
	OrderService orderRepo;
	
	@Autowired
	SuggestRepo suggestionRepo;
	
	@Autowired
	DonateRepo donateRepo;
	

//	public Boolean login(CustomerLogin val)
//	{
//		
//	}
	@Override
	public List<Books> getBooksList() {
		List<Books> list=(List<Books>)booksRepo.findAll();
		return list;
	}

	@Override
	public void deleteBook(int id) {
		booksRepo.deleteById(id);
		
	}

	@Override
	public List<Customer> getCustomerList() {
		List<Customer> list=(List<Customer>)custRepo.findAll();
		return list;
	}

	@Override
	public void deleteCustomer(String email) {
		custRepo.deleteCustByEmail(email);
		
	}

	@Override
	public Boolean admLogin(Admin val) {
		
		
		try
		{	
			
			Admin ad = adminRepo.findById(val.getAdminId()).get(); 
			System.out.println(ad);
		if(val.getAdminId()==(ad.getAdminId()) && val.getPassword().equals (ad.getPassword()))
		{
			return true;
		}
		else
		{
			return false;
		}
		}
		catch(Exception e)
		{
			return false;
		}
	}

	@Override
	public List<BookOrder> getOrderList() {
		List<BookOrder> list =(List<BookOrder>) orderRepo.findAll();
		return list;
//		return null;
	}

	@Override
	public void deleteSuggestion(int id) {
		// TODO Auto-generated method stub
		suggestionRepo.deleteById(id);
	}

	@Override
	public List<DonateBooks> getDonateBooks() {
		// TODO Auto-generated method stub
		List<DonateBooks> list =(List<DonateBooks>) donateRepo.findAll();
		return list;
		
	}
	
		
		
	}
	
	
	


