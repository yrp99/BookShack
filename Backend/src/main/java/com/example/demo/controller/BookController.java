package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Books;
import com.example.demo.entity.Braserch;
import com.example.demo.entity.CataBooks;
import com.example.demo.entity.Images;
import com.example.demo.repository.ImageRepo;
import com.example.demo.service.BookService;
import com.example.demo.service.BookServiceImpl;

@RestController
@CrossOrigin //(origins = "http://192.168.29.221:3000") 
public class BookController {
	
	@Autowired
	BookService booksService;
	
	@Autowired
	BookServiceImpl bkml;
	
	
	
	
	
	@PostMapping("/BookRegistration")
	@ResponseBody
	public int saveBooksdata(@RequestBody Books books)
	{
		System.out.println(books);
		
	        booksService.saveBookData(books);
	        
//	         System.out.println(books.getBookAuthor());
	        System.out.println(bkml.getBkid());
	         return bkml.getBkid();

	}
	
	@PostMapping("/GetBooks/{id}")
	public List<Books> getbook(@PathVariable ("id") String bid)
	
	{
		 System.out.println("inside get books");
		 System.out.println(bid);
		return booksService.getBookDetails(bid);
	}

	
	@GetMapping("/BooksList")
	public List<Books> getAllBooks()
	{
		return booksService.getBooksList();
	}
	
	
	
	
	
	
	@PutMapping("/book/{id}")
	public Books updateBook(@RequestBody Books book,@PathVariable("id")int id) {
		Books b=booksService.updateBook(book, id);
		return b;
	}
	
	
	
	@PostMapping("/books")
	@ResponseBody
	public List<Books> getBks(@RequestBody CataBooks nm ){
		
		System.out.println("inside book controler");
		System.out.println(nm);
	  List<Books> blist= booksService.getbyTyp(nm);
		return blist;
	}
//	@PostMapping("/")
	@PostMapping("/upload")
	public String imgUpl ( @RequestParam ("file") MultipartFile file) {
		
		String neName = booksService.mgUpl(file);
		return neName;
	}
	
	@PostMapping("/uploadimage")
	@ResponseBody
	public String saveBooksdata(@RequestBody Images img)
	{
		System.out.println(img);
	         this.booksService.saveBookImg(img);
//	         System.out.println(books.getBookAuthor());
	         return "customer added successfully";

	}
	
	@PostMapping("/Engineering")
	public List<Books> getBranchBooks(@RequestBody  Braserch branch)
	{
		//it is not working mode
		System.out.println(branch);
		List<Books> bslist=booksService.getMyBranchBooks(branch);
		System.out.println(bslist);
		return bslist;
	}
	
	@GetMapping("/image/{bookId}")
	public Images findById( @PathVariable ("bookId") int id)
	{
		System.out.println(id);
		Images img=booksService.getById(id);
		return img;
	}
	
	@GetMapping("/mySelledBooks/{email}")
	public List<Books> getMySelledBooks(@PathVariable ("email") String email)
	{
		return(List<Books>)booksService.getMySellBooksDetails(email);
		
	} 
	
	@GetMapping("/Engineeringbook/{branch}")
	public List<Books> getBranchBooks(@PathVariable("branch") String branch)
	{
		System.out.println(branch);
		return(List<Books>)booksService.getMyBranchBooksa(branch);
	}
	
	@GetMapping("/bookscata/{selectType}")
	public List<Books> getSelectType(@PathVariable("selectType")String selectType) {
		return(List<Books>)booksService.getSelectType(selectType);
//		return list;
	}
		
	@DeleteMapping("/bookbook/{id}")
	public String deleteBook(@PathVariable("id")int id) {
		System.out.println(id);
		booksService.deleteBook(id);
		return "Record Deleted";
	}
	
	
}
