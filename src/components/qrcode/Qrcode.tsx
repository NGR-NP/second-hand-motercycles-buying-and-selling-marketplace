"use client";
import { useCallback, useEffect, useState } from "react";
import QRCode from "qrcode";
import { useRef } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Qrcode = () => {
  const [value, setValue] = useState<any>();

  const [qrsrc, setQrSrc] = useState<any>();
  const path = useSearchParams();
  let contact = path.get("contact");
  let garageName = path.get("grageName");
  const fetchGarage = useCallback(() => {
    setValue(
      `http://192.168.1.96:3000/sell-used-bike/?garageName=${path.get(
        "garageName"
      )}&contact=${path.get("contact")}&location=${path.get(
        "location"
      )}&city=${path.get("city")}`
    );
  }, []);

  const generateQrcode = () => {
    // if(contact ||  )
    QRCode.toDataURL(value).then(setQrSrc);
  };

  useEffect(() => {
    fetchGarage();
  }, []);

  return (
    <div className="App">
      <center>
        Garage Name : {path.get("garageName")} <br />
        Contact : {path.get("contact")} <br />
        Location : {path.get("location")} <br />
        City : {path.get("city")}
        <br />
        {qrsrc ? (
          <div>
            <Image
              width={2000}
              height={2000}
              className="w-96 h-96"
              src={qrsrc}
              alt="QR"
            />
            <a href={qrsrc} download>
              Download{" "}
            </a>
          </div>
        ) : (
          <button type="button" className="border p-2" onClick={generateQrcode}>
            Generate
          </button>
        )}
        <div></div>
      </center>
    </div>
  );
};

export default Qrcode;
