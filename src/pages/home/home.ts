import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelPage } from '../feel/feel';
import { MadnessPage } from '../madness/madness';
import { DividePage } from '../divide/divide';
import { AnswerPage } from '../answer/answer';
import { PortadaFeelPage } from '../portada-feel/portada-feel';
import { PortadaMadnessPage } from '../portada-madness/portada-madness';
import { PortadaDividePage } from '../portada-divide/portada-divide';
import { PortadaAnswerPage } from '../portada-answer/portada-answer';
import { SwsPage } from '../sws/sws';
import { EdSheeranPage } from '../ed-sheeran/ed-sheeran';
import { BtsPage } from '../bts/bts';
import { ReseñasFeelPage } from '../reseñas-feel/reseñas-feel';
import { ReseñasMadnessPage } from '../reseñas-madness/reseñas-madness';
import { ReseñasDividePage } from '../reseñas-divide/reseñas-divide';
import { ReseñasAsnwerPage } from '../reseñas-asnwer/reseñas-asnwer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
feel = FeelPage;
madness = MadnessPage;
divide = DividePage;
answer = AnswerPage;
feel1 = PortadaFeelPage;
madness1 = PortadaMadnessPage;
divide1 = PortadaDividePage;
answer1 = PortadaAnswerPage;
sws = SwsPage;
ed = EdSheeranPage;
bts = BtsPage;
resenaF = ReseñasFeelPage;
resenaM = ReseñasMadnessPage;
resenaD= ReseñasDividePage;
resenaA = ReseñasAsnwerPage;
  constructor(public navCtrl: NavController) {

  }
  cancionesFeel(){
    this.navCtrl.push(this.feel);
  }
  Feel(){
    this.navCtrl.push(this.feel1);
  }
  SWS(){
    this.navCtrl.push(this.sws);
  }
  resenasFeel(){
    this.navCtrl.push(this.resenaF);
  }



  cancionesMadness(){
    this.navCtrl.push(this.madness);
  }
  Madness(){
    this.navCtrl.push(this.madness1);
  }
  resenasMadness(){
    this.navCtrl.push(this.resenaM);
  }




  cancionesDivide(){
    this.navCtrl.push(this.divide);
  }
  Divide(){
    this.navCtrl.push(this.divide1);
  }
  EdSheeran(){
    this.navCtrl.push(this.ed);
  }
  resenasDivide(){
    this.navCtrl.push(this.resenaD);
  }



  cancionesAnswer(){
    this.navCtrl.push(this.answer);
  }
  Answer(){
    this.navCtrl.push(this.answer1);
  }
  BTS(){
    this.navCtrl.push(this.bts);
  }
  resenasAnswer(){
    this.navCtrl.push(this.resenaA)
  }
}
