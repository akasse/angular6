import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  templateUrl: '500.component.html',
  styleUrls: ['./500.component.scss'],
})
export class p500Component implements OnInit {

  constructor() { }

  ngOnInit() {



    $(document).ready(function(){
      alert('akasse');

      $(function() {
        var Accordion = function(el, multiple) {
          this.el = el || {};
          // more then one submenu open?
          this.multiple = multiple || false;

          var dropdownlink = this.el.find('.dropdownlink');
          dropdownlink.on('click',
                          { el: this.el, multiple: this.multiple },
                          this.dropdown);
        };

        Accordion.prototype.dropdown = function(e) {
          var $el = e.data.el,
              $this = $(this),
              //this is the ul.submenuItems
              $next = $this.next();

          $next.slideToggle();
          $this.parent().toggleClass('open');

          if(!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
          }
        }

        var accordion = new Accordion($('.accordion-menu'), false);
      })

    });

    }

}
