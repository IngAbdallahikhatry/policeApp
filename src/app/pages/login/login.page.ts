import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
//import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  /* login:string = '';
  password:string = '';

  errorMsg:string;

ngOnInit(){
  
}

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService ,
   
    public alertCtrl: AlertController ,
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }






  myLogIn(){
 
    if (this.login.trim() !==''    ) {    
      
      console.log(this.login.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        
 
      }else{
 
        let credentials = {
        login: this.login,
            password: this.password
        };
 
        
         this.authService.login(credentials).then((result) => {
            console.log(result);
            this.navCtrl.navigateRoot('home');
           
        }, (err) => {
     
            console.log(err);
    
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    
   
    }
 
 

}





myLogOut(){
  this.authService.logout();
}

 */
}
