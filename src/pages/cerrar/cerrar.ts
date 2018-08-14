import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CerrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerrar',
  templateUrl: 'cerrar.html',
})
export class CerrarPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {    
    this.presentLoadingDefault();
    //this.navCtrl.push(LoginPage);  
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'}); 
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Cerrar Sesión...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

}
