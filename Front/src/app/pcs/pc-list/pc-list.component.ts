import { Component, OnInit } from '@angular/core';

import { PcService } from '../shared/pc.service'

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PCListComponent implements OnInit {

  constructor(private pcServices : PcService) { }

  ngOnInit() {
  }

}
