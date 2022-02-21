package in.lasfeer.ecommerce.dao;

import in.lasfeer.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRespository extends JpaRepository<ProductCategory, Long> {
}
