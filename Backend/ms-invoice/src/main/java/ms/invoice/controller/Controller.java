package ms.invoice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import ms.invoice.entity.db.InvoiceDocument;
import ms.invoice.repository.IInvoiceRepository;
import ms.invoice.service.IInvoiceService;

@RestController
public class Controller {

	@Autowired
	private Environment environment;

	@Autowired
	private IInvoiceService clientService;

	@Autowired
	private IInvoiceRepository repository;

	private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	@HystrixCommand()
	public ResponseEntity<List<InvoiceDocument>> clientAll() throws InterruptedException {

		String port = environment.getProperty("local.server.port");

		LOGGER.info(String.format("Called endpoint: 'clientAll' | Port: '%s'", port));

		List<InvoiceDocument> invoices = clientService.invoiceAll();

		return new ResponseEntity<List<InvoiceDocument>>(invoices, HttpStatus.OK);
	}

}