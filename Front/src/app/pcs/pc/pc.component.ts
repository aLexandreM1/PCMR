import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { PcService } from '../shared/pc.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {

  constructor(private pcService: PcService, private toastr: ToastrService) { }
  private base64textString: String = "";

  ngOnInit() {
    this.resetForm();
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = "data:image/jpeg;base64," + btoa(binaryString);
    //enviar this.base64textString no lugar da ImgUrl :D
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.pcService.selectedPc = {
      PcID: null,
      Brand: '',
      Model: '',
      Mobo: '',
      HDD: '',
      Process: '',
      RAM: '',
      ImgUrl: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.PcID == null) {
      form.value.ImgUrl = this.base64textString;
      this.pcService.postPC(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.pcService.getPcList();
          this.toastr.success("New Record Added Successfully", "Registro do PC");
        })
    }
    else {
      form.value.ImgUrl = this.base64textString;
      this.pcService.putPC(form.value.PcID, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.pcService.getPcList();
          this.toastr.info('Record Updated Successfully!', 'PC Register');
        });
    }
  }
}
