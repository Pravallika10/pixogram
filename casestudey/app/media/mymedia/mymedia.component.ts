import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'mymedia',
  templateUrl: './mymedia.component.html',
  styleUrls: ['./mymedia.component.css']
})
export class MymediaComponent implements OnInit {

  constructor(public auth:AuthenticateService) { }

  ngOnInit() {
  }

}
