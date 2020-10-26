import { Component, OnInit } from '@angular/core';
import * as hostIds from '../../assets/jsons/host_ids.json';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	hostIdsData: any;
  constructor() { }

  ngOnInit(): void {
  	let data: {id: string}[]	= (hostIds as any).default;
  	this.hostIdsData = data;
  }
}