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
      alert('ok');

      $('.post-module').hover(function() {
        $(this).find('.description').stop().animate({
          height: "toggle",
          opacity: "toggle"
        }, 300);
      });

  });

  }

}
