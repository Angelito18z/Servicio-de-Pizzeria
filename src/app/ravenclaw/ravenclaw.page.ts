import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.page.html',
  styleUrls: ['./ravenclaw.page.scss'],
  standalone:false
})
export class RavenclawPage implements OnInit {
  casa: string = 'Ravenclaw'; 
  
  constructor() { }

  ngOnInit() {
  }

}
