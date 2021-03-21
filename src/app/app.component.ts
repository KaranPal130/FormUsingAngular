import { Component } from '@angular/core';

function log(target:any, name:any, descriptor:any){
  console.log(target,name, descriptor);
  // store the original function in a variable 
  const original = descriptor.value
  // do some manipulations with descriptor.value
  console.log("This function is hacked")
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

@log
aSimpleMethod(){
  console.log("Hey There!");
}
}