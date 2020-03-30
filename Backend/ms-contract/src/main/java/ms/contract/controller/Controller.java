package ms.contract.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import ms.contract.entity.db.Contract;
import ms.contract.repository.IContractRepository;
import ms.contract.service.IContractService;

@RestController
public class Controller {

	@Autowired
	private Environment environment;

	@Autowired
	private IContractService clientService;

	@Autowired
	private IContractRepository repository;

	private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);


	@RequestMapping(value = "/all", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<List<Contract>> clientAll() throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientAll' | Port: '%s'", port));

		List<Contract> clients = clientService.consumptionAll();

		return new ResponseEntity<List<Contract>>(clients, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/document/{document}", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<Contract> clientById(@PathVariable String document) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientById' | Port: '%s'", port));

		Contract consumption = clientService.consumptionByDocument(document);

		return new ResponseEntity<Contract>(consumption, HttpStatus.OK);
	}

}