import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor() { }


  ngOnInit() {



  $(document).ready(function(){
    alert('akasse');

    (function() {
      $('.btn').click(function() {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
      });

    }).call(this);



  });

  }

}
