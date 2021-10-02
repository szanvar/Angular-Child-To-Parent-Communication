import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public MyEvent = new EventEmitter();

  public fun()
  {
    //console.log("Button Clicked");
    this.MyEvent.emit("Hello From Child");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
