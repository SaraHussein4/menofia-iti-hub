import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPreview = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const features = [
    t("about.feature1"),
    t("about.feature2"),
    t("about.feature3"),
    t("about.feature4"),
    t("about.feature5"),
    t("about.feature6"),
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title mb-6">{t("about.title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 mt-8">
              {t("about.desc1")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("about.desc2")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t("about.readMore")}
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <p className="text-muted-foreground">{t("about.months")}</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">24</div>
                  <p className="text-muted-foreground">{t("about.support")}</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">{t("about.free")}</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">+50</div>
                  <p className="text-muted-foreground">{t("about.companies")}</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 iti-gradient rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
