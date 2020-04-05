package ms.invoice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ms.invoice.entity.db.InvoiceDocument;
import ms.invoice.repository.IInvoiceRepository;
import ms.invoice.service.IInvoiceService;

@Service
public class InvoiceServiceImpl implements IInvoiceService {

	@Autowired
	IInvoiceRepository invoiceRepository;

	public List<InvoiceDocument> invoiceAll() throws InterruptedException {
		return invoiceRepository.findAll();
	}

}