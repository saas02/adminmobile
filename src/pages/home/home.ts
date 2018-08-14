import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[] = [];
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams
  ) {
    
    storage.get('users').then((val) => {      
      console.log(val);
      console.log(JSON.parse(val));
      this.users = JSON.parse(val);
    }); 
    
    console.log(this.users);

  }

}
