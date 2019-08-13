import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {

  @Input() title:string;
  @Output() titleClicked = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  sendFromChild(){
    this.titleClicked.emit('fromChild')
  }

}
