package com.project.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests(authorizeRequests ->
                authorizeRequests// Permitir acceso a /auth sin autenticación
                    .requestMatchers("/auth").permitAll()
                    .anyRequest().authenticated()
            )
            .formLogin(login -> login
    .loginPage("/init") // Ruta de la página de inicio de sesión personalizada
    .permitAll()
    .successForwardUrl("/welcome") // Redirige a /director después de la autenticación exitosa
)
            .logout(logout -> logout
                .permitAll()
            );

        // Agrega tu JwtAuthenticationFilter como un filtro personalizado
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();

}


}