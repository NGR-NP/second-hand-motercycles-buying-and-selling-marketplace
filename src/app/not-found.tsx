"use client";
import Image from "next/image";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="page-not-found-main">
      <section className="page-not-found-section">
        <div className="page-not-found-container">
          <div className="page-not-found-img-wraper">
            <Image
              width={200}
              height={200}
              src="/images/reaction/shock.jpeg"
              className="page-not-found-shockedImage"
              alt="shocked"
            />
            <div className="page-not-found-card">
              <div className="mb-4 page-not-found-closeIcon">
                <button
                  className="flex gap-1 items-center px-3 py-1 text-sm rounded group bg-slate-400 text-slate-50"
                  type="button"
                  onClick={() => router.back()}
                >
                  <IoIosArrowRoundBack className="duration-200 group-hover:-translate-x-1" />{" "}
                  Back
                </button>
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
}
