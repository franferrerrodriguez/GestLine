package ms.client.management.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ms.client.management.caller.Caller;
import ms.client.management.entity.db.Address;
import ms.client.management.entity.db.Client;
import ms.client.management.repository.IClientManagementRepository;
import ms.client.management.service.IClientManagementService;

@Service
public class ClientManagementServiceImpl implements IClientManagementService {

	@Autowired
	private Caller caller;

	@Autowired
	IClientManagementRepository clientRepository;

	@Override
	public List<Client> clientAll() throws InterruptedException {
		return clientRepository.findAll();
	}
	
	@Override
	public Client clientByDocument(String document) throws InterruptedException {
		return clientRepository.findByDocument(document);
	}

}