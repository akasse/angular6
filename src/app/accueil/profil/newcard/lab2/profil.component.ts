import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor() { }

   c = 0;
   open_close(){
    if(this.c % 2 == 0){
  document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
  this.c++;
    }else {
  document.querySelector('.cont_modal').className = "cont_modal";
  this.c++;
    }
  }


  ngOnInit() {



  $(document).ready(function(){
    alert('akasse');

    window.onload = function(){
      document.querySelector('.cont_modal').className = "cont_modal";
      }




  });

  }

}
