import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router ,NavigationExtras} from '@angular/router';
import { NavController, Platform, PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';
import { AvisService } from '../providers/avis.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage implements OnInit {
  subscribe:any;
  popo:LanguagePopoverPage;
  mydata=[];
  nbr=0;
  constructor(
    private router:Router,
    
    private fb:FormBuilder,
    private avisServ:AvisService ,
    public navCtrl: NavController,
    public platform:Platform,
    private storage:Storage,
    private popover :PopoverController
    ) { 
      this.subscribe=this.platform.backButton.subscribeWithPriority(666666,
        ()=>{
       
         this.navCtrl.back();

        })
        
      
        
    }

  ngOnInit() {

    this.storage.get('SELECTED_LANGUAGE').then(lng =>{
      this.avisServ.getAvis(lng).subscribe(res =>{
        // this.mydata=res;
         
         res.forEach(element => {
           this.mydata1=element.detail;
          element['short']=this.mydata1.slice(0,75) + '...';
          this.mydata.push(element);
         
         });
         console.log(this.mydata)
         
       })
  
      });

  }

  mydata1:any;
 
  i:any;
 async recupererData(){
    // this.myInfo.description='ffgh';
    let lng=await this.storage.get('SELECTED_LANGUAGE');
      this.avisServ.getAvis(lng).subscribe(res =>{
       // this.mydata=res;
        
        res.forEach(element => {
          this.mydata1=element.detail;
         element['short']=this.mydata1.slice(0,100) + '...';
         this.mydata.push(element);
        
        });
        console.log(this.mydata)
        
      })
      
      }
      
      detail(item){
        
            let navigationExtra:NavigationExtras={
              queryParams:{
                special:JSON.stringify(item)
              }
            }



            this.router.navigate(['informer'],navigationExtra);
      }

      

      back(){
        this.router.navigateByUrl('tabs/tab1');
      }



      async lngs(ev){
      
        const popover=await this.popover.create(
          {
            component: LanguagePopoverPage,
            event :ev,
          componentProps:{
             root:'tabs/avis'
           } 
          });
   
   popover.present();
  
      }


}
