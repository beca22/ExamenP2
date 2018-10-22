import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeelPage } from '../pages/feel/feel';
import { MadnessPage } from '../pages/madness/madness';
import { DividePage } from '../pages/divide/divide';
import { AnswerPage } from '../pages/answer/answer';
import { PortadaFeelPage } from '../pages/portada-feel/portada-feel';
import { PortadaMadnessPage } from '../pages/portada-madness/portada-madness';
import { PortadaDividePage } from '../pages/portada-divide/portada-divide';
import { PortadaAnswerPage } from '../pages/portada-answer/portada-answer';
import { SwsPage } from '../pages/sws/sws';
import { EdSheeranPage } from '../pages/ed-sheeran/ed-sheeran';
import { BtsPage } from '../pages/bts/bts';
import { ReseñasFeelPage } from '../pages/reseñas-feel/reseñas-feel';
import { ReseñasMadnessPage } from '../pages/reseñas-madness/reseñas-madness';
import { ReseñasDividePage } from '../pages/reseñas-divide/reseñas-divide';
import { ReseñasAsnwerPage } from '../pages/reseñas-asnwer/reseñas-asnwer';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    FeelPage,
    MadnessPage,
    DividePage,
    AnswerPage, 
    PortadaFeelPage,
    PortadaMadnessPage,
    PortadaDividePage, 
    PortadaAnswerPage,
    SwsPage,
    EdSheeranPage,
    BtsPage,
    ReseñasFeelPage,
    ReseñasMadnessPage,
    ReseñasDividePage,
    ReseñasAsnwerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeelPage,
    MadnessPage,
    DividePage,
    AnswerPage,
    PortadaFeelPage,
    PortadaMadnessPage,
    PortadaDividePage,
    PortadaAnswerPage,
    SwsPage,
    EdSheeranPage,
    BtsPage,
    ReseñasFeelPage,
    ReseñasMadnessPage,
    ReseñasDividePage,
    ReseñasAsnwerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
