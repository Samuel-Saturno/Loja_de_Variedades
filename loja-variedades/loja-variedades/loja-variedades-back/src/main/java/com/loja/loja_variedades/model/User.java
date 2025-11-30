package com.example.loja.model;


private String name;


@Column(unique = true, nullable = false)
private String email;


@Column(name = "password_hash", nullable = false)
private String passwordHash;


private String role = "USER";


private Instant createdAt = Instant.now();


// getters e setters


public Long getId() { return id; }
public void setId(Long id) { this.id = id; }
public String getName() { return name; }
public void setName(String name) { this.name = name; }
public String getEmail() { return email; }
public void setEmail(String email) { this.email = email; }
public String getPasswordHash() { return passwordHash; }
public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }
public String getRole() { return role; }
public void setRole(String role) { this.role = role; }
public Instant getCreatedAt() { return createdAt; }
public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}