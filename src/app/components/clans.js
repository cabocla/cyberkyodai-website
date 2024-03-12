import Image from "next/image";
import PageContent from "./page-content";
import clanLogos from "../../../public/assets/images/CLAN MAP.jpg";

function Clans() {
  return (
    <PageContent id="clans">
      <div className="flex  h-full  flex-col-reverse items-center lg:flex-row">
        <div className="flex flex-col items-center justify-center  lg:h-[40vw] lg:w-[40vw]">
          <Image src={clanLogos} alt="Cyber Kyodai Clan Logos" />
        </div>
        <div className="mx-10 flex h-full flex-col justify-end px-10 pb-10 lg:w-[50vw] lg:justify-center lg:px-20">
          <h2 className="text-5xl">Clans</h2>
          <p>
            Within the depths of Neo Tokyo underbelly, intricate power struggle
            takes place between the big three for dominance against each other.
            Only you Kyodais have what it takes to bring your respective clan
            into power supremacy over the underworld.
          </p>
        </div>
      </div>
    </PageContent>
  );
}

export default Clans;
