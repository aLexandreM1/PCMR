import { Component, OnInit } from '@angular/core';

import { PcService } from '../shared/pc.service'
import { Pc } from '../shared/pc.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})

export class PcListComponent implements OnInit {

  constructor(private pcService : PcService, private toastr: ToastrService) { }

  ngOnInit() {
    this.pcService.getPcList();
  }

  showForEdit(pc: Pc) {
    this.pcService.selectedPc = Object.assign({}, pc);;
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.pcService.deletePC(id)
        .subscribe(x => {
          this.pcService.getPcList();
          this.toastr.warning("Deleted Successfully", "PC Register");
        })
    }
  }
}
