import { Code, Database, Cloud, Smartphone, Brain, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProgramsSection = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Code,
      title: t("programs.web"),
      description: t("programs.web.desc"),
    },
    {
      icon: Smartphone,
      title: t("programs.mobile"),
      description: t("programs.mobile.desc"),
    },
    {
      icon: Database,
      title: t("programs.data"),
      description: t("programs.data.desc"),
    },
    {
      icon: Cloud,
      title: t("programs.cloud"),
      description: t("programs.cloud.desc"),
    },
    {
      icon: Brain,
      title: t("programs.ai"),
      description: t("programs.ai.desc"),
    },
    {
      icon: Shield,
      title: t("programs.security"),
      description: t("programs.security.desc"),
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">{t("programs.title")}</h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            {t("programs.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md card-hover border border-border group"
            >
              <div className="w-14 h-14 rounded-lg iti-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <program.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
