package com.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import java.util.Arrays;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.builders.UserBuilder;
import com.example.controller.UserController;
import com.example.model.User;
import com.example.service.UserService;

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {

	private static final Integer USER_ID = 1;
	private static final User EXISTING_USER = new UserBuilder().setId(USER_ID).setName("raja").setPassword("raja")
			.Build();
	private static final User ANOTHER_USER = new UserBuilder().setId(2).setName("test").setPassword("test").Build();
	private static final User NEW_USER = new UserBuilder().setId(USER_ID).setName("raja").setPassword("raja").Build();

	@InjectMocks
	private UserController usercontroller;

	@Mock
	private UserService userservice;

	@Test
	public void WhenCreatingUserItShouldReturnExistingUser() {
		given(userservice.create(NEW_USER)).willReturn(EXISTING_USER);
		assertThat(usercontroller.create(NEW_USER)).isSameAs(EXISTING_USER);
	}

	@Test
	public void WhenUpdatingUserItShouldReturnUpdatedUser() {
		given(userservice.findone(USER_ID)).willReturn(EXISTING_USER);
		given(usercontroller.create(EXISTING_USER)).willReturn(EXISTING_USER);
	//assertThat(usercontroller.update(EXISTING_USER,USER_ID)).isSameAs(EXISTING_USER);

	}
	@Test
	public void WhengetingUserItShouldAllExistingUser(){
		given(userservice.findall()).willReturn(Arrays.asList(NEW_USER,EXISTING_USER));
		assertThat(usercontroller.findall()).containsOnly(NEW_USER,EXISTING_USER);
	}
	@Test
	public void WhenweGivingAIdItShouldReturnTheUser(){
		given(userservice.findone(USER_ID)).willReturn(EXISTING_USER);
		assertThat(usercontroller.findone(USER_ID)).isSameAs(EXISTING_USER);
	}
	@Test
	public void WhenWegivingAIdItShouldDeleteTheRecord(){
		usercontroller.delete(USER_ID);
		verify(userservice).delete(USER_ID);
	}
}
