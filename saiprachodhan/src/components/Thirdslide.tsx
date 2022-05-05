import React from "react";
import styles from "../css/thirdslide.module.css";
function Thirdslide() {
  return (
    <div className={`${styles.background}`}>
      <div className="nw:ml-[8vw]">
        <h1 className="pt-[5vh] font-headingbold font-bold text-6xl text-white py-2">
          Pillers Of aiverse
        </h1>
        <br />
        <br />
        <br />
        <div className="cards nw:mr-[8vw] flex justify-between">
          <div
            className="card mt-[20px] mr-[20px] min-h-[350px] mx-4 w-[240px] relative rounded-lg"
            style={{
              background: "#122C48",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(41px)",
              boxShadow: "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
            }}
          >
            <div
              className="transition-all duration-1000 ease-in-out absolute hover:top-[-20px] hover:left-[-20px] min-h-[350px] w-[240px] z-[10] rounded-lg"
              style={{
                background:
                  "linear-gradient(210.96deg, #091E35 0.01%, #142D4D 42.05%, #0B273C 104.81%)",
                boxShadow:
                  "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
                backdropFilter: "blur(20.3526px)",
              }}
            >
              <div className="text-white font-poppins mx-auto text-center text-[14px] invisible p-2">
                Aiverse characters have emerged from a metaverse who will share
                their powers to users. Each characters of aiverse have specific
                power which can be leveraged by users in the form of AI
                applications
              </div>
              <div className="text-white font-poppins  mx-auto text-center text-[12px] p-2 font-extralight tracking-[0.02em]">
                Aiverse characters have emerged from a metaverse who will share
                their powers to users. Each characters of aiverse have specific
                power which can be leveraged by users in the form of AI
                applications
              </div>
            </div>
          </div>
          <div
            className="card min-h-[350px] mb-[20px] mx-4 w-[240px] relative rounded-lg"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(41px)",
              background: "#122C48",
              boxShadow: "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
            }}
          >
            <div
              className="transition-all duration-1000 ease-in-out absolute hover:top-[20px] hover:left-[20px] min-h-[350px] w-[240px] z-[10] rounded-lg"
              style={{
                background:
                  "linear-gradient(210.96deg, #091E35 0.01%, #142D4D 42.05%, #0B273C 104.81%)",
                boxShadow:
                  "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
                backdropFilter: "blur(20.3526px)",
              }}
            >
              <div className="text-white font-poppins mx-auto text-center text-[14px] invisible p-2">
                Use-2-earn- Users can earn AIV tokens as they use our AI models
                . Higher the no. Of requests per day more aiv tokens will be
                awarded to users at the end of the day
              </div>
              <div className="text-white font-poppins  mx-auto text-center text-[12px] p-2 font-extralight tracking-[0.02em]">
                Use-2-earn- Users can earn AIV tokens as they use our AI models
                . Higher the no. Of requests per day more aiv tokens will be
                awarded to users at the end of the day
              </div>
            </div>
          </div>
          <div
            className="card mt-[20px] min-h-[350px] mx-4 w-[240px] relative rounded-lg"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(41px)",
              background: "#122C48",
              boxShadow: "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
            }}
          >
            <div
              className="transition-all duration-1000 ease-in-out absolute hover:top-[-20px] hover:left-[20px] min-h-[350px] w-[240px] z-[10] rounded-lg"
              style={{
                boxShadow:
                  "-23.609px 48.8461px 73.2692px rgba(23, 18, 43, 0.55)",
                background:
                  "linear-gradient(210.96deg, #091E35 0.01%, #142D4D 42.05%, #0B273C 104.81%)",
                backdropFilter: "blur(20.3526px)",
              }}
            >
              <div className="text-white font-poppins mx-auto text-center text-[14px] invisible p-2">
                Aiverse will be providing decentralized data set pools where
                developers can upload their data sets/ predictions and these can
                be access by consumers. Ai verse will also be providing its
                ready to use data sets
              </div>
              <div className="text-white font-poppins  mx-auto text-center text-[12px] p-2 font-extralight tracking-[0.02em]">
                Aiverse will be providing decentralized data set pools where
                developers can upload their data sets/ predictions and these can
                be access by consumers. Ai verse will also be providing its
                ready to use data sets
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Thirdslide;
