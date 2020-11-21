import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id1: string;
  id2: string;
  total:number;
   
  constructor(public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
	  this.id1 = this.route.snapshot.params['id1'];
	  this.id2 = this.route.snapshot.params['id2'];
  }
  
  add() {	
	  this.total = parseInt(this.id1) + parseInt(this.id2); 
		  
  }
}




