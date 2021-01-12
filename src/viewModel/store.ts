export class Store {

    _name : any ;
    _branches : any ;
    _logo :any
    


  constructor(name :string ='' , branches : string[] =[] , logo ?: string ) { 

    this._name = name  ;
    this._branches = branches ;
    this._logo = logo ;
   
  }

}
