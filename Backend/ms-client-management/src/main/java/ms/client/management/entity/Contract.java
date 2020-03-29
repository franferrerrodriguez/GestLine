package ms.client.management.entity;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class Contract {
	
	private long id;
	private String phone;
	private String contractType;
	private String iccid;
	private String pin;
	private String puk;
	private String tecnology;
	private String partnerPoints;
	private LineConsumption lineConsumption;
	private DataConsumption dataConsumption;
	private List<ContractServices> contractServices;
	
	public Contract() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public String getIccid() {
		return iccid;
	}

	public void setIccid(String iccid) {
		this.iccid = iccid;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getPuk() {
		return puk;
	}

	public void setPuk(String puk) {
		this.puk = puk;
	}

	public String getTecnology() {
		return tecnology;
	}

	public void setTecnology(String tecnology) {
		this.tecnology = tecnology;
	}

	public String getPartnerPoints() {
		return partnerPoints;
	}

	public void setPartnerPoints(String partnerPoints) {
		this.partnerPoints = partnerPoints;
	}

	public LineConsumption getLineConsumption() {
		return lineConsumption;
	}

	public void setLineConsumption(LineConsumption lineConsumption) {
		this.lineConsumption = lineConsumption;
	}

	public DataConsumption getDataConsumption() {
		return dataConsumption;
	}

	public void setDataConsumption(DataConsumption dataConsumption) {
		this.dataConsumption = dataConsumption;
	}

	public List<ContractServices> getContractServices() {
		return contractServices;
	}

	public void setContractServices(List<ContractServices> contractServices) {
		this.contractServices = contractServices;
	}

}