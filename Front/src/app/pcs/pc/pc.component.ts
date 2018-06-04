import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PcService } from '../shared/pc.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {

  constructor(private pcService: PcService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.pcService.selectedPc = {
      PcID: null,
      Brand: '',
      Model: '',
      Mobo: '',
      RAM: '',
      HDD: '',
      Process: '',
      ImgUrl: ''

    }
  }
  onSubmit(form: NgForm) {
    if (form.value.PcID == null) {
    this.pcService.postPC(form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.toastr.success("New Record Added Successfully","Registro do PC");
      })
    }else {
      this.pcService.putPC(form.value.PcID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.pcService.getPcList();
        this.toastr.info('Record Updated Successfully!', 'PC Register');
      });
    }
  }
}
