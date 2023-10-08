
package com.example.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Admin;
import com.example.demo.entity.Customer;

public interface AdminRepo extends CrudRepository<Admin, Integer>{
	
	

}
