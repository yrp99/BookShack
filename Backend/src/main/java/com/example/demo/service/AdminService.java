package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Admin;
import com.example.demo.entity.BookOrder;
import com.example.demo.entity.Books;
import com.example.demo.entity.Customer;
import com.example.demo.entity.CustomerLogin;
import com.example.demo.entity.DonateBooks;

public interface AdminService {
	
	

	
	public List<Books> getBooksList();
	
	public void deleteBook(int id);

	public List<Customer> getCustomerList();
	
	public void deleteCustomer(String email);

	public Boolean admLogin(Admin val);

	public List<BookOrder> getOrderList();

	public void deleteSuggestion(int id);

	public List<DonateBooks> getDonateBooks();
}
