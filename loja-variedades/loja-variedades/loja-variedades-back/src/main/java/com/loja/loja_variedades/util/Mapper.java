package com.example.loja.util;


import com.example.loja.dto.ProductDTO;
import com.example.loja.model.Product;


public class Mapper {
    public static ProductDTO toProductDTO(Product p) {
        return new ProductDTO(p.getId(), p.getName(), p.getDescription(), p.getPrice(), p.getStockQuantity(), p.getImageUrl());
    }
}