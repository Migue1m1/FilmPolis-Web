import { Injectable } from '@angular/core';
import { Component, ViewChild,OnInit } 	  from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Actor } from './actor';
import { Suggestions } from './suggestions';

import 'rxjs/add/operator/map';

@Injectable()
export class ActorsService {

/*	term: string = '';
  	public actorsuggestion: Suggestions[];
  	public actor: Actor;
  	showinfo = false;
  	showactor = false;


  constructor(private http: Http) { 

		this.actorsuggestion = new Array <Suggestions> ();
		this.actor = new Actor;
  }

   searchActor(){
	 	this.http.get('http://localhost:9090/api-gateway/actors/suggestions/'+this.term)
	 	.map((res: Response) => res.json())
	 	.subscribe(res => {
	 			this.actorsuggestion = res.data;
	 			console.log(this.actorsuggestion);
	 		}
	 	)
 	}

 	bringActor(){
 		this.http.get('http://localhost:9090/api-gateway/actors/'+this.term)
	 	.map((res: Response) => res.json())
	 	.subscribe(res => {
	 			this.actor = res.data;
	 			this.validActor();
	 			console.log(this.actor);
	 		}
	 	)

 	}

 	validActor(){
 		if(this.actor.deathDay == ""){
 			this.actor.deathDay = "Aún vivo";
 		}

 		if(this.actor.gender == "Male")
 			this.actor.gender = "Masculino";

 		if(this.actor.gender == "Female")
 			this.actor.gender = "Femenino";
 	}


 	function personFromJson(jsonString: string): Person[] {
    let obj = JSON.parse(jsonString);
    let personArray = new Array<Person>();

    for (let i = 0; i < obj.length; i++){
        personArray[i] = new Person;

        personArray[i].name = obj[i].name;
        personArray[i].lastname = obj[i].lastname;
        personArray[i].nickname = obj[i].nickname;
        personArray[i].age = obj[i].age;
    }

    return personArray;
}


 	fillInput(palabra){
 		this.showinfo = true;
 		this.term = palabra;
 		console.log(this.term);
 	}*/

}
