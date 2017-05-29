package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	private UserRepository userrepository;

	@Autowired
	public UserServiceImpl(UserRepository userrepository) {
		this.userrepository = userrepository;
	}

	public UserServiceImpl() {
	}

	public User create(User user) {
		return userrepository.saveAndFlush(user);
	}

	public User update(User user) {
		return userrepository.saveAndFlush(user);
	}

	public void delete(Integer id) {
		userrepository.delete(id);
	}

	public List<User> findall() {
		return userrepository.findAll();
	}

	public User findone(Integer id) {
		return userrepository.findOne(id);
	}

}
