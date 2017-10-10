export class Movie {
  	public title:string;
    public id:number;
    public released:string;
    public studio:string;
    public description:string;
    public genre:string;
    public language:string;
   	public runtime:string;
   	public imgUrl:string;
    public rating:string;
    actors:     [{ id: String, role: String }];
    directors:  [{ id: String }];
}
