package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Books;

public interface BooksRepo extends CrudRepository<Books,Integer> {
	
	@Query("select c from Books c where c.selectType = :b")
	 public List<Books> findBook( @Param( "b") String selectType);
	
	
	
	@Query("SELECT b.bookId FROM Books b WHERE b.email = :mail AND b.bookId = (SELECT MAX(bb.bookId) FROM Books bb WHERE bb.email = :mail)")
	public int getBookId(@Param("mail") String mail);

	@Query("select b from Books b where b.branch=:br")
	public List<Books> getMyBranchBooks(@Param("br") String branch);
	
	@Query("select b from Books b where b.email=:email")
	public List<Books> getMyBooks(@Param("email") String email);
		
	@Query("select b from Books b where b.selectType = :selectType")
	public List<Books> getSelectType(@Param("selectType") String selectType);
}
