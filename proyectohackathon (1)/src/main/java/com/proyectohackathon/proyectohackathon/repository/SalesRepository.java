package com.proyectohackathon.proyectohackathon.repository;

import com.proyectohackathon.proyectohackathon.domain.Sales;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface SalesRepository extends ReactiveMongoRepository<Sales,String> {

}
