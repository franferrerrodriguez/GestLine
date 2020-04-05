package ms.authentication.service;

import java.util.List;

import ms.authentication.entity.db.User;

public interface IAuthenticationService {

	User checkLogin(String email, String password) throws InterruptedException;
	
	User userByDocument(String document) throws InterruptedException;

	List<User> userAll() throws InterruptedException;

}