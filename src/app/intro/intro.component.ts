import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  title: string = 'Introduction'
  visible: boolean = false
}
