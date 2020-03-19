import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  public errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message']; // this is for when the data will not change
    // utilizing the observable approach is for when you think it might change and need it to be updated on the fly
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }
}
