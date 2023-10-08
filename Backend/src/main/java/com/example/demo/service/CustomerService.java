package com.example.demo.service;
import com.example.demo.entity.Customer;
import com.example.demo.entity.CustomerLogin;

import java.util.List;



public interface CustomerService {
	
	public void saveCustomerData(Customer customer);

	public Customer getCustomerDetails(String cid);

	public List<Customer> getCustomerList();

	public Boolean login(CustomerLogin val);
	
	public Customer updateCustomer(Customer customer,String email);

	public void deleteCustomer(String email);
}
