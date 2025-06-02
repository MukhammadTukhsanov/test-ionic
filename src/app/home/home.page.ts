import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowRedoOutline,
  chatbubblesOutline,
  checkmarkSharp,
  chevronBack,
  ellipsisVertical,
  eyeOutline,
  heartOutline,
  lockClosed,
  playOutline,
  star,
  timerOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon,
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      'chevron-back': chevronBack,
      'share-outline': arrowRedoOutline,
      'checkmark-outline': checkmarkSharp,
      lock: lockClosed,
      star,
      'ellipsis-vertical': ellipsisVertical,
      'chatbubble-outline': chatbubblesOutline,
      play: playOutline,
      'eye-outline': eyeOutline,
      'heart-outline': heartOutline,
      timer: timerOutline,
    });
  }
}
