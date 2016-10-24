import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  template:
  `
    <div style=" position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(105,105,105,0.5);">   </div>
  
  `
})
export class GmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
