

import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-profile',
  templateUrl: 'profilo.page.html',
  styleUrls: ['profilo.page.scss'],
})

export class ProfiloPage {
 
  userProfile = {
    firstName: 'Gennaro',
    lastName: 'Vicenzioni',
    email: 'GennaroVicenzioni@gmail.com',
    profileImage: 'path/to/placeholder.jpg',
  };
  
  constructor() {}
      imageSource: any;

      takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source:CameraSource.Prompt
        });
        this.imageSource

        }
      }
         