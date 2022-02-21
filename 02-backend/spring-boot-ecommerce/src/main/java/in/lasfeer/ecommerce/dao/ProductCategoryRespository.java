package in.lasfeer.ecommerce.dao;

import in.lasfeer.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRespository extends JpaRepository<ProductCategory, Long> {
}
