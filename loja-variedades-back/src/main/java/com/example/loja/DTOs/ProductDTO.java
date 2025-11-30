package com.example.loja.DTOs;


import java.math.BigDecimal;


public record ProductDTO(Long id, String name, String description, BigDecimal price, Integer stockQuantity, String imageUrl) {}