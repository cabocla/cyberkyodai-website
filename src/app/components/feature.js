import PageContent from "./page-content";

function Feature() {
  return (
    <PageContent id="feature">
      <div className=" flex h-full w-full flex-col  sm:h-screen">
        <div className="flex h-[50vh] w-full flex-col justify-evenly lg:flex-row">
          <div className=" flex h-full w-full flex-col items-center justify-center ">
            <h1>On-chain</h1>
            <p>
              All CyberKyodai assets and gameplay mechanics stored and exists
              on-chain.
            </p>

            <p>No IPFS, no APIs, honoring the spirit of decentralization.</p>
          </div>
          <div className=" flex h-full w-full flex-col items-center justify-center ">
            <h1>Omnichain</h1>
            <p>
              Embrace the prestige of Ethereum NFT along with seamless
              scalability of L2 chain.
            </p>
          </div>
        </div>
        <div className="flex h-[50vh] w-full flex-col items-center ">
          <h1>gambar </h1>
        </div>
      </div>
    </PageContent>
  );
}

export default Feature;
