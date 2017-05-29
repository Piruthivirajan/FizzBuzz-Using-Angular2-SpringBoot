"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://localhost:8333/users/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log('PostsService Initialized');
    }
    UserService.prototype.getPosts = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    UserService.prototype.createUser = function (value) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(value);
        return this.http.post('http://localhost:8333/users/', body, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.removeUser = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete('http://localhost:8333/users/' + id, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (value) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(value);
        return this.http.post(this.url + value.id, body, options).map(function (res) { return res.json(); });
        //return this.http.put(this.url+value.id,body,options).map(res => res.json()); 
        //}  
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map