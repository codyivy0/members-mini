package com.example.members.dto;

public class Message {
    private String id;
    private String author;
    private String message;


    public Message(Integer id, String author, String message) {
        this.id = java.util.UUID.randomUUID().toString();
        this.author = author;
        this.message = message;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }


    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
