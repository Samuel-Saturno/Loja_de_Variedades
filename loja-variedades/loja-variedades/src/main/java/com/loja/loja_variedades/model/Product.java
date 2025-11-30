package com.example.loja.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "products")
public class Product {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  @Column(columnDefinition = "TEXT")
  private String description;

  private BigDecimal price;

  private Integer stockQuantity;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "category_id")
  private Category category;

  private String imageUrl;
  private Boolean active = true;
  private Instant createdAt = Instant.now();
  private Instant updatedAt = Instant.now();

  // getters e setters
}
