package com.example.loja.config;

import com.example.loja.model.User;
import com.example.loja.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class AdminUserInitializer {

    @Bean
    public CommandLineRunner createTestUsers(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        return args -> {
            // Criar usuário comum para testes
            String userEmail = "usuario@loja.com";
            var existingUser = userRepository.findByEmail(userEmail);
            if (existingUser.isEmpty()) {
                User user = new User();
                user.setName("Usuário Comum");
                user.setEmail(userEmail);
                user.setPasswordHash(passwordEncoder.encode("123456"));
                user.setRole("USER");
                userRepository.save(user);
                System.out.println("[TestUsers] Usuário comum criado: " + userEmail + " / senha: 123456");
            }

            // Criar admin para gerenciamento
            String adminEmail = "admin@loja.com";
            var existingAdmin = userRepository.findByEmail(adminEmail);
            if (existingAdmin.isEmpty()) {
                User admin = new User();
                admin.setName("Administrador");
                admin.setEmail(adminEmail);
                admin.setPasswordHash(passwordEncoder.encode("admin123"));
                admin.setRole("ADMIN");
                userRepository.save(admin);
                System.out.println("[TestUsers] Admin criado: " + adminEmail + " / senha: admin123");
            }
        };
    }
}
