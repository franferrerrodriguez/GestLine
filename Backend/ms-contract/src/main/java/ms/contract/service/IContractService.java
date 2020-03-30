package ms.contract.service;

import java.util.List;

import ms.contract.entity.db.Contract;

public interface IContractService {

	Contract consumptionByDocument(String document) throws InterruptedException;

	List<Contract> consumptionAll() throws InterruptedException;

}