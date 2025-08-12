export default function clinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>Clinic Layout</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
