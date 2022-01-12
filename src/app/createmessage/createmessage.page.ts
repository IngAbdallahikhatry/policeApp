import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators, FormControl} from '@angular/forms';
import { NavController , ToastController, Platform, ModalController, PopoverController} from '@ionic/angular';
import { MessageService } from '../providers/message.service';

import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx'; 
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera ,CameraOptions} from '@ionic-native/camera/ngx';

import { ActionSheetController } from '@ionic/angular';
import { PictureSourceType } from '@ionic-native/camera/ngx';

import { ModalPage } from '../modal/modal.page';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';
import { Router } from '@angular/router';

const STORAGE_KEY='my_images';
@Component({
  selector: 'app-createmessage',
  templateUrl: './createmessage.page.html',
  styleUrls: ['./createmessage.page.scss'],
})
export class CreatemessagePage implements OnInit {



  image1 = '';

imagePath: string;
  upload: any;

images=[];
  currentLocation: any= {
    lat: 0,
    lng: 0
   };
  
  MessageForm:FormGroup;
photos:any;
subscribe:any;
  constructor(public navCntrl:NavController,
    private geolocation:Geolocation,
    public messageServ:MessageService,
    public httpClient:HttpClient,
    private fb:FormBuilder,
  
   private ref:ChangeDetectorRef,
 
  public modalController:ModalController,
   public platform:Platform,
  private camera: Camera,
  private storage: AngularFireStorage,
  private actionsheetController:ActionSheetController,
  public toastCtrl: ToastController,
  public locationAccuracy:LocationAccuracy,
private router:Router,
  public loadingController: LoadingController,
  public alertController: AlertController,
  private popover :PopoverController
   ) {
   
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat= resp.coords.latitude,
      this.currentLocation.lng=resp.coords.longitude 
    });
    this.subscribe=this.platform.backButton.subscribeWithPriority(666666,
      ()=>{
     
       this.navCntrl.back();
  
        
      })
  
   }

display=true;

  ngOnInit() {
    this.askToTurnOnGPS();
    this.MessageForm=this.fb.group({
      genre :[''],
      description: [null],
      phone:['',Validators.compose([Validators.pattern('[0-9]|[٠-٩]'),Validators.minLength(8),Validators.maxLength(8), Validators.required])],
      
    })
  }

  back(){
    this.router.navigateByUrl('tabs/tab1');
  }

  getMimeType(fileExt) {
    if (fileExt == 'wav') return { type: 'audio/wav' };
    else if (fileExt == 'jpg') return { type: 'image/jpg' };
    else if (fileExt == 'mp4') return { type: 'video/mp4' };
    else if (fileExt == 'MOV') return { type: 'video/quicktime' };
  }
  
imgs:any;
     async addPhoto(source: string) {
    
      if (source === 'camera') {
        console.log('camera');
        const cameraPhoto = await this.openCamera();
        this.image1 = 'data:image/jpg;base64,' + cameraPhoto;
        this.display=false;
        this.imgs=cameraPhoto;
    
      } else {
        console.log('library');
        const libraryImage = await this.openLibrary();
        this.image1 = 'data:image/jpg;base64,' + libraryImage;
        this.display=false;
        this.imgs=libraryImage;
      }
    }

    async openCamera() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 1000,
        targetHeight: 1000,
        sourceType: this.camera.PictureSourceType.CAMERA
      };
      return await this.camera.getPicture(options);
    }


  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  public base64Image:string;

  filedata:any;
  filename:any;
  /* File onchange event */
  fileEvent(e){
      this.filedata = e.target.files[0];
      console.log(this.filedata);
this.filename=this.filedata.name;
  }
  
  async AjoutM(form){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat= resp.coords.latitude,
      this.currentLocation.lng=resp.coords.longitude 
    });
    console.log(form.description);

    
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();

    this.imagePath = new Date().getTime() + '.jpg';
     
    var ref = this.storage.ref(this.imagePath).putString(this.image1, 'data_url');
    this.storage.ref(this.imagePath).getDownloadURL().subscribe(url=> this.upload = url);
    let myInfo=new FormData();
   myInfo.append('image',this.imagePath);
      myInfo.append('description',form.description);
      myInfo.append('genre',form.genre);
     myInfo.append('phone',form.phone);
     myInfo.append('altitude',this.currentLocation.lat);
     myInfo.append('longitude',this.currentLocation.lng);

      this.messageServ.insertPosts(myInfo);
      
      await loading.onDidDismiss();
    
 }





    askToTurnOnGPS() {
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {
          // Wh²en GPS Turned ON call method to get Accurate location coordinates
    
        },
        error => alert('Error requesting location permissions ' + JSON.stringify(error))
      );
    }

    async openModal() {
      const modal = await this.modalController.create({
        component: ModalPage ,
        cssClass: 'my-custom-class',      
      });
      return await modal.present();
    }

      


    async lngs(ev){

      const popover=await this.popover.create(
        {
          component:LanguagePopoverPage,
          event :ev,
          componentProps:{
             root:'tabs/createmessage'
           } 


        });
 
 popover.present();

    }
   

  

    


}
