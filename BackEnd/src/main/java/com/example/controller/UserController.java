package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

	private UserService userservice;
	
	@Autowired
	public UserController(UserService userservice){
		this.userservice=userservice;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<User> findall() {
		return userservice.findall();
	}

	@RequestMapping(method = RequestMethod.POST)
	public User create(@RequestBody User user) {
		user.setId(null);
		return userservice.create(user);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	public User update(@RequestBody User user, @PathVariable Integer id) {
		user.setId(id);
		return userservice.update(user);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		userservice.delete(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User findone(@PathVariable Integer id) {
		return userservice.findone(id);
	}

}
