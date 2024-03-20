package com.Farm.pigCenter.model.Persistence;

import com.Farm.pigCenter.model.Feeding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedingRepository   extends JpaRepository<Feeding, Integer> {
}
