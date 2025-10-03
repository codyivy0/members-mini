package com.example.members.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.*;
import com.example.members.dto.Message;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class HelloController {
    private List<Message> messages = new ArrayList<>();

    @GetMapping("/messages")
    public List<Message> messages() {
        System.out.println(messages);
        return messages;
    }

    @PostMapping("/submit")
    public List<Message> submitMessage(@RequestBody Message newMessage) {
        System.out.println("Received message: " + newMessage);
        messages.add(newMessage);
        return messages;
    }

}
