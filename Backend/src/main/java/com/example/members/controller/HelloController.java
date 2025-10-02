package com.example.members.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class HelloController {
    private String message = "Hello, World!";

    @GetMapping("/hello")
    public String hello() {
        return message;
    }
    @PostMapping("/submit")
    public String submitMessage(@RequestBody String newMessage) {
        message = newMessage;
        return "Message updated: " + message;
    }

}
