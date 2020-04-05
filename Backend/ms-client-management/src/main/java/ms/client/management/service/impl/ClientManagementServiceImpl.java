package ms.client.management.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ms.client.management.entity.db.Client;
import ms.client.management.repository.IClientManagementRepository;
import ms.client.management.service.IClientManagementService;

@Service
public class ClientManagementServiceImpl implements IClientManagementService {

	@Autowired
	IClientManagementRepository clientManagementRepository;

	@Override
	public List<Client> clientAll() throws InterruptedException {
		return clientManagementRepository.findAll();
	}
	
	@Override
	public Client clientByDocument(String document) throws InterruptedException {
		return clientManagementRepository.findByDocument(document);
	}

}