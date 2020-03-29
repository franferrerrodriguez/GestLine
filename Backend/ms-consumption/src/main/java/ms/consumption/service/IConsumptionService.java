package ms.consumption.service;

import java.util.List;

import ms.consumption.entity.db.Consumption;

public interface IConsumptionService {

	Consumption consumptionByDocument(String document) throws InterruptedException;

	List<Consumption> consumptionAll() throws InterruptedException;

}