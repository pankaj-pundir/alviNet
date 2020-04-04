import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // appTitle: string;
  @Input() appTitle:string;

  constructor() { }

  ngOnInit() {
  }

    // alert(this.counter);
  

}
