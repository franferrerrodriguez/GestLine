package ms.invoice.entity.db;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "invoicedocument")
public class InvoiceDocument {
	
	@Id
	@Column(name = "document", updatable = false, nullable = false)
	private String document;
	
	@OneToMany(mappedBy="document", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List<Invoice> invoices;
	
	public InvoiceDocument() {

	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public List<Invoice> getInvoices() {
		return invoices;
	}

	public void setInvoices(List<Invoice> invoices) {
		this.invoices = invoices;
	}

}