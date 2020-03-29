package ms.consumption.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import ms.consumption.entity.db.Consumption;

public interface IConsumptionRepository extends Repository<Consumption, String> {

	public Consumption findByDocument(String document);

	public List<Consumption> findAll();

}