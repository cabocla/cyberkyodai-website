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
  // let vid = document.getElementById("policeLineVideo");
  // vid.playbackRate = 0.5;
  return (
    <PageContent id="about">
      <div className="flex h-full w-full flex-col    lg:flex-row">
        {/* <div className="absolute z-0 flex h-full w-full blur-md">
          <Image
            src={kazukichoImage}
            alt="Kazukicho"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div> */}
        <div className=" z-10 h-full w-full justify-end ">
          <div className=" flex h-2/6 items-center justify-center  px-5 lg:h-1/4 ">
            <h2 className=" text-2xl sm:text-4xl">Welcome to Neo Tokyo</h2>
          </div>
          <div className="lg:h-1/8 absolute flex  h-10 w-full ">
            <video
              id="policeLineVideo"
              src={require("../../../public/assets/videos/police line animation.mp4")}
              autoPlay
              loop
              muted
              style={{ objectFit: "cover" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="z-10 mx-5 flex h-3/4 flex-col justify-center  lg:px-28">
            <p className=" text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Decades after oppression from the government, new era dawns as the
              Kyodais resurges to seize control over the enigmatic Neo Tokyo
              underworld.
              <br />
              <br />
              Reach supremacy on an eco-system built on the cornerstone of
              blockchain technology through competitive and strategic gameplay.
              {/* All assets and gameplay mechanics stored and exists on-chain. No
              IPFS, no APIs, honoring the spirit of decentralization. */}
              <br />
              <br />
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
