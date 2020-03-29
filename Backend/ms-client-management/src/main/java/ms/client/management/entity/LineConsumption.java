package ms.client.management.entity;

public class LineConsumption {
	
	private long totalMinuts;
	private long totalMinutsInternational;
	private long usageMinuts;
	private long usageMinutsInternational;
	private Integer totalSms;
	private Integer usageSms;
	
	public LineConsumption() {
		
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