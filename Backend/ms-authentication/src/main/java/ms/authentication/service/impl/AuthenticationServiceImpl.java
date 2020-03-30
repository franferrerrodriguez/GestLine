package ms.authentication.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ms.authentication.caller.Caller;
import ms.authentication.entity.db.User;
import ms.authentication.repository.IAuthenticationRepository;
import ms.authentication.service.IAuthenticationService;

@Service
public class AuthenticationServiceImpl implements IAuthenticationService {

	@Autowired
	private Caller caller;

	@Autowired
	IAuthenticationRepository clientRepository;

	@Autowired
	private Environment environment;
	
	public User check(String email, String password) throws InterruptedException {
		List<User> users = clientRepository.findAll();
		for(User user : users) {
			if(user.getEmail().equals(email) && user.getPassword().equals(password)) {
				return user;
			}
		}
		
		return null;
	}

	public User clientById(Long id) throws InterruptedException {

		Thread.sleep(0);
		String port = environment.getProperty("local.server.port");
		if (port.equals("8001")) {
			Thread.sleep(25000);
		}

		User user = clientRepository.findById(id);

//		ResponseEntity<List<BankAccounts>> response = this.caller.getApi("http://localhost:8000/nif/" + client.getNif(),
//				HttpMethod.GET);
//
//		client.setBankAccounts(response.getBody());

		return user;
	}

	public List<User> clientAll() throws InterruptedException {

		List<User> users = clientRepository.findAll();

		for (User user : users) {
//			ResponseEntity<List<BankAccounts>> response = this.caller
//					.getApi("http://localhost:8000/nif/" + client.getNif(), HttpMethod.GET);
//
//			System.out.println(response.getStatusCode());
		}

		return users;
	}

}