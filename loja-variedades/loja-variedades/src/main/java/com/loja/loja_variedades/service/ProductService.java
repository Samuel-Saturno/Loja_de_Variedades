package com.example.loja.service;

import com.example.loja.dto.ProductDTO;
import com.example.loja.model.Product;
import com.example.loja.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
  private final ProductRepository repo;

  public ProductService(ProductRepository repo) {
    this.repo = repo;
  }

  public Page<ProductDTO> listAll(String q, Long categoryId, Pageable pageable) {
    Page<Product> page;
    if (q != null && !q.isBlank()) {
      page = repo.findByNameContainingIgnoreCase(q, pageable);
    } else if (categoryId != null) {
      page = repo.findByCategory_Id(categoryId, pageable);
    } else {
      page = repo.findAll(pageable);
    }
    return page.map(p -> new ProductDTO(p.getId(), p.getName(), p.getDescription(), p.getPrice(), p.getStockQuantity(), p.getImageUrl()));
  }

  public ProductDTO getById(Long id) {
    var p = repo.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    return new ProductDTO(p.getId(), p.getName(), p.getDescription(), p.getPrice(), p.getStockQuantity(), p.getImageUrl());
  }

  public ProductDTO create(Product product) {
    Product saved = repo.save(product);
    return new ProductDTO(saved.getId(), saved.getName(), saved.getDescription(), saved.getPrice(), saved.getStockQuantity(), saved.getImageUrl());
  }

  // editar, deletar...
}
