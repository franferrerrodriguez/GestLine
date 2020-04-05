package ms.authentication.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ms.authentication.entity.db.User;
import ms.authentication.repository.IAuthenticationRepository;
import ms.authentication.service.IAuthenticationService;

@Service
public class AuthenticationServiceImpl implements IAuthenticationService {

	@Autowired
	IAuthenticationRepository authenticationRepository;
	
	public User checkLogin(String email, String password) throws InterruptedException {
		for(User user : authenticationRepository.findAll())
			if(user.getEmail().equals(email) && user.getPassword().equals(password))
				return user;
		return null;
	}

	public User userByDocument(String document) throws InterruptedException {
		return authenticationRepository.findByDocument(document);
	}

	public List<User> userAll() throws InterruptedException {
		return authenticationRepository.findAll();
	}

}