import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowServer:boolean = false;

  serverStatus= "No server was created!";
  updatedServerStatus= '';

  constructor() {
    setTimeout(() => {
      this.allowServer=true;
    },2000)
   }

  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverStatus="Server was created!";
  }

  onUpdatedServer(event: Event) {
    this.updatedServerStatus = (<HTMLInputElement>event.target).value;
    console.log(event);
    
  }

}
