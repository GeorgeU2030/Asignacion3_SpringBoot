package com.project.library;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.ArrayList;
import java.util.Collection;

@Controller
@SessionAttributes("token")
public class HomeController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/init")
    public String index() {
        return "init";
    }

    @PostMapping("/auth")
    public String authenticate(@RequestParam("username") String username, @RequestParam("password") String password, HttpSession session) {
        System.out.println("Username: " + username);
        System.out.println("Password: " + password);

        if (username.equals("usuario") && password.equals("contrasena")) {
            System.out.println("Aqui entre ");

            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

            org.springframework.security.core.userdetails.User userDetails = new org.springframework.security.core.userdetails.User(username, password, authorities);

            Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            System.out.println(SecurityContextHolder.getContext());
            String token = jwtService.generateToken(username);

            session.setAttribute("token", token);
            return "redirect:/welcome";
        }

        return "auth";
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/welcome")
    public String welcome(HttpSession session, Model model) {
        String token = (String) session.getAttribute("token");
        model.addAttribute("token", token);
        return "welcome";
    }
}
