package ms.invoice.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import ms.invoice.entity.db.Invoice;
import ms.invoice.entity.db.InvoiceDocument;

public interface IInvoiceRepository extends Repository<InvoiceDocument, Long> {

	public InvoiceDocument findById(Long id);

	public List<InvoiceDocument> findAll();

}