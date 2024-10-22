import { Component } from '@angular/core';
import { InfoClimatService, Meteo } from '../../services/info-climat.service';
import { MyButtonComponent } from '../../components/my-button/my-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  meteo!: Meteo;

  constructor(private meteoService: InfoClimatService) {}

  ngOnInit() {
    this.meteoService.request().subscribe({
      next: data => this.meteo = data,
      error: error => console.error(error)
    })
  }

  receiveMessage(message: string) {
    alert(message)
    console.log(this.meteo)
  }
}
