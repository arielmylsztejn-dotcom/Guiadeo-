"use client";
import React from "react";
export default function Home() {
  const plans = [
    {
      title: "Pack Página Web",
      description: "Diseño básico o tienda web para los comercios de Guiadeo.",
      details: [
        "Sitio web institucional o ecommerce básico",
        "Conexión con redes sociales y WhatsApp",
        "Optimización SEO inicial",
        "Carga de hasta 5 productos o servicios"
      ],
    },
    {
      title: "Pack Redes Sociales",
      description: "Plan para crear o mantener redes sociales de clientes.",
      details: [
        "Creación de cuentas (Instagram, Facebook, TikTok)",
        "Diseño de imagen de marca y primeros posteos",
        "Opciones de mantenimiento mensual o entrega única",
        "Videos, reels, carruseles y stories con IA"
      ],
    },
    {
      title: "Fotos 360 + Google Maps",
      description: "Fotografía, actualización de perfil de negocio y visibilidad online.",
      details: [
        "Sesión fotográfica 360°",
        "Actualización en Google Business Profile",
        "Revisión de reseñas, horarios y ubicación",
        "Integración con Google Street View"
      ],
    },
    {
      title: "Guiadeo Academy",
      description: "Cursos, biblioteca, herramientas, planillas y más para descargar.",
      details: [
        "Videos paso a paso para emprendedores",
        "Plantillas editables (canva, Excel, WhatsApp, etc)",
        "Acceso por suscripción mensual o pago único",
        "Material descargable y organizado por tema"
      ],
    },
    {
      title: "Noticias y Eventos",
      description: "Contenido de interés general, eventos barriales y secciones nuevas.",
      details: [
        "Blog de noticias de interés local",
        "Calendario de eventos barriales y comunitarios",
        "Notas destacadas de comercios en la guía",
        "Secciones para aumentar permanencia de usuarios"
      ],
    },
    {
      title: "Backlinks externos",
      description: "Conseguir enlaces desde medios locales y públicos relevantes.",
      details: [
        "Notas patrocinadas o colaborativas",
        "Enlaces en medios confiables uruguayos",
        "Generación de autoridad SEO",
        "Mayor posicionamiento de Guiadeo y clientes"
      ],
    },
  ];

  const [active, setActive] = React.useState(null);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Roadmap Guiadeo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition hover:shadow-xl"
            onClick={() => setActive(index === active ? null : index)}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="mb-2 text-gray-600">{plan.description}</p>
            {active === index && (
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {plan.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}