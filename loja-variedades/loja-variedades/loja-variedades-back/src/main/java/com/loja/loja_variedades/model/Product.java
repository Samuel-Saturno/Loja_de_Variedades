package com.example.loja.model;
private Long id;


private String name;


@Column(columnDefinition = "TEXT")
private String description;


private BigDecimal price = BigDecimal.ZERO;


@Column(name = "stock_quantity")
private Integer stockQuantity = 0;


@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "category_id")
private Category category;


private String imageUrl;
private Boolean active = true;
private Instant createdAt = Instant.now();
private Instant updatedAt = Instant.now();


// getters e setters
public Long getId() { return id; }
public void setId(Long id) { this.id = id; }
public String getName() { return name; }
public void setName(String name) { this.name = name; }
public String getDescription() { return description; }
public void setDescription(String description) { this.description = description; }
public BigDecimal getPrice() { return price; }
public void setPrice(BigDecimal price) { this.price = price; }
public Integer getStockQuantity() { return stockQuantity; }
public void setStockQuantity(Integer stockQuantity) { this.stockQuantity = stockQuantity; }
public Category getCategory() { return category; }
public void setCategory(Category category) { this.category = category; }
public String getImageUrl() { return imageUrl; }
public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
public Boolean getActive() { return active; }
public void setActive(Boolean active) { this.active = active; }
public Instant getCreatedAt() { return createdAt; }
public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
public Instant getUpdatedAt() { return updatedAt; }
public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}