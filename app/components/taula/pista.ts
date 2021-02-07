export class Pista {
    public nom: string;
    public artista: string;
    public genere: string;
    public fav : boolean;
    public info : string;

    constructor(nom:string,artista: string, genere: string,info: string){
      this.nom = nom;
      this.artista = artista;
      this.genere = genere;
      this.info = info;
      this.fav = false;
    }
}