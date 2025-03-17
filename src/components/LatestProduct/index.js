import ProductCard from "../ProductCard";


const products = [
    
      {
        id: 2,
        name: "Badala Embroidered Anarkali Set",
        price: "Rs. 27,999.00",
        imageUrl: "https://images.pexels.com/photos/18357980/pexels-photo-18357980/free-photo-of-close-up-of-a-person-holding-an-iphone-in-a-black-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        name: "Beige Embroidered Choli with Skirt & Shrug",
        price: "Rs. 8,999.00",
        imageUrl: "https://images.pexels.com/photos/3921712/pexels-photo-3921712.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 4,
        name: "Elegant Yellow Viscose Crepe Kurti Set",
        price: "Rs. 11,999.00",
        imageUrl: "https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
  {
    id: 5,
    name: "Anarkali with Dupatta set",
    price: "Rs. 7,999.00",
    imageUrl: "https://images.pexels.com/photos/11067245/pexels-photo-11067245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Badala Embroidered Anarkali Set",
    price: "Rs. 27,999.00",
    imageUrl: "https://images.pexels.com/photos/18357980/pexels-photo-18357980/free-photo-of-close-up-of-a-person-holding-an-iphone-in-a-black-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    name: "Beige Embroidered Choli with Skirt & Shrug",
    price: "Rs. 8,999.00",
    imageUrl: "https://images.pexels.com/photos/3921712/pexels-photo-3921712.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Beige Embroidered Choli with Skirt & Shrug",
    price: "Rs. 8,999.00",
    imageUrl: "https://images.pexels.com/photos/3921712/pexels-photo-3921712.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Elegant Yellow Viscose Crepe Kurti Set",
    price: "Rs. 11,999.00",
    imageUrl: "https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Featured</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
