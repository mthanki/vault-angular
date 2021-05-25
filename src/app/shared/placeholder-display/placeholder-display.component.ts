import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-display',
  templateUrl: './placeholder-display.component.html',
  styleUrls: ['./placeholder-display.component.scss']
})
export class PlaceholderDisplayComponent implements OnInit {
  @Input() displayText = "Something went wrong. Please try again later.";
  constructor() { }

  ngOnInit(): void {
  }

}
