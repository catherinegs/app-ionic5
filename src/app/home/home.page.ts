import { Component, Injectable } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AppareilsPage } from '../appareils/appareils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable()
export class HomePage {

  constructor(public navCtrl: NavController) {}

  onGoToAppareils() {
    this.navCtrl.navigateForward('AppareilsPage');
    }
  }


