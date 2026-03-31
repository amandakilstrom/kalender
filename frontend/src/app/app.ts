import { Component, OnInit } from '@angular/core';
import { EventService, Event } from './services/event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  events: Event[] = [];
  newEvent: Event = { title: '', description: '', startTime: '', endTime: '' };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAll().subscribe(data => this.events = data);
  }

  createEvent() {
    this.eventService.create(this.newEvent).subscribe(() => {
      this.loadEvents();
      this.newEvent = { title: '', description: '', startTime: '', endTime: '' };
    });
  }
}