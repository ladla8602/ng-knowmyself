import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, Events } from '@ionic/angular';
@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.page.html',
  styleUrls: ['./button-text.page.scss'],
})
export class ButtonTextPage implements OnInit {
  items=[];
  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.close();
  }

}
