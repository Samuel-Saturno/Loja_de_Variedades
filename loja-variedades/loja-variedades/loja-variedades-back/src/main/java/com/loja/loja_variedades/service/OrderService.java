package com.example.loja.service;


import com.example.loja.model.Order;
import com.example.loja.repository.OrderRepository;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class OrderService {
    private final OrderRepository orderRepository;
    public OrderService(OrderRepository orderRepository) { this.orderRepository = orderRepository; }


    public Order create(Order order) {
        order.setStatus("CREATED");
        return orderRepository.save(order);
    }


    public List<Order> listAll() { return orderRepository.findAll(); }


    public Order getById(Long id) { return orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Pedido não encontrado")); }


    public Order updateStatus(Long id, String status) {
        var o = getById(id);
            o.setStatus(status);
        return orderRepository.save(o);
    }
}