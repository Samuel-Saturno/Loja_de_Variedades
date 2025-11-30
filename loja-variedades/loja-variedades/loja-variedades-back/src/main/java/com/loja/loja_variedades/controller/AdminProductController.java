package com.example.loja.controller;


import com.example.loja.dto.ProductDTO;
import com.example.loja.model.Product;
import com.example.loja.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/admin/products")
@PreAuthorize("hasRole('ADMIN')")
public class AdminProductController {
private final ProductService service;
public AdminProductController(ProductService service) { this.service = service; }


@PostMapping
public ProductDTO create(@RequestBody Product product) { return service.create(product); }


@PutMapping("/{id}")
public ProductDTO update(@PathVariable Long id, @RequestBody Product product) { return service.update(id, product); }


@DeleteMapping("/{id}")
public ResponseEntity<?> delete(@PathVariable Long id) { service.delete(id); return ResponseEntity.noContent().build(); }
}