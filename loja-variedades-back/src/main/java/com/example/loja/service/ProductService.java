package com.example.loja.service;


import com.example.loja.DTOs.ProductDTO;
import com.example.loja.model.Product;
import com.example.loja.repository.ProductRepository;
import com.example.loja.util.Mapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class ProductService {
  private final ProductRepository repo;
  public ProductService(ProductRepository repo) { this.repo = repo; }


  public Page<ProductDTO> listAll(String q, Long categoryId, Pageable pageable) {
    Page<Product> page;
    if (q != null && !q.isBlank()) page = repo.findByNameContainingIgnoreCase(q, pageable);
    else if (categoryId != null) page = repo.findByCategory_Id(categoryId, pageable);
    else page = repo.findAll(pageable);
    return page.map(Mapper::toProductDTO);
  }


  public ProductDTO getById(Long id) {
    var p = repo.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    return Mapper.toProductDTO(p);
  }


  public ProductDTO create(Product product) {
    var saved = repo.save(product);
    return Mapper.toProductDTO(saved);
  }


  public ProductDTO update(Long id, Product updated) {
    var p = repo.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
      p.setName(updated.getName());
      p.setDescription(updated.getDescription());
      p.setPrice(updated.getPrice());
      p.setStockQuantity(updated.getStockQuantity());
      p.setImageUrl(updated.getImageUrl());
      p.setActive(updated.getActive());
    var saved = repo.save(p);
    return Mapper.toProductDTO(saved);
  }


  public void delete(Long id) { repo.deleteById(id); }
}