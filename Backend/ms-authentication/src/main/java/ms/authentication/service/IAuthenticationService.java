package ms.authentication.service;

import java.util.List;

import ms.authentication.entity.db.User;

public interface IAuthenticationService {

	List<User> userAll() throws InterruptedException;
	
	User userByDocument(String document) throws InterruptedException;

	User checkLogin(String email, String password) throws InterruptedException;

}