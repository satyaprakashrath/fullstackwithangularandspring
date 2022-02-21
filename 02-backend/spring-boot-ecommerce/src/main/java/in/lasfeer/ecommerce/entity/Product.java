package in.lasfeer.ecommerce.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "product")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "sku")
    private String sku;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "unit_price")
    private double unitPrice;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "active")
    private boolean active;
    @Column(name = "units_in_stock")
    private int unitsInStock;
    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;
    @Column(name="last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;
}
