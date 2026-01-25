import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Building2, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: 500, suffix: "+", label: t("stats.trainees") },
    { icon: GraduationCap, value: 95, suffix: "%", label: t("stats.employment") },
    { icon: Building2, value: 50, suffix: "+", label: t("stats.partners") },
    { icon: Award, value: 15, suffix: "+", label: t("stats.experience") },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 50;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 iti-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
