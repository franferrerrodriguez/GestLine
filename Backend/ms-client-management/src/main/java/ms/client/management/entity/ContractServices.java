package ms.client.management.entity;

import java.util.Date;

public class ContractServices {

	private long id;
	private String name;
	private String description;
	private Date activationDate;
	private Date desactivationDate;
	
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
	
}