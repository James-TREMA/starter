import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() title: string = ''
  @Output() clickEvent: EventEmitter<string> = new EventEmitter()

  sendMessage() {
    this.clickEvent.emit('Message envoyé depuis myButton')
  }
}