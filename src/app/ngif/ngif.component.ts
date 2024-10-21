import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  title: string = 'angular'
  visible: boolean = false

  users = [
    {id: 1, name: 'Pierre'},
    {id: 2, name: 'Jeremy'},
    {id: 3, name: 'Alain'},
  ]
}
