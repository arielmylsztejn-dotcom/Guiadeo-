export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body style={{ margin: 0, padding: "1rem", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
