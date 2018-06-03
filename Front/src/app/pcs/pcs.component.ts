import { Component, OnInit } from '@angular/core';

import { PcService } from './shared/pc.service'

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css'],
  providers:[PcService]
})
export class PCsComponent implements OnInit {

  constructor(private pcServices : PcService) { }

  ngOnInit() {
  }

}
