package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Suggestions;

public interface SuggestRepo extends CrudRepository<Suggestions, Integer> {

}
