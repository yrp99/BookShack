package com.example.demo.repository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.BookOrder;

public interface OrderRepo extends CrudRepository<BookOrder, Integer> {

}
