import { Component } from '@angular/core';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-amplify';
  constructor(private apiService: APIService){
    setTimeout(() => {
      apiService.CreateTodo({name:"angular", description:"testing" , address:"my addresss"}).then((result)=>{
        console.log("result", result);
        
      })
    }, 5000);

    apiService.OnCreateTodoListener.subscribe((val)=>{
      console.log("value", val);
      
    })
    apiService.OnaddtodoByIdListener.subscribe(val=>{
      console.log('listener with id', val);
      
    })

  }
}
