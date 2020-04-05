package ms.invoice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import ms.invoice.entity.db.InvoiceDocument;
import ms.invoice.response.Response;
import ms.invoice.response.ResponseError;
import ms.invoice.service.IInvoiceService;

@RestController
@RequestMapping("v1")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

	@Autowired
	private Environment environment;

	@Autowired
	private IInvoiceService invoiceService;

	private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<Response<List<InvoiceDocument>>> invoiceAll() throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'invoiceAll' | Port: '%s'", port));
		
		Response<List<InvoiceDocument>> response;
		HttpStatus httpStatus;
		try {
			response = new Response<>(invoiceService.invoiceAll());
			httpStatus = HttpStatus.OK;
		} catch (Exception e) {
			response = new Response<>(new ResponseError("Error"));
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(response, httpStatus);
		
	}

}