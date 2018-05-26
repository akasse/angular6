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

    $('.readmore').click(function() {
      $('.content').toggleClass('full');
      $('.header').toggleClass('collapse');
      $('.readmore').toggle();
    });
    $('.closebttn').click(function() {
      $('.content').removeClass('full');
      $('.header').removeClass('collapse');
      $('.readmore').toggle();
    });

  });

  }

}