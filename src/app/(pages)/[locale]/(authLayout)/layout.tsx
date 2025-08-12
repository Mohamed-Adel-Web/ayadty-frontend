export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>Authentication Layout</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
