package com.example.loja.service;


import com.example.loja.model.User;
import com.example.loja.repository.UserRepository;
import com.example.loja.config.JwtUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AuthService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;


    public AuthService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }


    public String register(String name, String email, String password) {
        if (userRepository.findByEmail(email).isPresent()) throw new RuntimeException("Email já cadastrado");
        User u = new User();
            u.setName(name);
            u.setEmail(email);
            u.setPasswordHash(passwordEncoder.encode(password));
            u.setRole("USER");
            userRepository.save(u);
        return jwtUtils.generateToken(u.getEmail(), u.getRole());
    }


    public String login(String email, String password) {
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Credenciais inválidas"));
        if (!passwordEncoder.matches(password, user.getPasswordHash())) throw new RuntimeException("Credenciais inválidas");
        return jwtUtils.generateToken(user.getEmail(), user.getRole());
    }
}