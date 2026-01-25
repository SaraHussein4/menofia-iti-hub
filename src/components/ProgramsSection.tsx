import { Code, Database, Cloud, Smartphone, Brain, Shield } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "تطوير الويب",
    description: "تعلم أحدث تقنيات تطوير مواقع وتطبيقات الويب باستخدام React, Node.js, و المزيد",
  },
  {
    icon: Smartphone,
    title: "تطوير تطبيقات الموبايل",
    description: "بناء تطبيقات iOS و Android باستخدام أحدث الأدوات والتقنيات",
  },
  {
    icon: Database,
    title: "علوم البيانات",
    description: "تحليل البيانات والتعلم الآلي واستخراج رؤى قيمة من البيانات الضخمة",
  },
  {
    icon: Cloud,
    title: "الحوسبة السحابية",
    description: "إتقان خدمات AWS, Azure, و Google Cloud لبناء بنى تحتية قوية",
  },
  {
    icon: Brain,
    title: "الذكاء الاصطناعي",
    description: "تطوير حلول ذكية باستخدام تقنيات الذكاء الاصطناعي والتعلم العميق",
  },
  {
    icon: Shield,
    title: "الأمن السيبراني",
    description: "حماية الأنظمة والشبكات من التهديدات الأمنية والهجمات الإلكترونية",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="section-title mx-auto">البرامج التدريبية</h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            نقدم برامج تدريبية متخصصة تواكب أحدث التقنيات وتلبي احتياجات سوق العمل المحلي والعالمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
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
