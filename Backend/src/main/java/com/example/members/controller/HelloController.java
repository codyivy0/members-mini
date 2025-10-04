package com.example.members.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Message>> submitMessage(@RequestBody Message newMessage) {
        if (newMessage.getAuthor().isEmpty() || newMessage.getMessage().isEmpty()) {
            System.out.println("Author or message is empty");
            return ResponseEntity.badRequest().body(messages);
        } else {
            messages.add(newMessage);
            return ResponseEntity.ok(messages);
        }
    }

    @DeleteMapping("/messages/{id}")
    public List<Message> deleteMessage(@PathVariable String id) {
        messages.removeIf(msg -> msg.getId().equals(id));
        return messages;
    }
}
