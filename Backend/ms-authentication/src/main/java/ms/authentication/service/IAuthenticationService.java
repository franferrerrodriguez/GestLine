package ms.authentication.service;

import java.util.List;

import ms.authentication.entity.db.User;

public interface IAuthenticationService {

	User check(String email, String password) throws InterruptedException;
	
	User clientById(Long id) throws InterruptedException;

	List<User> clientAll() throws InterruptedException;

}