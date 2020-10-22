import { Component, OnInit, Input } from '@angular/core';
import {Projet} from '../projet';

@Component({
  selector: 'app-projet-child',
  templateUrl: './projet-child.component.html',
  styleUrls: ['./projet-child.component.sass']
})
export class ProjetChildComponent implements OnInit {

@Input() projet:Projet;

  constructor() { }

  ngOnInit(): void {
  }

}
