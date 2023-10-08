package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.DonateBooks;

public interface DonateRepo extends CrudRepository<DonateBooks, Integer> {

}
