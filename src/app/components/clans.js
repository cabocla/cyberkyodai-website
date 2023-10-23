import Image from "next/image";
import PageContent from "./page-content";
import clanLogos from "../../../public/assets/images/clan-logos.png";

function Clans() {
  return (
    <PageContent id="clans">
      <div className="flex  h-full  flex-col-reverse items-center lg:flex-row">
        <div className="flex flex-col lg:h-[40vw] lg:w-[40vw]">
          <Image src={clanLogos} alt="Cyber Kyodai Clan Logos" />
        </div>
        <div className="mx-10 flex h-full flex-col justify-center lg:w-[50vw]">
          <h1>Clans</h1>
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
