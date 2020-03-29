package ms.consumption.entity.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "lineconsumption")
public class LineConsumption {
	
	@Id
	@JsonIgnore
	@Column(name = "id", updatable = false, nullable = false)
	private String id;
	
	@Column(name = "total_minuts")
	private long totalMinuts;
	
	@Column(name = "total_minuts_international")
	private long totalMinutsInternational;
	
	@Column(name = "usage_minuts")
	private long usageMinuts;
	
	@Column(name = "usage_minuts_international")
	private long usageMinutsInternational;
	
	@Column(name = "total_sms")
	private Integer totalSms;
	
	@Column(name = "usage_sms")
	private Integer usageSms;
	
	public LineConsumption() {
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public long getTotalMinuts() {
		return totalMinuts;
	}
	
	public void setTotalMinuts(long totalMinuts) {
		this.totalMinuts = totalMinuts;
	}
	
	public long getTotalMinutsInternational() {
		return totalMinutsInternational;
	}
	
	public void setTotalMinutsInternational(long totalMinutsInternational) {
		this.totalMinutsInternational = totalMinutsInternational;
	}
	
	public long getUsageMinuts() {
		return usageMinuts;
	}
	
	public void setUsageMinuts(long usageMinuts) {
		this.usageMinuts = usageMinuts;
	}
	
	public long getUsageMinutsInternational() {
		return usageMinutsInternational;
	}
	
	public void setUsageMinutsInternational(long usageMinutsInternational) {
		this.usageMinutsInternational = usageMinutsInternational;
	}
	
	public Integer getTotalSms() {
		return totalSms;
	}
	
	public void setTotalSms(Integer totalSms) {
		this.totalSms = totalSms;
	}
	
	public Integer getUsageSms() {
		return usageSms;
	}
	
	public void setUsageSms(Integer usageSms) {
		this.usageSms = usageSms;
	}
	
}