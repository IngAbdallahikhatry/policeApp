import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from '@ionic/angular';
//import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
 /*  login:string = '';
  telephone:string = '';
  password:string = '';
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService ,
   
    public alertCtrl: AlertController , 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

ngOnInit(){

}




  myRegister(){
 
    if (this.login.trim()  &&  this.telephone.trim()  && this.password.trim() ) {    
      
    
       
      if (this.password.trim()  === '') {
       
 
      }else{
 
        let credentials = {
          telephone: this.telephone,
          login: this.login,
            password: this.password
        };
 
        
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            this.navCtrl.navigateRoot('login');
           
        }, (err) => {
     
            console.log(err);
          
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{

   
    }
 

} */
}
 