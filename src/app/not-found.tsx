import Link from "next/link";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
const NotFound = () => {
  return (
    <main className="page-not-found-main">
      <section className="page-not-found-section">
        <div className="page-not-found-container">
          <div className="page-not-found-img-wraper">
            <img
              src="/images/reaction/shock.jpeg"
              className="page-not-found-shockedImage"
              alt="shocked"
            />
            <div className="page-not-found-card">
              <div className="page-not-found-closeIcon">
            
                <Link href="/">
                  <RiCloseLine
                    className="closeIcon"
                    style={{
                      fontWeight: "900",
                      background: "#c9c7c7",
                      padding: "2px 3px",
                      borderRadius: "50%",
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "white",
                    }}
                  />
                </Link>
              </div>
              <div className="page-not-found-text-1">404</div>
              <div className="page-not-found-text-2">This page is</div>
              <div className="page-not-found-text-3">not available</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
