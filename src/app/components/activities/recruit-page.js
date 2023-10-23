import PageContent from "../page-content";
import shatei1 from "../../../../public/assets/shatei-img/1.png";
import shatei2 from "../../../../public/assets/shatei-img/2.png";
import shatei3 from "../../../../public/assets/shatei-img/3.png";
import shatei4 from "../../../../public/assets/shatei-img/4.png";
import shatei5 from "../../../../public/assets/shatei-img/5.png";
import shatei6 from "../../../../public/assets/shatei-img/6.png";
import shatei7 from "../../../../public/assets/shatei-img/7.png";
import shatei8 from "../../../../public/assets/shatei-img/8.png";
import shatei9 from "../../../../public/assets/shatei-img/9.png";
import shatei10 from "../../../../public/assets/shatei-img/10.png";
import shatei11 from "../../../../public/assets/shatei-img/11.png";
import shatei12 from "../../../../public/assets/shatei-img/12.png";
import shatei13 from "../../../../public/assets/shatei-img/13.png";
import shatei14 from "../../../../public/assets/shatei-img/14.png";
import shatei15 from "../../../../public/assets/shatei-img/15.png";
import shatei16 from "../../../../public/assets/shatei-img/16.png";
import shatei17 from "../../../../public/assets/shatei-img/17.png";
import shatei18 from "../../../../public/assets/shatei-img/18.png";
import shatei19 from "../../../../public/assets/shatei-img/19.png";
import shatei20 from "../../../../public/assets/shatei-img/20.png";
import shatei21 from "../../../../public/assets/shatei-img/21.png";
import CarouselTest from "../../ui/carousel-test";
import CyberButton from "../../ui/cyber-button";

function RecruitPage() {
  const images = [
    shatei1,
    shatei8,
    shatei15,
    shatei2,
    shatei9,
    shatei16,
    shatei3,
    shatei17,
    shatei10,
    shatei18,
    shatei4,
    shatei11,
    shatei12,
    shatei5,
    shatei19,
    shatei6,
    shatei13,
    shatei20,
    shatei21,
    shatei7,
    shatei14,
  ];

  return (
    <PageContent id="recruit">
      <div className=" flex h-full w-full flex-col items-center bg-gray-200 lg:flex-row-reverse">
        <div className="flex h-full w-full flex-col bg-green-200">
          <div className="m-10 bg-orange-100">
            <h1>Recruit</h1>
          </div>
          <div className="m-10 flex h-1/2  flex-col bg-red-300">
            <p>
              Grow the family. Recruit more Kyodai & Shatei as your underlings.
            </p>
            <br />
            <p>
              Offer the pinkies to Oyabun to show their determination to the
              clan.
            </p>
            <br />
            <p>All Kyodai and Shatei are playable in CyberKyodai ecosystem.</p>
            <br />
            <p>Learn more:</p>
            <div className="m-1">
              <CyberButton title="Litepaper" />
            </div>
          </div>
        </div>
        {/* <CyberFrame reverse={true} /> */}
        <div className="z-10 my-10 flex w-full justify-center  lg:w-3/4 ">
          <CarouselTest images={images} />
        </div>
      </div>
    </PageContent>
  );
}

export default RecruitPage;
