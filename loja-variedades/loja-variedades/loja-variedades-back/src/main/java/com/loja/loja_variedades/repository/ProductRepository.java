package com.example.loja.repository;


import com.example.loja.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {
Page<Product> findByNameContainingIgnoreCase(String q, Pageable pageable);
Page<Product> findByCategory_Id(Long categoryId, Pageable pageable);
}