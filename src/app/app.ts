import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Theaters } from './theaters/theaters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Theaters],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ticket-master-frontend');
}
