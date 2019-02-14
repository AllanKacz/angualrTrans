import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-sidex',
  templateUrl: './sidex.component.html',
  styleUrls: ['./sidex.component.scss']
})
export class SidexComponent implements OnInit {
lang = "en";

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('dk');
  }

changeDK(){
 
  this.translate.use('dk');
}

changeIE(){

  this.translate.use('en');
}
  ngOnInit() {
  }

}
