import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../../providers/user-service';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
  users: any[] = [];
  
  constructor(

    public navCtrl: NavController,    
    public userService: UserService,
    public fb: FormBuilder,
    public navParams: NavParams,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
    
  ) {
    this.myForm = this.fb.group({      
      name: ['', [Validators.required]],         
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }

  login() {
    this.presentLoadingDefault();
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success                
        //this.users = data['results'];
        data['results'] = JSON.parse('{"code":"00","response":[{"id":"1","id_usuario":"jjsolano","password":"8970c2d7ebc546f120a2ba4732e3d01c","nombre":"John Jairo Solano Camargo","id_empresa":"1","empresa":"SIGMANSAS","logo_empresa":"sigman.png","id_version_pesv":"1","id_elemento":"36"}]}');    
        //data['results'] = JSON.parse('{"code":"99","response":"Debe enviar el id_empresa para realizar la consulta"}');
        
        if(data['results']['code'] != '00'){
          return this.showAlert(data['results']['response']);
        }        
        this.storage.set('users', JSON.stringify(data['results']['response'][0]));            
        this.navCtrl.setRoot(HomePage, { }, {animate: true, direction: 'forward'});        
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  saveData(){                 
    if(this.myForm.value.email == 'saas02@gmail.com' && this.myForm.value.password == '970015'){      
      //this.showAlert('Bienvenido......');      
      //this.navCtrl.push(HomePage);
     // this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    }else{
      this.showAlert('El Usuario o contraseña son incorrectos');
    }
    //alert(JSON.stringify(this.myForm.value));
  }

  showAlert(tittle) {
    const alert = this.alertCtrl.create({
      title: tittle
    });
    alert.present();
  }

  ionViewDidLoad() {    
    this.storage.clear();    
    console.log('ionViewDidLoad LoginPage');    
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión...',
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  

}
