import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  panelOpenState=false
  showReview: boolean = false;

  constructor() { }
  
  title=["One","Two","Three"]

  openReview() {
    this.showReview = !this.showReview;
  }

  ngOnInit(): void {
  }

}
