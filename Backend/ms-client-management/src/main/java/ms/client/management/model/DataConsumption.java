package ms.client.management.model;

public class DataConsumption {
	
	private long totalBytes;
	private long totalBytesInternational;
	private long totalBytesBonus;
	private long usageBytes;
	private long usageBytesInternational;
	
	public DataConsumption() {
		
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