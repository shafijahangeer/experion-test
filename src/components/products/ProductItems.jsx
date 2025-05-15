import React from "react";
import Icon from "../Icon";
import Img from "../img/Img";

function ProductItems({ category }) {
    const products = [
        {
            category: "sneakers",
            icon: "logo",
            image: "../assets/images/products/product-2.jpg",
            title: "Puma Black Bun PumaSmashVulc Sneakers",
            subtitle: "Men Crater Puma Sneakers",
            price: "Rs.5467",
            brand: "This is PUMA.",
            description:
                "PUMA has associations with some of the most elite athletes, such as sprint legend Usain Bolt, star striker Antoine Griezmann, Indian Cricket Captain Virat Kohli, fashion icons like Cara Delevingne, Selena Gomez, and many more.",
            rating: 4,
            ratingCount: 115,
            bestSeller: true,
        },
         {
            category: "sport-shoes",
            icon: "logo",
            image: "../assets/images/products/product-2.jpg",
            title: "Adidas neo Men's Vs Set Sneakers",
            subtitle: "Men Crater Adidas Sneakers",
            price: "Rs.4537",
            brand: "This is ADIDAS.",
            description:
                "As one of the world’s leading sports brands, Adidas believes in standing on the same playing field as the fastest athletes on the planet. With a mission of Forever Faster, PUMA shares excitement in Teamsports, innovates Golf, brings style into Running . Adidas has associations with some of the most elite athletes, such as sprint legend Usain Bolt and many more.",
            rating: 4,
            ratingCount: 115,
            bestSeller: true,
        },
        {
            category: "sneakers",
            icon: "logo",
            image: "../assets/images/products/product-2.jpg",
            title: "Adidas neo Men's Vs Set Sneakers",
            subtitle: "Men Crater Adidas Sneakers",
            price: "Rs.4537",
            brand: "This is ADIDAS.",
            description:
                "As one of the world’s leading sports brands, Adidas believes in standing on the same playing field as the fastest athletes on the planet. With a mission of Forever Faster, PUMA shares excitement in Teamsports, innovates Golf, brings style into Running . Adidas has associations with some of the most elite athletes, such as sprint legend Usain Bolt and many more.",
            rating: 4,
            ratingCount: 115,
            bestSeller: true,
        },
        {
            category: "sneakers",
            icon: "logo",
            image: "../assets/images/products/product-3.jpg",
            title: "Puma Men's PumaSmashVulc Sneakers",
            subtitle: "Men Crater Puma Sneakers",
            price: "Rs.5736",
            brand: "This is PUMA.",
            description:
                "PUMA has associations with some of the most elite athletes, such as sprint legend Usain Bolt, star striker Antoine Griezmann, Indian Cricket Captain Virat Kohli, fashion icons like Cara Delevingne, Selena Gomez, and many more.",
            rating: 4,
            ratingCount: 115,
            bestSeller: false,
        },


    ];
    console.log("Category prop:", category);
    console.log("Products categories:", products.map(p => p.category));
const filteredProducts = products.filter(p => p.category === category);
  console.log("Filtered products:", filteredProducts);
    if (filteredProducts.length === 0) {
        return <p>No products found for this category.</p>;
    }

    return (
        <section className="product-items">
            <div className="product-items__wrapper">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-items__wrapper__item">
                        <div className="product-items__wrapper__item__image">
                            <Img src={product.image} alt={`illustration of ${product.title}`} />
                            {product.bestSeller && (
                                <div className="product-items__wrapper__item__best-seller">
                                    Best Seller
                                </div>
                            )}
                        </div>
                        <h3 className="product-items__wrapper__item__title">{product.title}</h3>
                        <h4 className="product-items__wrapper__item__sub-title">{product.subtitle}</h4>
                        <h5 className="product-items__wrapper__item__price">{product.price}</h5>
                        <h6 className="product-items__wrapper__item__desc-title">Description</h6>
                        <p className="product-items__wrapper__item__brand">{product.brand}</p>
                        <p className="product-items__wrapper__item__description">{product.description}</p>

                        <div className="product-items__wrapper__item__rating-box">
                            <div className="product-items__wrapper__item__rating-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} name={i < product.rating ? "star-fill" : "star-no-fill"} />
                                ))}
                            </div>
                            <p className="product-items__wrapper__item__rating">{product.ratingCount} Ratings</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ProductItems;