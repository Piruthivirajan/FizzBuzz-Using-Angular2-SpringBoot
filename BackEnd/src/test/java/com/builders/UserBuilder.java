package com.builders;

import com.example.model.User;

public class UserBuilder {

	private User user = new User();

	public UserBuilder setId(Integer id) {
		user.setId(id);
		return this;
	}

	public UserBuilder setPassword(String password) {
		user.setPassword(password);
		return this;
	}

	public UserBuilder setName(String name) {
		user.setName(name);
		return this;
	}

	public User Build() {
		return user;
	}
}
