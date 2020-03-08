package ms.client.management.service;

import java.util.List;

import ms.client.management.entity.db.Client;

public interface IClientService {

	Client clientById(Long id) throws InterruptedException;

	List<Client> clientAll() throws InterruptedException;

}