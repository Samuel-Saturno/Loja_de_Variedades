package com.example.loja.controller;


import com.example.loja.model.Order;
import com.example.loja.service.OrderService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;
    public OrderController(OrderService orderService) { this.orderService = orderService; }


    @PostMapping
    public Order create(@RequestBody Order order) { return orderService.create(order); }


    @GetMapping
    public List<Order> list() { return orderService.listAll(); }


    @GetMapping("/{id}")
    public Order get(@PathVariable Long id) { return orderService.getById(id); }


    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public Order updateStatus(@PathVariable Long id, @RequestParam String status) { return orderService.updateStatus(id, status); }
}