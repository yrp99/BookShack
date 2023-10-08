package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Admin;
import com.example.demo.entity.BookOrder;
import com.example.demo.entity.Books;
import com.example.demo.entity.Customer;
import com.example.demo.entity.CustomerLogin;
import com.example.demo.entity.DonateBooks;
import com.example.demo.entity.Suggestions;
import com.example.demo.service.AdminService;
import com.example.demo.service.BookService;
import com.example.demo.service.CustomerService;
import com.example.demo.service.SuggestionsService;


@RestController
@CrossOrigin //(origins = "http://192.168.29.221:3000")
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@Autowired
	BookService bookService;
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	SuggestionsService sugges;
	
	@PostMapping("/AdminLogin")
	@ResponseBody
	public Boolean UserLog (@RequestBody Admin val ) {
	
		System.out.println(val);
		Boolean res = adminService.admLogin(val);
	
		
		return res;
				
	}
	
	@GetMapping("/admin/BooksList")
	public List<Books> getAllBooks()
	{
		return adminService.getBooksList();
	}
	
	
	@DeleteMapping("/admin/book/{id}")
	public String deleteBook(@PathVariable("id")int id) {
		adminService.deleteBook(id);
		return "Record Deleted";
		
	}
	
	
	@GetMapping("/admin/CustomerList")
	public List<Customer> getAllCustomer()
	{
		return adminService.getCustomerList();
	}
	
	@GetMapping("/feedback")
	public List<Suggestions> getAllFeedback()
	{
		return sugges.getFeedbackList();
	}
	
	
	@DeleteMapping("/admin/deletecustomer/{email}")
	public void deleteCustomer(@PathVariable("email")String email) {
		System.out.println(email);
		adminService.deleteCustomer(email);
		
	}
	
	@GetMapping("/admin/orderList")
	public List<BookOrder> getOrderList(){
		
		return adminService.getOrderList();
	}
	
	
	@DeleteMapping("/admin/suggestions/{id}")
	public String deleteSuggestion(@PathVariable("id")int id) {
		adminService.deleteSuggestion(id);
		return "Record Deleted";
		
	}
	
	
	@GetMapping("/admin/DonateList")
	public List<DonateBooks> getAllDonateBooks()
	{
		return adminService.getDonateBooks();
	}
	
	
}
