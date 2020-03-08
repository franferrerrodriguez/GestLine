package ms.client.management.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import ms.client.management.entity.db.Client;

public interface IClientRepository extends Repository<Client, Long> {

	public Client findById(Long id);

	public List<Client> findAll();

}