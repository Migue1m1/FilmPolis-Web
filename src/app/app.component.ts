import { Component, ViewChild, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CompleterService, CompleterData } from 'ng2-completer';

import { Actor } from './actor';
import { Suggestions } from './suggestions';
import { Director } from './director';
import { Movie } from './movie';

import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  	title = 'FilmPolis';
  	term: string = '';
  	edadActor;
  	public actorsuggestion = Array <Suggestions> ();
  	public actor: Actor;
  	public movie: Movie;
  	showinfo  = false;
  	show      = false;
  	showMovie = false;
  	typesearch = 'Peliculas';
 

  constructor(private http: Http) { 
  		this.searchDirector();
  		this.searchActor();
  		this.searchMovie();
		this.bringActor();
		this.bringDirector();
		//this.bringMiddleware(public palabra: String);
		this.actorsuggestion = new Array <Suggestions> ();

		this.actor = new Actor;
		this.movie = new Movie;

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
	 			this.mostrarEdad();
	 			console.log(this.actor);
	 		}
	 	)

 	}

 	validActor(){

 		if(this.actor.imageURL == "http://image.tmdb.org/t/p/original/" || this.actor.imageURL == ""){
 			this.actor.imageURL = "./assets/noimage.png";
 		}

 		if(this.actor.gender == ""){
 			this.actor.gender = "N/A";
 		}

 		if(this.actor.birthDay == ""){
 			this.actor.birthDay = "N/A";
 		}

 		if(this.actor.biography == "")
 			this.actor.biography = "Sin biografía";

 		if(this.actor.birthPlace == "")
 			this.actor.birthPlace = "N/A";

 		if(this.actor.deathDay == ""){
 			this.actor.deathDay = "Aún vivo";
 		}

 		if(this.actor.gender == "Male")
 			this.actor.gender = "Masculino";

 		if(this.actor.gender == "Female")
 			this.actor.gender = "Femenino";
 	}


		searchMiddleware(){
 		if(this.typesearch == 'Actores')
 		{
 			this.showinfo = true;
 			this.searchActor();
 		}

 		if(this.typesearch == 'Directores')
 		{
 			this.showinfo = true;
 			this.searchDirector();
 		}

 		if(this.typesearch == 'Peliculas')
 		{
 			this.showinfo = true;
 			this.searchMovie();
 		}
 	}

 

 	bringMiddleware(palabra){
 		if(this.typesearch == 'Actores')
 		{
 			this.fillInput(palabra);
 			this.showMovie = false;
 			this.show = true;	
 			this.bringActor();
 		}

 		if(this.typesearch == 'Directores')
 		{
 			this.fillInput(palabra);
 			this.showMovie = false;
 			this.show = true;
 			this.bringDirector();
 		}
 		if(this.typesearch == 'Peliculas')
 		{
 			this.fillInput(palabra);
 			this.show = false;
 			this.showMovie = true;
 			this.bringMovie();
 		}
 	}

 	fillInput(palabra){
 		this.showinfo = false;
 		this.term = palabra;
 		console.log(this.term);
 	}


	searchDirector() 
	{
	 	this.http.get('http://localhost:9090/api-gateway/directors/suggestions/'+this.term)
	 	.map((res: Response) => res.json())
	 	.subscribe(res => {
	 			this.actorsuggestion = res.data;
	 			console.log(this.actorsuggestion);
	 		}
	 	)
 	 }

 	  	bringDirector(){
 		this.http.get('http://localhost:9090/api-gateway/directors/'+this.term)
	 	.map((res: Response) => res.json())
	 	.subscribe(res => {
	 			this.actor = res.data;
	 			this.validActor();
	 			console.log(this.actor);
	 		}
	 	)
	}

	searchMovie(){
		this.http.get('http://localhost:9090/api-gateway/movies/suggestions/'+this.term)
		.map((res: Response) => res.json())
	 	.subscribe(res => {
	 			this.actorsuggestion = res.data;
	 			console.log(this.actorsuggestion);
	 		}
	 	)
	}


 	  	bringMovie(){
 		this.http.get('http://localhost:9090/api-gateway/movies/'+this.term)
	 	.map((res: Response) => res.json())
	 	.subscribe(res => {
	 			this.movie = res.data;
	 			this.validMovie();
	 			console.log(this.movie);
	 		}
	 	)
	}

	validMovie(){
		if(this.movie.imgUrl == "")
			this.movie.imgUrl = "./assets/noimage.png";

		if(this.movie.genre == "")
			this.movie.genre = "No especificado";

		if(this.movie.description =="")
			this.movie.description = "Sin descripcion";
	}

	diff_years(dt2, dt1) 
		 {

		  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
		   diff /= (60 * 60 * 24);
		  return Math.abs(Math.round(diff/365.25));
		   
		 }

	transformStringToDate(fecha)
	{
		var nuevafecha = new Date(fecha);

		return nuevafecha;
	}

	mostrarEdad(){
		var fechaActual = new Date().toLocaleDateString();

		var fechaActor = this.transformStringToDate(this.actor.birthDay);

		this.edadActor = this.diff_years(fechaActor , fechaActual);
	}

	clear(){
		this.show = false;
		this.showMovie = false;
	}

}
