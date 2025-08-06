import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const data = {
  "Servicios": [
    {
      title: "Pack Página Web",
      description: "Diseño de sitio básico o tienda online (ecommerce) para comercios."
    },
    {
      title: "Pack Redes Sociales",
      description: "Alta o rediseño de perfiles + opción de mantenimiento y contenido mensual."
    },
    {
      title: "Pack Fotos 360° + Google",
      description: "Sesión de fotos 360° + alta/actualización en Google Maps y Business."
    },
    {
      title: "Guiadeo Academy",
      description: "Cursos, herramientas, planillas, tutoriales descargables para comerciantes."
    }
  ],
  "Contenido Web": [
    {
      title: "Noticias Locales",
      description: "Sección con noticias de interés general, actualidad comercial, tips, etc."
    },
    {
      title: "Eventos Barriales",
      description: "Agenda de ferias, aperturas, eventos comunitarios y actividades locales."
    },
    {
      title: "Backlinks y SEO",
      description: "Estrategia para conseguir enlaces desde medios externos y portales locales."
    }
  ]
};

export default function GuiadeoRoadmap() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📍 Roadmap Guiadeo</h1>
      <Tabs defaultValue="Servicios" className="w-full">
        <TabsList>
          {Object.keys(data).map((key) => (
            <TabsTrigger key={key} value={key}>{key}</TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(data).map(([key, items]) => (
          <TabsContent key={key} value={key} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {items.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
