package ms.client.management.service;

import java.util.List;

import ms.client.management.entity.db.Client;

public interface IClientManagementService {

	List<Client> clientAll() throws InterruptedException;
	
	Client clientByDocument(String document) throws InterruptedException;

}