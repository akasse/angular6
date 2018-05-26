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

    $(document).ready(function () {

      $('.more-options a').click(function(e) {
        $(this).next('.additional-options').slideToggle();
        e.preventDefault();
      });

    });
  }

}