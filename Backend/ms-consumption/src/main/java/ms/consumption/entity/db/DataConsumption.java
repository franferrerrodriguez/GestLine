package ms.consumption.entity.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "dataconsumption")
public class DataConsumption {
	
	@Id
	@JsonIgnore
	@Column(name = "id", updatable = false, nullable = false)
	private String id;
	
	@Column(name = "total_bytes")
	private long totalBytes;
	
	@Column(name = "total_bytes_international")
	private long totalBytesInternational;
	
	@Column(name = "total_bytes_bonus")
	private long totalBytesBonus;
	
	@Column(name = "usage_bytes")
	private long usageBytes;
	
	@Column(name = "usage_bytes_international")
	private long usageBytesInternational;
	
	public DataConsumption() {
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public long getTotalBytes() {
		return totalBytes;
	}
	
	public void setTotalBytes(long totalBytes) {
		this.totalBytes = totalBytes;
	}
	
	public long getTotalBytesInternational() {
		return totalBytesInternational;
	}
	
	public void setTotalBytesInternational(long totalBytesInternational) {
		this.totalBytesInternational = totalBytesInternational;
	}
	
	public long getTotalBytesBonus() {
		return totalBytesBonus;
	}
	
	public void setTotalBytesBonus(long totalBytesBonus) {
		this.totalBytesBonus = totalBytesBonus;
	}
	
	public long getUsageBytes() {
		return usageBytes;
	}
	
	public void setUsageBytes(long usageBytes) {
		this.usageBytes = usageBytes;
	}
	
	public long getUsageBytesInternational() {
		return usageBytesInternational;
	}
	
	public void setUsageBytesInternational(long usageBytesInternational) {
		this.usageBytesInternational = usageBytesInternational;
	}
	
}