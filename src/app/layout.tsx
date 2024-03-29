import "./globals.css";
import { Providers } from "@/redux/app/Provider";
import { ToastContainer } from "react-toastify";

import { Inter, Raleway, Bitter, Brygada_1918, Changa } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
});
const paragraph = Brygada_1918({
  subsets: ["latin"],
  variable: "--font-paragraph",
});
const title = Changa({
  subsets: ["latin"],
  variable: "--font-title",
});
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  ogTitle: "kalo vhatvatay",
  title: "Kalo Vhatvatay",
  description:
    "second hand bike, scooter, e-bike buying and selling marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} ${title.variable} ${paragraph.variable} ${bitter.variable}`}
    >
      <body>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
