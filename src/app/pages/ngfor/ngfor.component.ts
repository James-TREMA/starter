import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  title: string = 'angular'
  visible: boolean = false

  users = [
    {id: 1, name: 'Pierre'},
    {id: 2, name: 'Jeremy'},
    {id: 3, name: 'Alain'},
  ]
}
