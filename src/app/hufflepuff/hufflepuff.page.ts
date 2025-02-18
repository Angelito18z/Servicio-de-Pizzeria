import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.page.html',
  styleUrls: ['./hufflepuff.page.scss'],
  standalone:false
})
export class HufflepuffPage implements OnInit {
  casa: string = 'Hufflepuff';
  constructor() { }

  ngOnInit() {
  }

}
