import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import {AuthService} from 'src/app/services/auth.service';
import {AlertController, NavController,LoadingController} from '@ionic/angular'
import {Router} from '@angular/router';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
   validationMessages = {
      names: [{type:"required", message:"Por favor introduce tu nombre"}],
      phone: [{type:"required", message:"Por favor introduce tu numero de telefono"}],
      email: [
        {type: 'required',message:"Entra tu correo electronico"},
        {type:"pattern", meesage:"El correo ingresado es incorrecto, Intentalo de nuevo!"}
      ],
      password: [
        {type: "required", message: "La contraseña es requerida"},
        {type:"minlength", message: "La contraseña debe contener almenos 6 caracteres"}
      ]
   }

   ValidationFormUSer : FormGroup;
   loading:any;

  constructor(private router: Router, private preference: AppPreferences,
     private navCtr: NavController ,private formbuilder:FormBuilder, private authService: AuthService, public loadingCtrl : LoadingController, private alertCtrl: AlertController){
    this.loading = this.loadingCtrl
   }

  ngOnInit() {
  this.ValidationFormUSer = this.formbuilder.group({
    names: new FormControl('', Validators.compose([
       Validators.required
    ])),

    phone: new FormControl('', Validators.compose([
      Validators.required
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),

    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]))

  })

  }

  registerUser(value){
   this.showalert();
    try{
   this.authService.userRegistration(value).then( response =>{
     console.log(response);
     if(response.user){
       response.user.updateProfile({
         displayName: value.names,
         email: value.email,
         phoneNumber: value.phone
         
       });
    this.preference.store(value.phone,'userPhoneNumber');
     this.loading.dismiss();
     this.router.navigate(['loginscreen']);
     }
   }, error=>{
     this.loading.dismiss();
     this.errorLoading(error.message);

   })
 }catch(erro){
   console.log(erro)
}
  }


  async errorLoading(message: any){
    const loading = await this.alertCtrl.create({
      header:"Error al registrar",
      message:message,
      buttons:[{
        text:'ok',
        handler: ()=>{
        this.navCtr.navigateBack(['signup'])
      }
      }]
    })
     await loading.present();
  }




  async showalert(){
 var load = await this.loadingCtrl.create({
   message:"Por favor espere...",

 })
  load.present();
}

}
