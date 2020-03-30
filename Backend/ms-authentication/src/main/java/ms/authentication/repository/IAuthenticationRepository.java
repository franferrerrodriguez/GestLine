package ms.authentication.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import ms.authentication.entity.db.User;

public interface IAuthenticationRepository extends Repository<User, Long> {

	public User findById(Long id);

	public List<User> findAll();

}