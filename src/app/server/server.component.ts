import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowServer:boolean = false;

  serverStatus= "offline";
  updatedServerStatus= '';
  serverName= 'testserver';
  serverCreated = false;
  serverId = 10;

  constructor() {
    setTimeout(() => {
      this.allowServer=true;
    },2000)

    this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverCreated = true;
    /* this.serverStatus="Server was created! and Server Name: "+this.serverName; */
  }

  onUpdatedServer(event: Event) {
    this.updatedServerStatus = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
