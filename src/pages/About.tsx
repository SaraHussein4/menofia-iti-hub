import Layout from "@/components/Layout";
import { Target, Eye, Award, Users, BookOpen, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t("aboutPage.value1"),
      description: t("aboutPage.value1Desc"),
    },
    {
      icon: Users,
      title: t("aboutPage.value2"),
      description: t("aboutPage.value2Desc"),
    },
    {
      icon: BookOpen,
      title: t("aboutPage.value3"),
      description: t("aboutPage.value3Desc"),
    },
    {
      icon: Briefcase,
      title: t("aboutPage.value4"),
      description: t("aboutPage.value4Desc"),
    },
  ];

  const timeline = [
    { year: t("aboutPage.year1"), title: t("aboutPage.year1Title"), desc: t("aboutPage.year1Desc") },
    { year: t("aboutPage.year2"), title: t("aboutPage.year2Title"), desc: t("aboutPage.year2Desc") },
    { year: t("aboutPage.year3"), title: t("aboutPage.year3Title"), desc: t("aboutPage.year3Desc") },
    { year: t("aboutPage.year4"), title: t("aboutPage.year4Title"), desc: t("aboutPage.year4Desc") },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="iti-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("aboutPage.title")}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t("aboutPage.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="section-title mb-8">{t("aboutPage.sectionTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 mt-10">
                {t("aboutPage.p1")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t("aboutPage.p2")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                {t("aboutPage.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 iti-gradient rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{t("aboutPage.vision")}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("aboutPage.visionText")}
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 iti-gradient rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{t("aboutPage.mission")}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("aboutPage.missionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t("aboutPage.values")}</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              {t("aboutPage.valuesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md card-hover border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full iti-gradient flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("aboutPage.timeline")}</h2>
            <p className="text-white/80 text-lg">{t("aboutPage.timelineDesc")}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.year}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
