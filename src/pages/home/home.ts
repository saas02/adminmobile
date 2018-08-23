import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];
  checking: any[] = [];
  checkList: any[] = [];
  cars: any[] = [];
  nameKm: string;
  checkeds = [];
  selectedArray :any = [];


  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public userService: UserService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {

    storage.get('users').then((val) => {
      this.users = JSON.parse(val);
    });

    storage.get('checkList').then((val) => {
      this.checkList = JSON.parse(val);
    });

    storage.get('listCars').then((val) => {
      this.cars = JSON.parse(val);
    });

    //console.log(this.users);

  }

  list() {
    this.userService.getList()
      .subscribe(
        (data) => { // Success                          
          //data['list'] = JSON.parse('{"code":"00","response":{"42":{"nombre":"ANTES DE INGRESAR AL VEHICULO","campos":{"38":{"texto_campo":"Observe el nivel de:","nombre_campo":"nivel_fluidos","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":{"96":{"value_opcion":"96","texto_opcion":"Aceite del motor:Nivel debe estar entre MIN Y FULL","texto_ayuda_opcion":null,"imagen_opcion":null},"97":{"value_opcion":"97","texto_opcion":"Aceite de direccion hidraulica : Nivel entre minimo y maximo","texto_ayuda_opcion":null,"imagen_opcion":null},"98":{"value_opcion":"98","texto_opcion":"Refrigerante del radiador: Nivel motor frio en minimo y caliente en maximo","texto_ayuda_opcion":null,"imagen_opcion":null},"99":{"value_opcion":"99","texto_opcion":"Agua de bateria y estado fisico: (agua desmineralizada),Nivel 1 Cm arriba de las placas","texto_ayuda_opcion":null,"imagen_opcion":null},"100":{"value_opcion":"100","texto_opcion":"Liquido de frenos y embrague hidraulico: Nivel debe estar siempre en maximo","texto_ayuda_opcion":null,"imagen_opcion":null},"101":{"value_opcion":"101","texto_opcion":"Agua de lavaparabrisas: Nivel totalmente lleno","texto_ayuda_opcion":null,"imagen_opcion":null},"102":{"value_opcion":"102","texto_opcion":"Tanque de combustible:Nivel totalmemte lleno","texto_ayuda_opcion":null,"imagen_opcion":null}}},"39":{"texto_campo":"Observe si hay fugas en:","nombre_campo":"exstencia_fugas","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"S","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":{"103":{"value_opcion":"103","texto_opcion":"El sistema hidraulico de direccion","texto_ayuda_opcion":null,"imagen_opcion":null},"104":{"value_opcion":"104","texto_opcion":"El sistema de combustible","texto_ayuda_opcion":null,"imagen_opcion":null},"105":{"value_opcion":"105","texto_opcion":"El Sistema de refrigeracionn","texto_ayuda_opcion":null,"imagen_opcion":null},"106":{"value_opcion":"106","texto_opcion":"El Carter del motor y filtro de aceite motor","texto_ayuda_opcion":null,"imagen_opcion":null},"107":{"value_opcion":"107","texto_opcion":"Sistema de frenos","texto_ayuda_opcion":null,"imagen_opcion":null},"108":{"value_opcion":"108","texto_opcion":"Sistema de embrague","texto_ayuda_opcion":null,"imagen_opcion":null},"109":{"value_opcion":"109","texto_opcion":"Transmision y Diferencial","texto_ayuda_opcion":null,"imagen_opcion":null}}},"40":{"texto_campo":"Revise el estado de:","nombre_campo":"estado_elementos","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"12","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":{"110":{"value_opcion":"110","texto_opcion":"Luces estacionarias","texto_ayuda_opcion":null,"imagen_opcion":null},"111":{"value_opcion":"111","texto_opcion":"Unidades de luz delantera","texto_ayuda_opcion":null,"imagen_opcion":null},"112":{"value_opcion":"112","texto_opcion":"Luces direccionales: delanteras y traseras","texto_ayuda_opcion":null,"imagen_opcion":null},"113":{"value_opcion":"113","texto_opcion":"Luces de freno","texto_ayuda_opcion":null,"imagen_opcion":null},"114":{"value_opcion":"114","texto_opcion":"Luces de cabina","texto_ayuda_opcion":null,"imagen_opcion":null},"115":{"value_opcion":"115","texto_opcion":"Luces de tablero","texto_ayuda_opcion":null,"imagen_opcion":null},"116":{"value_opcion":"116","texto_opcion":"Parasoles,Guantera,  Manijas, chapas, seguros y tapizado puertas","texto_ayuda_opcion":null,"imagen_opcion":null},"117":{"value_opcion":"117","texto_opcion":"Palanca de Freno de parqueo.  Revisar el recorrido","texto_ayuda_opcion":null,"imagen_opcion":null},"118":{"value_opcion":"118","texto_opcion":"Calefaccion y interruptores de tablero","texto_ayuda_opcion":null,"imagen_opcion":null},"119":{"value_opcion":"119","texto_opcion":"Tablero de instrumentos y rejillas de ventilacion","texto_ayuda_opcion":null,"imagen_opcion":null},"120":{"value_opcion":"120","texto_opcion":"Tapiceria, sillas y cinturon de seguridad en todas las sillas","texto_ayuda_opcion":null,"imagen_opcion":null},"121":{"value_opcion":"121","texto_opcion":"Equipo de carretera","texto_ayuda_opcion":null,"imagen_opcion":null}}}}},"43":{"nombre":"AL ENCEDER EL MOTOR","campos":{"41":{"texto_campo":"Revise el funcionamiento de los indicadores del tablero:","nombre_campo":"funcionamiento_tablero","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":{"122":{"value_opcion":"122","texto_opcion":"Presion de aceite motor: testigo se apaga cunado el motor esta trabajando","texto_ayuda_opcion":null,"imagen_opcion":null},"123":{"value_opcion":"123","texto_opcion":"RPM de motor en el tacometro: nunca hacer funcionar el motor con la aguja del tacometro en la franja roja","texto_ayuda_opcion":null,"imagen_opcion":null},"124":{"value_opcion":"124","texto_opcion":"Voltaje  bateria (Voltimetro debe permanecer de 13,5 a 14V): Testigo  o lampara se apaga cuando el motor esta trabajando","texto_ayuda_opcion":null,"imagen_opcion":null},"125":{"value_opcion":"125","texto_opcion":"Nivel de combustible","texto_ayuda_opcion":null,"imagen_opcion":null},"126":{"value_opcion":"126","texto_opcion":"Temperatura refrigerante motor: la aguja debe estar en la mitad franja  de operacion.","texto_ayuda_opcion":null,"imagen_opcion":null},"127":{"value_opcion":"127","texto_opcion":"Revolucion minima de motor: ( 800 RPMS)","texto_ayuda_opcion":null,"imagen_opcion":null},"128":{"value_opcion":"128","texto_opcion":"Nota:Si se requiere relleno de algun fluido este debe ser  efectuado solamente el funcionario designado para tal fin<\/b>","texto_ayuda_opcion":null,"imagen_opcion":null}}},"42":{"texto_campo":"Verifique funcionamiento de luces internas y externas: (con la colaboracion del asistente)","nombre_campo":"funcionamiento_luces","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"S","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":{"129":{"value_opcion":"129","texto_opcion":"Luces principales: plenas y bajas","texto_ayuda_opcion":null,"imagen_opcion":null},"130":{"value_opcion":"130","texto_opcion":"Luces de cabina","texto_ayuda_opcion":null,"imagen_opcion":null},"131":{"value_opcion":"131","texto_opcion":"Luces de parqueo y emergencia","texto_ayuda_opcion":null,"imagen_opcion":null},"132":{"value_opcion":"132","texto_opcion":"Luces direccionales","texto_ayuda_opcion":null,"imagen_opcion":null},"133":{"value_opcion":"133","texto_opcion":"Luces de reversa","texto_ayuda_opcion":null,"imagen_opcion":null},"134":{"value_opcion":"134","texto_opcion":"Luces de frenado","texto_ayuda_opcion":null,"imagen_opcion":null},"135":{"value_opcion":"135","texto_opcion":"Luces del tablero de instrumentos","texto_ayuda_opcion":null,"imagen_opcion":null}}},"43":{"texto_campo":"Revise el funcionamiento de:","nombre_campo":"funcionamiento_elementos","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"12","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":{"136":{"value_opcion":"136","texto_opcion":"Sistema de frenos de parqueo y emergencia (verifique su recorrido)","texto_ayuda_opcion":null,"imagen_opcion":null},"137":{"value_opcion":"137","texto_opcion":"Calibracion del pedal del embrague","texto_ayuda_opcion":null,"imagen_opcion":null},"138":{"value_opcion":"138","texto_opcion":"Revise botiquin y extintor (pasador de seguridad y aguja del manometro)","texto_ayuda_opcion":null,"imagen_opcion":null},"139":{"value_opcion":"139","texto_opcion":"Freno de servicio (verifique su recorrido)","texto_ayuda_opcion":null,"imagen_opcion":null},"140":{"value_opcion":"140","texto_opcion":"Control de cambios","texto_ayuda_opcion":null,"imagen_opcion":null},"141":{"value_opcion":"141","texto_opcion":"Ajuste los espejos retrovisores","texto_ayuda_opcion":null,"imagen_opcion":null}}}}}}}');
          data['checkList'] = JSON.parse('{"code":"00","response":[{"nombre":"ANTES DE INGRESAR AL VEHICULO","campos":[{"texto_campo":"Observe el nivel de:","nombre_campo":"nivel_fluidos","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":[{"value_opcion":"96","texto_opcion":"Aceite del motor:Nivel debe estar entre MIN Y FULL","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"97","texto_opcion":"Aceite de direccion hidraulica : Nivel entre minimo y maximo","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"98","texto_opcion":"Refrigerante del radiador: Nivel motor frio en minimo y caliente en maximo","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"99","texto_opcion":"Agua de bateria y estado fisico: (agua desmineralizada),Nivel 1 Cm arriba de las placas","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"100","texto_opcion":"Liquido de frenos y embrague hidraulico: Nivel debe estar siempre en maximo","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"101","texto_opcion":"Agua de lavaparabrisas: Nivel totalmente lleno","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"102","texto_opcion":"Tanque de combustible:Nivel totalmemte lleno","texto_ayuda_opcion":null,"imagen_opcion":null}]},{"texto_campo":"Observe si hay fugas en:","nombre_campo":"exstencia_fugas","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"S","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":[{"value_opcion":"103","texto_opcion":"El sistema hidraulico de direccion","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"104","texto_opcion":"El sistema de combustible","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"105","texto_opcion":"El Sistema de refrigeracionn","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"106","texto_opcion":"El Carter del motor y filtro de aceite motor","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"107","texto_opcion":"Sistema de frenos","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"108","texto_opcion":"Sistema de embrague","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"109","texto_opcion":"Transmision y Diferencial","texto_ayuda_opcion":null,"imagen_opcion":null}]},{"texto_campo":"Revise el estado de:","nombre_campo":"estado_elementos","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"12","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":[{"value_opcion":"110","texto_opcion":"Luces estacionarias","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"111","texto_opcion":"Unidades de luz delantera","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"112","texto_opcion":"Luces direccionales: delanteras y traseras","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"113","texto_opcion":"Luces de freno","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"114","texto_opcion":"Luces de cabina","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"115","texto_opcion":"Luces de tablero","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"116","texto_opcion":"Parasoles,Guantera,  Manijas, chapas, seguros y tapizado puertas","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"117","texto_opcion":"Palanca de Freno de parqueo.  Revisar el recorrido","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"118","texto_opcion":"Calefaccion y interruptores de tablero","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"119","texto_opcion":"Tablero de instrumentos y rejillas de ventilacion","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"120","texto_opcion":"Tapiceria, sillas y cinturon de seguridad en todas las sillas","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"121","texto_opcion":"Equipo de carretera","texto_ayuda_opcion":null,"imagen_opcion":null}]}]},{"nombre":"AL ENCEDER EL MOTOR","campos":[{"texto_campo":"Revise el funcionamiento de los indicadores del tablero:","nombre_campo":"funcionamiento_tablero","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":[{"value_opcion":"122","texto_opcion":"Presion de aceite motor: testigo se apaga cunado el motor esta trabajando","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"123","texto_opcion":"RPM de motor en el tacometro: nunca hacer funcionar el motor con la aguja del tacometro en la franja roja","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"124","texto_opcion":"Voltaje  bateria (Voltimetro debe permanecer de 13,5 a 14V): Testigo  o lampara se apaga cuando el motor esta trabajando","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"125","texto_opcion":"Nivel de combustible","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"126","texto_opcion":"Temperatura refrigerante motor: la aguja debe estar en la mitad franja  de operacion.","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"127","texto_opcion":"Revolucion minima de motor: ( 800 RPMS)","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"128","texto_opcion":"Nota:Si se requiere relleno de algun fluido este debe ser  efectuado solamente el funcionario designado para tal fin<\/b>","texto_ayuda_opcion":null,"imagen_opcion":null}]},{"texto_campo":"Verifique funcionamiento de luces internas y externas: (con la colaboracion del asistente)","nombre_campo":"funcionamiento_luces","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"6","salto_campo":"S","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":[{"value_opcion":"129","texto_opcion":"Luces principales: plenas y bajas","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"130","texto_opcion":"Luces de cabina","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"131","texto_opcion":"Luces de parqueo y emergencia","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"132","texto_opcion":"Luces direccionales","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"133","texto_opcion":"Luces de reversa","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"134","texto_opcion":"Luces de frenado","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"135","texto_opcion":"Luces del tablero de instrumentos","texto_ayuda_opcion":null,"imagen_opcion":null}]},{"texto_campo":"Revise el funcionamiento de:","nombre_campo":"funcionamiento_elementos","obligatorio_campo":"1","tipo_dato_campo":null,"validacion_campo":null,"cell_bootstrap_campo":"12","salto_campo":"","visible_campo":"1","tipo_campo_campo":null,"texto_ayuda_campo":null,"imagen_campo":null,"valor_campo":null,"opciones":[{"value_opcion":"136","texto_opcion":"Sistema de frenos de parqueo y emergencia (verifique su recorrido)","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"137","texto_opcion":"Calibracion del pedal del embrague","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"138","texto_opcion":"Revise botiquin y extintor (pasador de seguridad y aguja del manometro)","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"139","texto_opcion":"Freno de servicio (verifique su recorrido)","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"140","texto_opcion":"Control de cambios","texto_ayuda_opcion":null,"imagen_opcion":null},{"value_opcion":"141","texto_opcion":"Ajuste los espejos retrovisores","texto_ayuda_opcion":null,"imagen_opcion":null}]}]}]}');
          this.checkList = data['checkList']['response'];          
          //data['results'] = JSON.parse('{"code":"99","response":"Debe enviar el id_empresa para realizar la consulta"}');                              
          this.storage.set('checkList', JSON.stringify(data['checkList']['response']));

        },
        (error) => {
          console.error(error);
        }
      )
  }

  listCars() {
    this.userService.getListCars()
      .subscribe(
        (data) => { // Success                          
          data['listCars'] = JSON.parse('{"code":"00","response":[{"id_tipo_activo":"3","nombre":"Camion","id_activo":"1","nombre_activo":"12 - camion freightliner","Kilometraje":"130010.00"}]}');
          this.cars = data['listCars']['response'];
          //this.nameKm = data['listCars']['response'][0].Kilometraje;
          this.storage.set('listCars', JSON.stringify(data['listCars']['response']));
        },
        (error) => {
          console.error(error);
        }
      )
  }

  validateKm() {
    if (parseInt(this.cars[0].Kilometraje) > parseInt(this.nameKm)) {
      this.userService.showAlert('El Kilometraje debe ser mayor a: ' + parseInt(this.cars[0].Kilometraje));
      this.nameKm = null;
    }
  }

  addCheckbox(event, checkbox : String, i, j, k){
    if ( event.target.checked ) {
      document.getElementById("checkListInfo_"+i+"_"+j+"_"+k).checked = true;
      this.checkeds.push(checkbox);
    } else {
      let index = this.removeCheckedFromArray(checkbox);
      this.checkeds.splice(index,1);
    }    
  }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox : String) {
    return this.checkeds.findIndex((category)=>{
      return category === checkbox;
    })
  }

  CheckedAll(i, j) {
    //Do whatever       
      var isChecked = document.getElementById("checkAll_"+i+"_"+j).checked;         
      var checking = (isChecked) ? true: false;             
      for(let l = 0; l < document.getElementsByClassName("checkListInfo_"+i+'_'+j).length; l++) {              
        if(document.getElementById("checkListInfo_"+i+'_'+j+'_'+l)){
          document.getElementById("checkListInfo_"+i+'_'+j+'_'+l).checked = checking;
        }
      }
  }


  ionViewDidLoad() {
    this.list();
    this.listCars();
  }

}
