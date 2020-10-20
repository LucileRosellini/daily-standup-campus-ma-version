import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import {ProjetsService} from "../projets.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projets: Projet[];

  constructor(private useService:ProjetsService) {

  }


  ngOnInit() {
    this.catchGetRecupData();
  }

catchGetRecupData() : void{

  this.useService.getRecupData()
  .subscribe(projets => this.projets = projets );
}

}
