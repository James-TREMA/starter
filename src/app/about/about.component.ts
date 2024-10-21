import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  // Le ! précise que je sais que id sera défini au moment
  // ou j'en aurais besoin
  id!: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      params => this.id = parseInt(params['id'])
    )
  }
}
