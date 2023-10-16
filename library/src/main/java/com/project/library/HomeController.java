package com.project.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/init")
    public String index() {
        return "init";
    }

    @PostMapping("/auth")
    public String authenticate(@RequestParam("username") String username, @RequestParam("password") String password, HttpSession session) {
        // Realiza la autenticación (verifica las credenciales) aquí.
        System.out.println("Username: " + username);
        System.out.println("Password: " + password);
        if (username.equals("usuario") && password.equals("contrasena")) {
            // Las credenciales son válidas, genera y devuelve un token JWT.
            
            System.out.println("Aqui entre ");
            Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, null);

        // Establece la autenticación en el contexto de seguridad
            SecurityContextHolder.getContext().setAuthentication(authentication);

            System.out.println(SecurityContextHolder.getContext());
            String token = jwtService.generateToken(username);
            
        // Agrega el token como un atributo en la URL de redirección
        session.setAttribute("token", token);
        
        // Redirige a la página de bienvenida
        return "redirect:/welcome";
        }

        // Maneja la autenticación fallida
        return "auth";
    }

    @GetMapping("/welcome")
public String welcome(HttpSession session, Model model) {
    // Recupera el token almacenado en la sesión
    String token = (String) session.getAttribute("token");
    
    // Agrega el token al modelo para que esté disponible en la vista de bienvenida
    model.addAttribute("token", token);

    return "welcome"; // Devuelve la vista de bienvenida
}
}

