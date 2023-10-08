package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Books;
import com.example.demo.entity.Suggestions;

public interface SuggestionsService {
	
	
	
	public void saveSuggestions(Suggestions suggestions);
	
	public void deleteSuggestion(int id);

	public List<Suggestions> getFeedbackList();

}
