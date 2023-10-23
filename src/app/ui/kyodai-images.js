import kyodai1 from "../../public/assets/kyodai-img/1.png";
import kyodai2 from "../../public/assets/kyodai-img/2.png";
import kyodai3 from "../../public/assets/kyodai-img/3.png";
import kyodai4 from "../../public/assets/kyodai-img/4.png";
import kyodai5 from "../../public/assets/kyodai-img/5.png";
import kyodai6 from "../../public/assets/kyodai-img/6.png";
import kyodai7 from "../../public/assets/kyodai-img/7.png";
import kyodai8 from "../../public/assets/kyodai-img/8.png";
import kyodai9 from "../../public/assets/kyodai-img/9.png";
import kyodai10 from "../../public/assets/kyodai-img/10.png";
import kyodai11 from "../../public/assets/kyodai-img/11.png";
import kyodai12 from "../../public/assets/kyodai-img/12.png";
import Image from "next/image";

function kyodaiImages() {
  const images = [
    kyodai1,
    kyodai2,
    kyodai3,
    kyodai4,
    kyodai5,
    kyodai6,
    kyodai7,
    kyodai8,
    kyodai9,
    kyodai10,
    kyodai11,
    kyodai12,
    kyodai6,
    kyodai7,
  ];

  return images.map((img, index) => (
    <Image
      src={img}
      alt={`Cyber Kyodai ${index}`}
      key={`cyberkyodai${index}`}
    />
  ));
}

export default kyodaiImages;
