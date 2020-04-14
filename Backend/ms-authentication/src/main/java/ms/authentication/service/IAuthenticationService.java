package ms.authentication.service;

import java.util.List;

import ms.authentication.entity.db.User;

public interface IAuthenticationService {

	List<User> userAll();
	
	User userByDocument(String document);

	User checkLogin(User user);

	Boolean updateUser(User user);
	
	String getToken(String document);
	
}