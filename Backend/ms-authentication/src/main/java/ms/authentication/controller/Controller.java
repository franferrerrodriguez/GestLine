package ms.authentication.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import ms.authentication.entity.db.User;
import ms.authentication.repository.IAuthenticationRepository;
import ms.authentication.response.Response;
import ms.authentication.response.ResponseError;
import ms.authentication.service.IAuthenticationService;

@RestController
public class Controller {

	@Autowired
	private Environment environment;

	@Autowired
	private IAuthenticationService clientService;

	@Autowired
	private IAuthenticationRepository repository;

	private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/check", method = RequestMethod.POST)
	@HystrixCommand()
	public ResponseEntity<Response<User>> check(@RequestBody User user) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientById' | Port: '%s'", port));

		User checkUser = clientService.check(user.getEmail(), user.getPassword());
		
		Response<User> response;
		if(checkUser == null) {
			response = new Response<User>(new ResponseError("Error"));
		}else {
			response = new Response<User>(checkUser);
		}

		return new ResponseEntity<Response<User>>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<User> clientById(@PathVariable Long id) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientById' | Port: '%s'", port));

		User client = clientService.clientById(id);

		return new ResponseEntity<User>(client, HttpStatus.OK);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<List<User>> clientAll() throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientAll' | Port: '%s'", port));

		List<User> clients = clientService.clientAll();

		return new ResponseEntity<List<User>>(clients, HttpStatus.OK);
	}

}