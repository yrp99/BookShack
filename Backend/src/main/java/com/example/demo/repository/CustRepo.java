package com.example.demo.repository;

import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Customer;

public interface CustRepo extends CrudRepository<Customer, Integer>{ 
	
	
	//public Customer findByEmail(String mail);
	
	@Query("select c from Customer c where c.email = :n")
	public Customer loginValidate(@Param ("n") String mail);
	
//	
//	@Query("SELECT c FROM Customer c WHERE c.email = :mail")
//	public Customer loginValidate(@Param("mail") String mail);
	@Transactional
	@Modifying
	@Query("delete from Customer c where c.email = :email")
	 public void deleteCustByEmail( @Param ( "email") String email);
	
	
}
