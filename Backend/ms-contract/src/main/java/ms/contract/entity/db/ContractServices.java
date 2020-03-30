package ms.contract.entity.db;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "contractservices")
public class ContractServices {

	@Id
	@JsonIgnore
	@Column(name = "id", updatable = false, nullable = false)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "activation_date")
	private Date activationDate;
	
	@Column(name = "desactivation_date")
	private Date desactivationDate;
	
	@ManyToOne()
	@JsonIgnore
    @JoinColumn(name = "contract_line_id")
	private ContractLine contractLine;
	
	public ContractServices() {
		
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Date getActivationDate() {
		return activationDate;
	}
	
	public void setActivationDate(Date activationDate) {
		this.activationDate = activationDate;
	}
	
	public Date getDesactivationDate() {
		return desactivationDate;
	}
	
	public void setDesactivationDate(Date desactivationDate) {
		this.desactivationDate = desactivationDate;
	}

	public ContractLine getContractLine() {
		return contractLine;
	}

	public void setContractLine(ContractLine contractLine) {
		this.contractLine = contractLine;
	}
	
}