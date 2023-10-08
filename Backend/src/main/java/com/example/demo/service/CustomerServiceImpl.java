package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.example.demo.entity.*;
import com.example.demo.repository.*;


@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustRepo  custrepo;
//	@Autowired
//	Customer customer;
	
	@Override
	public void saveCustomerData(Customer customer) {
		custrepo.save(customer);
		
		
	}

	@Override
	public Customer getCustomerDetails(String cid) {
//		System.out.println(cid);
		 Customer getdetails = custrepo.loginValidate(cid);
			return getdetails;
	}

	@Override
	public List<Customer> getCustomerList() {
		List<Customer> list=(List<Customer>)custrepo.findAll();
		return list;
	}
	
	@Override
	public Boolean login(CustomerLogin val)
	{
		try
		{
			//System.out.println(val.getUsername());
		Customer cm = custrepo.loginValidate(val.getUsername());
		//System.out.println(cm);
		if(val.getPassword().equals(cm.getPassword()) && val.getUsername().equals(cm.getEmail()))
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
	public Customer updateCustomer(Customer customer, String email) {

		customer.setEmail(email);
		Customer b=custrepo.save(customer);
		return b;
	}
	
	
	@Override
	public void deleteCustomer(String email) {
		System.out.println(email);
		custrepo.deleteCustByEmail(email);
		
	}
	
}
