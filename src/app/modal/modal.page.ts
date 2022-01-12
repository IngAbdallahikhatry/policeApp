import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

 


  filedata:any;
  filename:any;
image:any;
  fileEvent(event){
this.image=document.getElementById('output');

this.image.src=URL.createObjectURL(event.target.files[0]);
this.image.style.display="block";

this.filedata = event.target.files[0];
this.filename=this.filedata.name;

this.modalCtrl.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }


  ngOnInit() {
  }

}
