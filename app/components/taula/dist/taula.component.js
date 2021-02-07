"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaulaComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var pista_1 = require("./pista");
var TaulaComponent = /** @class */ (function () {
    function TaulaComponent() {
        this.pistes = new Array();
        this.displayedColumns = ['nom', 'artista', 'genere', "Reproducir", "favorit"];
        this.dataSource = new table_1.MatTableDataSource(this.pistes);
        localStorage.setItem('1', JSON.stringify(new pista_1.Pista('Cendres', 'Paüra', 'Punk-Rock')));
        localStorage.setItem('2', JSON.stringify(new pista_1.Pista('Katedral Bat', 'Berri txarrak', 'Punk')));
        localStorage.setItem('3', JSON.stringify(new pista_1.Pista('Sova när vi dör', 'Ringnes-Ronny & Kuselofte', 'Pop-rock')));
        localStorage.setItem('4', JSON.stringify(new pista_1.Pista('Ales', 'Icarians', 'Rock')));
        localStorage.setItem('5', JSON.stringify(new pista_1.Pista('La huelga', 'Riot propaganda', 'Rock')));
        localStorage.setItem('6', JSON.stringify(new pista_1.Pista('Pare nostre que esteu a infern', 'Crim', 'Rock')));
        localStorage.setItem('7', JSON.stringify(new pista_1.Pista('Soldadito marinero', 'Taburete', 'Pop espanyol')));
        localStorage.setItem('8', JSON.stringify(new pista_1.Pista('Barrionalistas', 'Los chicos del maiz', 'Rap')));
        localStorage.setItem('9', JSON.stringify(new pista_1.Pista('Katyusha', 'Coro del ejercito rojo', 'Clàssica')));
    }
    TaulaComponent.prototype.ngOnInit = function () {
        this.recuperarTaula();
    };
    TaulaComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TaulaComponent.prototype.recuperarTaula = function () {
        for (var i = 1; i < 10; i++) {
            var pista = localStorage.getItem('' + i);
            this.pistes.push(JSON.parse(pista));
        }
        console.log(this.pistes);
    };
    TaulaComponent = __decorate([
        core_1.Component({
            selector: 'app-taula',
            templateUrl: './taula.component.html',
            styleUrls: ['./taula.component.css']
        })
    ], TaulaComponent);
    return TaulaComponent;
}());
exports.TaulaComponent = TaulaComponent;
