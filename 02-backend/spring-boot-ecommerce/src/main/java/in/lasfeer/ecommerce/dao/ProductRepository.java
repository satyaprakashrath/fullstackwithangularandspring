package in.lasfeer.ecommerce.dao;

import in.lasfeer.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
