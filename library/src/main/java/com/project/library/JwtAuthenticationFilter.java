package com.project.library;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.core.Authentication;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private JwtService jwtService;

    public JwtAuthenticationFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(jakarta.servlet.http.HttpServletRequest request,
            jakarta.servlet.http.HttpServletResponse response, jakarta.servlet.FilterChain filterChain)
            throws jakarta.servlet.ServletException, IOException {
        String token = request.getHeader("Authorization");

        // Verifica si el token es válido (debe contener la palabra "Bearer" y estar firmado correctamente).
        if (isValidToken(token)) {
            Authentication authentication = jwtService.getAuthentication(token);

            if (authentication != null) {
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        filterChain.doFilter(request, response);
    }

    private boolean isValidToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // Elimina el prefijo "Bearer "
            return jwtService.isValidToken(token);
        }

        return false;
    }

    
}

