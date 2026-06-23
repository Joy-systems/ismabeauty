export function App() {
  const name = import.meta.env.VITE_SITE_NAME ?? "Joy Site";
  const description =
    import.meta.env.VITE_SITE_DESCRIPTION ?? "Propulsé par Joy Engine.";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 600 }}>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", margin: 0 }}>{name}</h1>
        <p style={{ marginTop: "1rem", opacity: 0.7, fontSize: "1.125rem" }}>
          {description}
        </p>
        <p style={{ marginTop: "3rem", opacity: 0.4, fontSize: "0.875rem" }}>
          ⚡ Propulsé par <strong>Joy Engine</strong>
        </p>
      </div>
    </main>
  );
}