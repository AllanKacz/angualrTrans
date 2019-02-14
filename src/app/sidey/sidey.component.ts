import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-sidey',
  templateUrl: './sidey.component.html',
  styleUrls: ['./sidey.component.scss']
})
export class SideyComponent implements OnInit {

  constructor(public translate: TranslateService ) {


    translate.setDefaultLang('dk');
   
}

  ngOnInit() {
  }

}
