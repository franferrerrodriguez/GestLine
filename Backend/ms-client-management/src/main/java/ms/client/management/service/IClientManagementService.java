package ms.client.management.service;

import java.util.List;

import ms.client.management.entity.db.Client;

public interface IClientManagementService {

	Client clientById(Long id) throws InterruptedException;

	List<Client> clientAll() throws InterruptedException;

}