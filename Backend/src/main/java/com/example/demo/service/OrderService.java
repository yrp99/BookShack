package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.BookOrder;

public interface OrderService {


	void order(BookOrder bookOrder);

	List<BookOrder> findAll();

}
