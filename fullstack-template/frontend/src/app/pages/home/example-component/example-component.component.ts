import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/global/services/example/example.service';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {

  public myUserID;
  public userIDToTreat;
  public foodToTreat;
  public socketEvents: {event:string, message: any}[];

  constructor(private exampleService: ExampleService, private socketService: SocketsService) { 
    this.socketEvents=[];
  }

  ngOnInit() {
    this.myUserID="me";
    this.userIDToTreat="userToTreat";
    this.foodToTreat="aFoodToTreat"
    this.socketService.syncMessages("treating").subscribe(msg=>{
      this.socketEvents.push(msg);
    })
    this.treatSomeone();
  }

  public treatSomeone(){
    this.exampleService.treatSomeone(this.foodToTreat,this.userIDToTreat).subscribe();
  }

}
