import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare-summary',
  templateUrl: './fare-summary.component.html',
  styleUrls: ['./fare-summary.component.css']
})
export class FareSummaryComponent implements OnInit {

  panelOpenState = false;


  constructor() { }

  ngOnInit(): void {
  }

}
