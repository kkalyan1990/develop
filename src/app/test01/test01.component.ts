import { Component, OnInit } from '@angular/core';
import { Test1Service } from './test1.service';
import { EqualheightDirective } from './equalheight.directive';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss'],
  providers: [Test1Service]
})
export class Test01Component implements OnInit {

  buttonArr: any[] = [];
  constructor(
    private Test1ServiceInstance: Test1Service
  ) { }

  ngOnInit() {
    this.Test1ServiceInstance.getButtonsText().subscribe(data => {
      // console.log(data);
      this.buttonArr = data;
    });
  }

}
