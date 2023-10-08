package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Images;

public interface ImageRepo extends CrudRepository<Images ,Integer>  {

	

}
