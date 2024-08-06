import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrl: './invitacion.component.css'
})
export class InvitacionComponent{

  nombreInvitado: string = '';
  srcPase: string = "assets/pase-uno.png"
  nombresPermitidos = ['hernelio', 'suge', 'lucia', 'lemi', 'flor'];
  nombresCompletos = [ 
    {
      nombres: 'Hernelio Long',
      pases: 1
    },
    {
      nombres: 'Sugehidyli Harris',
      pases: 1
    },
    {
      nombres: 'Lemineth Guardia',
      pases: 1
    },
    {
      nombres: 'Hernelio Long',
      pases: 1
    },
    {
      nombres: 'Flor Arosemena y Olo Davis',
      pases: 2
    }];
  showPageMain: boolean = false;
  indice: number = -2;
  days: string = "";

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      const nombre = params['nombre'];
      if (this.nombresPermitidos.includes(nombre)) {
        const pases = this.nombresCompletos[this.nombresPermitidos.indexOf(nombre)].pases;
        this.nombreInvitado = this.nombresCompletos[this.nombresPermitidos.indexOf(nombre)].nombres;
        this.calculatePase(pases);
      } else {
        this.nombreInvitado = ""
      }
    });

  }

  calculatePase(pases: number){
    switch (pases) {
      case 1:
        this.srcPase = 'assets/pase-uno.png'
        break;
      case 2:
        this.srcPase = 'assets/pase-dos.png'
        break;
      case 3:
        this.srcPase = 'assets/pase-tres.png'
        break;
      default:
        break;
    }
    
  }

  eventEmited(event: boolean){
    if (event) {
      setTimeout(() => {
        this.indice = 2;
      }, 2000);
    }
  }

  public getTimeRemaining(): string {
    const endDate = new Date("2024-12-20T00:00:00");
    const now = new Date();
    const timeDiff = endDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
        return "0 : 0 : 0 : 0";
    }

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
}

public whatsAppHernelio(){
  const phoneNumber = '50763067208';
  const message = `¡Hola Hernelio!, soy/somos ${this.nombreInvitado} ¡Confirmo mi asistencia a tu boda. ¡Estoy emocionado/a de celebrar con ustedes!`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  const browser = InAppBrowser.create(url,'_system');
}

public whatsAppSuge(){
  const phoneNumber = '50760913115';
  const message = `¡Hola Suge!, soy/somos ${this.nombreInvitado} ¡Confirmo mi asistencia a tu boda. ¡Estoy emocionado/a de celebrar con ustedes!`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  const browser = InAppBrowser.create(url,'_system');
}
}
