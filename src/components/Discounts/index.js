import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../Header";

import "./index.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      "https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665654776/LD-C-13_remaej.jpg",
    testName: "ACTH (Adreno Corticotropic Hormone) Test",
    discount: "18%",
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665654766/LD-C-11_zupuyh.jpg",
    testName: "Aspartate aminotransferase (AST) blood test",
    discount: "20%",
  },
  {
    uniqueNo: 3,
    imageUrl:
      "https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665654755/LD-C-1_syizop.jpg",
    testName: "Bronchoscopy and Bronchoalveolar Lavage (BAL)",
    discount: "30%",
  },
  {
    uniqueNo: 4,
    imageUrl:
      "https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665654742/Healthcare-logo-design-free-download-vector-file-Adobe-Illustrator_lrhibh.jpg",
    testName: "Developmental and Behavioral Screening Tests",
    discount: "35%",
  },
  {
    uniqueNo: 5,
    imageUrl:
      "https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665654742/Healthcare-logo-design-free-download-vector-file-Adobe-Illustrator_lrhibh.jpg",
    testName: "Electromyography (EMG) and Nerve Conduction Studies",
    discount: "15%",
  },
];

const Discounts = () => {
  const setting = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="discount-div">
      <Slider {...setting}>
        {initialUserDetailsList.map((item) => (
          <div className="dis-item-div" key={item.uniqueNo}>
            <div className="discount-item">
              <p className="test-name">{item.testName}</p>
              <div className="hospital-logo-div">
                <img
                  src={item.imageUrl}
                  alt={item.testName}
                  className="hospital-logo"
                />
                <p className="discount-num">{item.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Discounts;
