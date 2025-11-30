package com.example.loja.controller;

import com.example.loja.dto.ProductDTO;
import com.example.loja.model.Product;
import com.example.loja.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {
  private final ProductService service;

  public ProductController(ProductService service) {
    this.service = service;
  }

  @GetMapping
  public Page<ProductDTO> list(
      @RequestParam(required = false) String q,
      @RequestParam(required = false) Long categoryId,
      @RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "10") int size) {
    return service.listAll(q, categoryId, PageRequest.of(page, size));
  }

  @GetMapping("/{id}")
  public ProductDTO get(@PathVariable Long id) {
    return service.getById(id);
  }

  @PostMapping
  public ProductDTO create(@RequestBody Product product) {
    return service.create(product);
  }

  // PUT, DELETE para admin
}
