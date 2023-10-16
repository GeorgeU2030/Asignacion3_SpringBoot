package com.project.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.security.PermitAll;

@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService;


    @PermitAll
    @PostMapping("/b")
    public String authenticate(@RequestBody AuthRequest authRequest) {
        // Realiza la autenticación (verifica las credenciales) aquí.
        if (authRequest.getUsername().equals("usuario") && authRequest.getPassword().equals("contrasena")) {
            // Las credenciales son válidas, genera y devuelve un token JWT.
            return jwtService.generateToken(authRequest.getUsername());
        }

        // Si las credenciales no son válidas, puedes devolver un mensaje de error.
        return "Credenciales no válidas";
    }
}

