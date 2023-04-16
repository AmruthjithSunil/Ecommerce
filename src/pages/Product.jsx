import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    image2:
      "https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg",
    image3:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Color_circle_%28hue-sat%29.png/310px-Color_circle_%28hue-sat%29.png",
    reviews: ["Colors is good", "love it"],
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    image2:
      "https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg",
    image3:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Color_circle_%28hue-sat%29.png/310px-Color_circle_%28hue-sat%29.png",
    reviews: ["Black and white Colors is good", "love it"],
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    image2:
      "https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg",
    image3:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Color_circle_%28hue-sat%29.png/310px-Color_circle_%28hue-sat%29.png",
    reviews: ["Yellow and Black Colors is good", "love it"],
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    image2:
      "https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg",
    image3:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Color_circle_%28hue-sat%29.png/310px-Color_circle_%28hue-sat%29.png",
    reviews: ["Blue Colors is good", "love it"],
  },
];

export default function Product() {
  const { productId } = useParams();

  const product = productsArr.find((el) => el.title === productId);

  return (
    <>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={product.imageUrl}
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={product.image2}
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={product.image3}
      />
      <p>{product.reviews[0]}</p>
      <p>{product.reviews[1]}</p>
    </>
  );
}
