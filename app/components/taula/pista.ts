export class Pista {
    public nom: string;
    public artista: string;
    public genere: string;
    public fav : boolean;

    constructor(nom:string,artista: string, genere: string){
      this.nom = nom;
      this.artista = artista;
      this.genere = genere;
      this.fav = false;
    }
}
 