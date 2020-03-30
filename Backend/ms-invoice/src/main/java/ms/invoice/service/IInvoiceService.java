package ms.invoice.service;

import java.util.List;

import ms.invoice.entity.db.Invoice;
import ms.invoice.entity.db.InvoiceDocument;

public interface IInvoiceService {

	List<InvoiceDocument> invoiceAll() throws InterruptedException;

}