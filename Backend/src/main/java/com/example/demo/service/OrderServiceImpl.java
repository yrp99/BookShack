package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BookOrder;
import com.example.demo.repository.OrderRepo;

@Service
public class OrderServiceImpl implements OrderService {

//implements CrudRepository<BookOrder, Integer>
	@Autowired
	BookService bookser;
	
	@Autowired
	OrderRepo orderRepo;
	
	
	@Override
	public void order(BookOrder bookOrder) {
		orderRepo.save(bookOrder);
		
	}


	@Override
	public List<BookOrder> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
