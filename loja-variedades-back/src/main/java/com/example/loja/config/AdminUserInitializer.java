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
    public CommandLineRunner createAdmin(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        return args -> {
            String adminEmail = "admin@loja.com";
            var existing = userRepository.findByEmail(adminEmail);
            if (existing.isEmpty()) {
                User u = new User();
                u.setName("Admin");
                u.setEmail(adminEmail);
                u.setPasswordHash(passwordEncoder.encode("admin123"));
                u.setRole("ADMIN");
                userRepository.save(u);
                System.out.println("[AdminUserInitializer] Admin user created: " + adminEmail + " / password: admin123");
            } else {
                var u = existing.get();
                u.setPasswordHash(passwordEncoder.encode("admin123"));
                u.setRole("ADMIN");
                userRepository.save(u);
                System.out.println("[AdminUserInitializer] Admin user updated (password reset): " + adminEmail + " / password: admin123");
            }
        };
    }
}
