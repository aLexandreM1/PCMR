import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PcService } from '../shared/pc.service'

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PCComponent implements OnInit {

  constructor(private pcService: PcService) { }

  ngOnInit() {
    this.resetForm();

  }


  resetForm(form? : NgForm) {
    if(form !=null)
    form.reset();
    this.pcService.selectedPc ={
      PCID :null,
      Brand: '',
      Model: '',
      Process: '',
      ProcessSpeed: '',
      ImgUrl: ''

    }
  }
}
