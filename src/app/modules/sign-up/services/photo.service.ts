import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Photo } from '../interfaces/signUp';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photo: Photo = null;

  constructor() { }

  public async addPhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
    this.photo = {
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    }
  }
  
}
