import CarouselTest from "../ui/carousel-test";
import PageContent from "./page-content";
import kyodai1 from "../../../public/assets/kyodai-img/1.png";
import kyodai2 from "../../../public/assets/kyodai-img/2.png";
import kyodai3 from "../../../public/assets/kyodai-img/3.png";
import kyodai4 from "../../../public/assets/kyodai-img/4.png";
import kyodai5 from "../../../public/assets/kyodai-img/5.png";
import kyodai6 from "../../../public/assets/kyodai-img/6.png";
import kyodai7 from "../../../public/assets/kyodai-img/7.png";
import kyodai8 from "../../../public/assets/kyodai-img/8.png";
import kyodai9 from "../../../public/assets/kyodai-img/9.png";
import kyodai10 from "../../../public/assets/kyodai-img/10.png";
import kyodai11 from "../../../public/assets/kyodai-img/11.png";
import kyodai12 from "../../../public/assets/kyodai-img/12.png";

function Introduction() {
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
    kyodai7,
    kyodai6,
    kyodai5,
    kyodai3,
    kyodai2,
    kyodai1,
    kyodai9,
    kyodai10,
    kyodai11,
  ];
  return (
    <PageContent id="about">
      <div className="flex h-full w-full flex-col   bg-orange-500 lg:flex-row      ">
        <div className=" h-full w-full justify-end bg-lime-200">
          <div className="flex items-center justify-center bg-purple-200 lg:h-1/4 ">
            <h1>Welcome to Neo Tokyo Underbelly</h1>
          </div>
          <div className="lg:h-1/8 absolute  flex w-full bg-yellow-100">
            <p>police line</p>
          </div>
          <div className="mx-5 mt-10 flex h-1/2 flex-col justify-center bg-white">
            <p>
              Decades after oppression from the government, new era dawns as the
              Kyodais resurges to seize control over the enigmatic Neo Tokyo
              underworld.
            </p>
            <br />
            <p>
              Reach supremacy on an eco-system built on the cornerstone of
              blockchain technology through competitive and strategic gameplay.
              All assets and gameplay mechanics stored and exists on-chain. No
              IPFS, no APIs, honoring the spirit of decentralization.
            </p>
            <br />

            <p>
              Fulfill your duties and master the path of Gokudo. Kyodais train,
              work, fight, and recruit underlings to grow the clans influence
              over Neo Tokyo underworld.
            </p>
          </div>
        </div>
        <div className="z-10 flex w-full justify-center   lg:w-3/4 ">
          {/* <Carousel /> */}
          <CarouselTest images={images} />
        </div>
      </div>
    </PageContent>
  );
}

export default Introduction;
