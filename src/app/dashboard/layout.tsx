import UserHeader from "@/sections/header/userHeader/UserHeader";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
