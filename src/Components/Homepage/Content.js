import React, { useState } from "react";
import ios from "../Assets/Images/ios.svg";
import web from "../Assets/Images/web.svg";
import android from "../Assets/Images/android.svg";
import brochure from "../Assets/Images/brochure.svg";
import { Link } from "react-router-dom";
import globe from "../Assets/Images/globe.svg";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import brochurePdf from "../Assets/Pdf/Df-OS Lighthouse.pdf";
import "../Assets/CSS/PdfBooklet.css";
import close from "../Assets/Images/close.svg";
import download from "../Assets/Images/download.svg";

const Content = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Function to open the brochure PDF
  const openPdfModal = () => {
    setSelectedPdf(brochurePdf);
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="mt-[35px] mx-[10px] md:mx-[20px]">
      <div className="hidden md:block text-white text-[35px] text-right font-prostoOne">
        Digital Factory Operating System
      </div>
      <div className="hidden md:block text-[#969696] text-[24px] text-right font-poppins mt-[20px]">
        Appify shop floor processes on a single platform
      </div>
      <div className="block md:hidden text-white text-[16px] text-center font-prostoOne">
        Digital Factory Operating System
      </div>
      <div className="block md:hidden text-[#969696] text-[12px] text-center font-poppins mt-[20px]">
        Appify shop floor processes on a single platform
      </div>
      <div className="flex justify-between md:justify-end mt-[20px]">
        <Link to="https://apps.apple.com/us/app/techfiles/id1458479861">
          <img
            src={ios}
            alt=""
            className="w-[90px] md:w-[97px] h-[47px] md:h-[57px]"
          />
        </Link>
        <Link to="https://dfos.co/app/login">
          <img
            src={web}
            alt=""
            className="ml-0 md:ml-[20px] w-[90px] md:w-[97px] h-[47px] md:h-[57px]"
          />
        </Link>
        <Link to="https://play.google.com/store/search?q=DFOS&c=apps">
          <img
            src={android}
            alt=""
            className="ml-0 md:ml-[20px] w-[90px] md:w-[97px] h-[47px] md:h-[57px]"
          />
        </Link>
        <div onClick={() => openPdfModal("brochure.pdf")}>
          <img
            src={brochure}
            alt=""
            className="ml-0 md:ml-[20px] w-[90px] md:w-[97px] h-[47px] md:h-[57px] cursor-pointer"
          />
        </div>
      </div>
      <img src={globe} alt="" className="absolute left-0 bottom-0" />

      {/* PDF Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-[5px] md:p-[20px] w-[95%] md:w-3/4 lg:w-2/3 xl:w-[70%] h-[75%] md:h-[85%] overflow-auto rounded-lg relative">
            <button
              className="absolute top-2 right-2 z-[100] text-black text-lg"
              onClick={closePdfModal}
            >
              <img src={close} alt="Close" className="w-[30px] h-[30px]" />
            </button>
            <a
              href={brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 z-[100] text-black text-lg"
            >
              <img
                src={download}
                alt="Download"
                className="w-[40px] h-[40px]"
              />
            </a>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={selectedPdf} />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
