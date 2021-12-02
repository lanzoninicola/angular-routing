import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onLoadServer() {
    this.router.navigate(['/servers']);

    this.route.data.subscribe((data: Data) => {
      this.message = data.message;
    });
  }
}
