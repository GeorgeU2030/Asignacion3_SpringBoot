package com.project.library;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET_KEY = "YourSecretKey"; // Reemplaza con tu clave secreta
    private static final long EXPIRATION_TIME = 86400000; // 1 día en milisegundos

    public String generateToken(String username) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + EXPIRATION_TIME);

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();

        return "Bearer " + token; // Agrega "Bearer " al token antes de devolverlo
    }

    public Authentication getAuthentication(String token) {
        if (isValidToken(token)) {
            String username = extractUsername(token);
            // Devuelve una instancia de UsernamePasswordAuthenticationToken con el usuario y las credenciales en blanco
            return new UsernamePasswordAuthenticationToken(username, null, null);
        }
        return null;
    }
    

    public boolean isValidToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String extractUsername(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
}

