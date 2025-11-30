package com.example.loja.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/contact")
public class ContactController {
    @PostMapping
    public ResponseEntity<?> contact(@RequestBody java.util.Map<String, String> payload) {
        // aqui você poderia integrar com Twilio/WhatsApp ou enviar email
        System.out.println("Mensagem de contato recebida: " + payload);
        return ResponseEntity.ok().body("Mensagem recebida");
    }
}