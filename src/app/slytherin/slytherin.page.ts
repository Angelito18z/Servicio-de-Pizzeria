import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.page.html',
  styleUrls: ['./slytherin.page.scss'],
  standalone:false
})
export class SlytherinPage implements OnInit {
  casa: string = 'Slytherin';
  constructor() { }

  ngOnInit() {
  }

}
