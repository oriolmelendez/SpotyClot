"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PreferitsComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var PreferitsComponent = /** @class */ (function () {
    function PreferitsComponent() {
        this.pistes = new Array();
        this.displayedColumns = ['nom', 'artista', 'genere', "Reproducir", "favorit"];
        this.dataSource = new table_1.MatTableDataSource(this.pistes);
    }
    PreferitsComponent.prototype.ngOnInit = function () {
        this.recuperarTaula();
    };
    PreferitsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PreferitsComponent.prototype.recuperarTaula = function () {
        for (var i = 1; i < 10; i++) {
            var pista = localStorage.getItem('' + i);
            this.pistes.push(JSON.parse(pista));
        }
        console.log(this.pistes);
    };
    PreferitsComponent = __decorate([
        core_1.Component({
            selector: 'app-preferits',
            templateUrl: './preferits.component.html',
            styleUrls: ['./preferits.component.css']
        })
    ], PreferitsComponent);
    return PreferitsComponent;
}());
exports.PreferitsComponent = PreferitsComponent;
