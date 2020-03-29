package ms.consumption.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ms.consumption.caller.Caller;
import ms.consumption.entity.db.Consumption;
import ms.consumption.repository.IConsumptionRepository;
import ms.consumption.service.IConsumptionService;

@Service
public class ConsumptionServiceImpl implements IConsumptionService {

	@Autowired
	private Caller caller;

	@Autowired
	IConsumptionRepository consumptionRepository;

	@Autowired
	private Environment environment;

	public Consumption consumptionByDocument(String document) throws InterruptedException {

		Thread.sleep(0);
		String port = environment.getProperty("local.server.port");
		if (port.equals("8001")) {
			Thread.sleep(25000);
		}

		Consumption client = consumptionRepository.findByDocument(document);

		/*ResponseEntity<List<Address>> response = this.caller.getApi("http://localhost:8000/nif/" + client.getNif(),
				HttpMethod.GET);

		client.setBankAccounts(response.getBody());*/

		return client;
	}

	public List<Consumption> consumptionAll() throws InterruptedException {

		List<Consumption> consumptions = consumptionRepository.findAll();

		/*for (Client client : clients) {

			ResponseEntity<List<BankAccounts>> response = this.caller
					.getApi("http://localhost:8000/nif/" + client.getNif(), HttpMethod.GET);

			System.out.println(response.getStatusCode());

			client.setBankAccounts(response.getBody());
		}*/

		return consumptions;
	}

}