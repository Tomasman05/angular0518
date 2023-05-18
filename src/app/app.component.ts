import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Kezdetek'
  isAdmin=true
  //MVC Model View Controller
  userName:string
  oszlopok=["id","name","type"]
  ujAllat:any={}

  adat:any="test";
  adatok:any=[];

  allatok:any = [
    {id:1, name:"Negró",type:"kutyus"},
    {id:2, name:"Pamacs",type:"macska"},
    {id:3, name:"Vilmos",type:"kutyus"},
  ]
  addAdat(vmi:any){
    this.adatok.push(vmi);
  }
  addAnimal(allat:any){
    this.allatok.push(allat);
  }
  constructor(){
    this.userName="Julcsika"
  }
}
