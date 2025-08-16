import {
  authItems,
  logo,
  navItems,
} from "@/app/main/clinicAuth/constants/navData";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function clinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100 ">
      <Navbar navItems={navItems} authItems={authItems} logo={logo} />
      <main className="flex justify-center my-4">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
