import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {title: "Test_1", price: 6, description: 'This is a first product - amazing!'},
  {title: "Test_2", price: 7, description: 'This is a second product - amazing!'},
  {title: "Test_3", price: 8, description: 'This is a third product - amazing!'},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((pro) => {
          return (
            <ProductItem
          key={pro.title}  
          title={pro.title}
          price={pro.price}
          description={pro.description}
        />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
