package ms.client.management.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import ms.client.management.entity.db.Client;

public interface IClientManagementRepository extends Repository<Client, String> {

	public List<Client> findAll();
	
	public Client findByDocument(String document);

}