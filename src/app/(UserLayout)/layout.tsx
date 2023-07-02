import { UserHeader } from "@/sections/header/userHeader/UserHeader";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserHeader /> {children}
      </body>
    </html>
  );
}
