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
@RequestMapping("v1")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

	@Autowired
	private Environment environment;

	@Autowired
	private IAuthenticationService clientService;

	private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);

	@RequestMapping(value = "/checkLogin", method = RequestMethod.POST)
	@HystrixCommand()
	public ResponseEntity<Response<User>> checkLogin(@RequestBody User user) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientById' | Port: '%s'", port));

		User checkUser = clientService.checkLogin(user.getEmail(), user.getPassword());
		
		Response<User> response;
		if(checkUser == null) {
			response = new Response<User>(new ResponseError("Error"));
		}else {
			response = new Response<User>(checkUser);
		}

		return new ResponseEntity<Response<User>>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/document/{document}", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<User> clientByDocument(@PathVariable String document) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientById' | Port: '%s'", port));

		User client = clientService.userByDocument(document);

		return new ResponseEntity<User>(client, HttpStatus.OK);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<List<User>> clientAll() throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientAll' | Port: '%s'", port));

		List<User> clients = clientService.userAll();

		return new ResponseEntity<List<User>>(clients, HttpStatus.OK);
	}

}