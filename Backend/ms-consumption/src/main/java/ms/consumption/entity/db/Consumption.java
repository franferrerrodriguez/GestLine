package ms.consumption.entity.db;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "consumption")
public class Consumption {
	
	@Id
	@Column(name = "document", updatable = false, nullable = false)
	private String document;
	
	@OneToMany(mappedBy="consumption", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List<Contract> contracts;
	
	public Consumption() {

	}
	
	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public List<Contract> getContracts() {
		return contracts;
	}

	public void setContracts(List<Contract> contracts) {
		this.contracts = contracts;
	}

}