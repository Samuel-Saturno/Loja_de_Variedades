package com.example.loja.controller;


import com.example.loja.DTOs.AuthRequest;
import com.example.loja.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    public AuthController(AuthService authService) { this.authService = authService; }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest req) {
    var token = authService.register(req.name(), req.email(), req.password());
    return ResponseEntity.ok().body(token);
}


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {
    var token = authService.login(req.email(), req.password());
    return ResponseEntity.ok().body(token);
    }
}