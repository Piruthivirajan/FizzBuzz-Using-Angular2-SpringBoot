import { TestBed,async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { MockBackend,MockConnection  } from '@angular/http/testing';
import { BaseRequestOptions, Http, XHRBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockUsers } from './user.data.mock';
import { tick, fakeAsync } from '@angular/core/testing';
import {user} from './../user';

describe('UserService', () => {
 
   let backend: MockBackend;
    let userserv: UserService;
      beforeEach(() => {
        TestBed.configureTestingModule({
         providers: [
          {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,     
         UserService]
    }); backend = TestBed.get(MockBackend);
    userserv=TestBed.get(UserService,null);
  });

    it('should be created', inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy(); }));


    it(' should return users', inject([UserService], (service: UserService) => {
        return service.getPosts().subscribe( data => {
        expect(data).toEqual(MockUsers);
    });}));


    it('should retrieve all search results',inject([UserService, MockBackend], fakeAsync((userService: UserService, mockBackend: MockBackend) => {
        let res: Response;
          mockBackend.connections.subscribe(c => {
              expect(c.request.url).toBe('http://localhost:8888/users/');
                let response = new ResponseOptions({body: '[{"id":1,"name": "Rapid","password":"raja"}, {"id":1,"name": "NGBC","password":"raja"}]'});
                  c.mockRespond(new Response(response));});

                  userService.getPosts().subscribe((data) => {
              res = data;});
        expect(res[0].name).toBe('Rapid'); })));


      it('should try to make a POST request to the proper URL & Create',
          inject([UserService, MockBackend], fakeAsync((service: UserService, backend: MockBackend) => {
              let res = new ResponseOptions();
                   let mockUser: user = {          id:1,          name: 'raja',       password: 'raja'   }; 
                      let mockUser2: user = {    id:1,   name: 'raja',  password: 'raja' };       
  
                backend.connections.subscribe((connection: MockConnection) => { 
                                      expect(connection.request.url).toBe('http://localhost:8888/users/');
                                      expect(connection.request.method).toBe(RequestMethod.Post);
                                      expect(connection.request.text()).toBe(JSON.stringify(mockUser2));});
                tick(); userserv.createUser(mockUser).subscribe((res:Response)=>{

         });})));
    



      it('Should delete record',  inject([UserService, MockBackend], fakeAsync((userService: UserService, mockBackend: MockBackend) => {
             mockBackend.connections.subscribe(c => {
                expect(c.request.url).toBe('http://localhost:8888/users/' +1);
                  c.mockRespond(new Response(new ResponseOptions({status: 201}))); });

                  userService.removeUser(1).subscribe((response) => {
                       
        });})));

      
      it('Should Create User', inject([UserService, MockBackend], fakeAsync((userService: UserService, mockBackend: MockBackend) => {

           mockBackend.connections.subscribe(c => {
            c.mockRespond(new Response(new ResponseOptions({body: {"id": 1,"name":"raja","password":"raja" }}))); });

                     userService.createUser(MockUsers).subscribe((response) => {
                   expect(response.name).toBe('raja');
                 }); })));


        it('Should Update User', inject([UserService, MockBackend], fakeAsync((userService: UserService, mockBackend: MockBackend) => {
     
                mockBackend.connections.subscribe(c => {
                  c.mockRespond(new Response(new ResponseOptions({body: {"id": 1,"name":"raja","password":"raja" }})));});
            
                  userService.updateUser(MockUsers).subscribe((response) => { 
              expect(response.name).toBe('raja');
        });})));
});
