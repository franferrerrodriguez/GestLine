package ms.invoice.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ms.invoice.caller.Caller;
import ms.invoice.entity.db.Invoice;
import ms.invoice.entity.db.InvoiceDocument;
import ms.invoice.repository.IInvoiceRepository;
import ms.invoice.service.IInvoiceService;

@Service
public class InvoiceServiceImpl implements IInvoiceService {

	@Autowired
	private Caller caller;

	@Autowired
	IInvoiceRepository clientRepository;

	@Autowired
	private Environment environment;

	public List<InvoiceDocument> invoiceAll() throws InterruptedException {

		List<InvoiceDocument> invoices = clientRepository.findAll();

		for (InvoiceDocument invoice : invoices) {
//			ResponseEntity<List<BankAccounts>> response = this.caller
//					.getApi("http://localhost:8000/nif/" + client.getNif(), HttpMethod.GET);
//
//			System.out.println(response.getStatusCode());
		}

		return invoices;
	}

}