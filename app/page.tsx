"use client";

export default function Page() {
  const plans = [
    {
      title: "Pack Página Web",
      description: "Diseño básico o tienda web para los comercios de Guiadeo.",
      details: [
        "Sitio web institucional o ecommerce básico",
        "Conexión con redes sociales y WhatsApp",
        "Optimización SEO inicial",
        "Carga de hasta 5 productos o servicios"
      ]
    },
    {
      title: "Pack Redes Sociales",
      description: "Plan para crear o mantener redes sociales de clientes.",
      details: [
        "Diseño de posteos",
        "Publicación mensual",
        "Asesoramiento en estrategia",
        "Informe de métricas"
      ]
    }
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧩 Planes Guiadeo</h1>
      {plans.map((plan, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>{plan.title}</h2>
          <p>{plan.description}</p>
          <ul>
            {plan.details.map((item, i) => (
              <li key={i}>✅ {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}

