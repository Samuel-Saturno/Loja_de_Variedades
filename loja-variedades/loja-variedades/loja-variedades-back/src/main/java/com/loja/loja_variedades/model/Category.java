package com.example.loja.model;


import jakarta.persistence.*;


@Entity
@Table(name = "categories")
public class Category {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;


private String name;
private String slug;


// getters e setters
public Long getId() { return id; }
public void setId(Long id) { this.id = id; }
public String getName() { return name; }
public void setName(String name) { this.name = name; }
public String getSlug() { return slug; }
public void setSlug(String slug) { this.slug = slug; }
}