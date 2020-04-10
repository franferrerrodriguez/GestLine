package ms.contract.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import ms.authentication.entity.db.User;
import ms.contract.entity.db.Contract;
import ms.contract.response.Response;
import ms.contract.response.ResponseError;
import ms.contract.service.IContractService;

@RestController
@RequestMapping("v1")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

	@Autowired
	private Environment environment;

	@Autowired
	private IContractService contractService;

	private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);
	
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<Response<List<Contract>>> contractAll() throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'contractAll' | Port: '%s'", port));
		
		Response<List<Contract>> response;
		HttpStatus httpStatus;
		try {
			response = new Response<>(contractService.contractAll());
			httpStatus = HttpStatus.OK;
		} catch (Exception e) {
			response = new Response<>(new ResponseError("Error"));
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(response, httpStatus);
		
	}
	
	@RequestMapping(value = "/document/{document}", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<Response<Contract>> contractByDocument(@PathVariable String document) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'contractByDocument' | Port: '%s'", port));
		
		Response<Contract> response;
		HttpStatus httpStatus;
		try {
			Contract contract = contractService.contractByDocument(document);
			
			if(contract != null) {
				response = new Response<>(contract);
				httpStatus = HttpStatus.OK;
			} else {
				response = new Response<>(new ResponseError("Error"));
				httpStatus = HttpStatus.NOT_FOUND;
			}
		} catch (Exception e) {
			response = new Response<>(new ResponseError("Error"));
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(response, httpStatus);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value = "/modifyContracts", method = RequestMethod.POST)
	@HystrixCommand()
	public ResponseEntity<Response<Contract>> modifyContracts(@RequestBody List<Contract> contracts) throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'contractByDocument' | Port: '%s'", port));
		
		Response<Contract> response;
		HttpStatus httpStatus;
		try {
			Contract contract = contractService.contractByDocument("");
			
			if(contract != null) {
				response = new Response<>(contract);
				httpStatus = HttpStatus.OK;
			} else {
				response = new Response<>(new ResponseError("Error"));
				httpStatus = HttpStatus.NOT_FOUND;
			}
		} catch (Exception e) {
			response = new Response<>(new ResponseError("Error"));
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(response, httpStatus);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}