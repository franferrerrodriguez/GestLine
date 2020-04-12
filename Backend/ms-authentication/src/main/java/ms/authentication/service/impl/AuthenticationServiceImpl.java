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
	
	@Override
	public List<User> userAll() throws InterruptedException {
		return authenticationRepository.findAll();
	}
	
	@Override
	public User userByDocument(String document) throws InterruptedException {
		return authenticationRepository.findByDocument(document);
	}
	
	@Override
	public User checkLogin(User user) throws InterruptedException {
		for(User u : authenticationRepository.findAll())
			if((u.getEmail().equals(user.getEmail()) || u.getDocument().equals(user.getDocument())) && 
					u.getPassword().equals(user.getPassword()))
				return u;
		return null;
	}

}