package ms.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ms.contract.caller.Caller;
import ms.contract.entity.db.Contract;
import ms.contract.repository.IContractRepository;
import ms.contract.service.IContractService;

@Service
public class ContractServiceImpl implements IContractService {

	@Autowired
	private Caller caller;

	@Autowired
	IContractRepository consumptionRepository;

	@Autowired
	private Environment environment;

	public Contract consumptionByDocument(String document) throws InterruptedException {

		Thread.sleep(0);
		String port = environment.getProperty("local.server.port");
		if (port.equals("8001")) {
			Thread.sleep(25000);
		}

		Contract client = consumptionRepository.findByDocument(document);

		/*ResponseEntity<List<Address>> response = this.caller.getApi("http://localhost:8000/nif/" + client.getNif(),
				HttpMethod.GET);

		client.setBankAccounts(response.getBody());*/

		return client;
	}

	public List<Contract> consumptionAll() throws InterruptedException {

		List<Contract> consumptions = consumptionRepository.findAll();

		/*for (Client client : clients) {

			ResponseEntity<List<BankAccounts>> response = this.caller
					.getApi("http://localhost:8000/nif/" + client.getNif(), HttpMethod.GET);

			System.out.println(response.getStatusCode());

			client.setBankAccounts(response.getBody());
		}*/

		return consumptions;
	}

}