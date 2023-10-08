package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.entity.Suggestions;
import com.example.demo.repository.SuggestRepo;


@Service
public class SuggestionsServiceImpl implements SuggestionsService {

	@Autowired
	SuggestRepo suggestRepo;
	
	
	@Override
	public void saveSuggestions(Suggestions suggestions) {
		suggestRepo.save(suggestions);
		
	}


	@Override
	public void deleteSuggestion(int id) {
		suggestRepo.deleteById(id);
		
	}


	@Override
	public List<Suggestions> getFeedbackList() {
		List<Suggestions> list=(List<Suggestions>)suggestRepo.findAll();
		return list;
//		return null;
	}

}
