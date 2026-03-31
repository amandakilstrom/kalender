package com.amanda.kalender.repository;

import com.amanda.kalender.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {

}
