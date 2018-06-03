import { Component, OnInit } from '@angular/core';

import { PcService } from '../shared/pc.service'

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PCComponent implements OnInit {

  constructor(private pcService : PcService) { }

  ngOnInit() {
  }

}
