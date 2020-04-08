package ms.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ms.contract.entity.db.Contract;
import ms.contract.repository.IContractRepository;
import ms.contract.service.IContractService;

@Service
public class ContractServiceImpl implements IContractService {

	@Autowired
	IContractRepository contractRepository;

	@Override
	public List<Contract> contractAll() throws InterruptedException {
		return contractRepository.findAll();
	}
	
	@Override
	public Contract contractByDocument(String document) throws InterruptedException {
		return contractRepository.findByDocument(document);
	}

}