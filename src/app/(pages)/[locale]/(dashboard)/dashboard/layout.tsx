import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>{children}</main>
    </ProtectedRoute>
  );
}
