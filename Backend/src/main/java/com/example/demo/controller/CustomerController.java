package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.*;
import com.example.demo.service.*;
//import com.example.demo.repository.*;

@RestController
@CrossOrigin // (origins = "http://192.168.29.73:3000")
public class CustomerController {
	
	
	@Autowired
	CustomerService customerService;
//	@Autowired
//	CustomerServiceImpl custom;
	
	@Autowired
	SuggestionsService suggestionsService;
	
	@Autowired
	OrderService orderService;
	
	
	
	


	@PostMapping("/CustomerRegistration")
	@ResponseBody
	public String saveCustomerdata(@RequestBody Customer customer)
	{
	         this.customerService.saveCustomerData(customer);
//	         System.out.println(customer);
	         return "customer added successfully";

	}
	
	@GetMapping("/getprofile/{id}")
	public Customer getCustomer(@PathVariable ("id") String cid)
	{
		return customerService.getCustomerDetails(cid);
	}
//	
	@GetMapping("/CustomerList")
	public List<Customer> getAllCustomer()
	{
		return customerService.getCustomerList();
	}
	
	@PostMapping("/UserLogin")
	@ResponseBody
	public Boolean UserLog (@RequestBody CustomerLogin val )
	{
		//System.out.println(val.getUsername());
		Boolean ans = customerService.login(val);
		System.out.println(ans);
				return ans;
				
	}
	
	@PutMapping("/updateprofile/{id}")
	public Customer updateCustomer(@RequestBody Customer customer,@PathVariable("id")String email) {
		Customer c=customerService.updateCustomer(customer, email);
		return c;
	}
	
	@DeleteMapping("/deletecustomer/{email}")
	public void deleteCustomer(@PathVariable("email")String email) {
		
		customerService.deleteCustomer(email);
		
	}
	
	@PostMapping("/suggestions")
	public void addSuggestion(@RequestBody Suggestions suggestions)
	{
		System.out.println(suggestions);
		suggestionsService.saveSuggestions(suggestions);
		
		
	}
	
	
	@PostMapping("/order")
	public void order(@RequestBody BookOrder bookOrder)
	{
		
		orderService.order(bookOrder);
		
		
	}
	
	

}
