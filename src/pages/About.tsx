import Layout from "@/components/Layout";
import { Target, Eye, Award, Users, BookOpen, Briefcase } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "التميز",
    description: "نسعى دائماً لتقديم أعلى مستويات الجودة في التدريب والتعليم",
  },
  {
    icon: Users,
    title: "العمل الجماعي",
    description: "نؤمن بقوة التعاون والعمل المشترك لتحقيق أهدافنا",
  },
  {
    icon: BookOpen,
    title: "التعلم المستمر",
    description: "نشجع على التطوير الذاتي ومواكبة أحدث التقنيات",
  },
  {
    icon: Briefcase,
    title: "الاحترافية",
    description: "نلتزم بأعلى معايير الاحترافية في جميع تعاملاتنا",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="iti-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" dir="rtl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              من نحن
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              نحن معهد تكنولوجيا المعلومات - فرع المنوفية، نسعى لبناء جيل قادر 
              على قيادة التحول الرقمي في مصر
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" dir="rtl">
            <div className="prose prose-lg max-w-none">
              <h2 className="section-title mb-8">نبذة عن المعهد</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 mt-10">
                تأسس معهد تكنولوجيا المعلومات (ITI) عام 1993 كأحد المبادرات الرائدة 
                لوزارة الاتصالات وتكنولوجيا المعلومات المصرية. يهدف المعهد إلى تأهيل 
                وتدريب الكوادر البشرية المصرية في مجالات تكنولوجيا المعلومات المختلفة.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                فرع المنوفية هو أحد الفروع الإقليمية للمعهد، تم افتتاحه لخدمة 
                شباب محافظة المنوفية والمحافظات المجاورة. يقدم الفرع نفس البرامج 
                التدريبية عالية الجودة المقدمة في الفرع الرئيسي بالقاهرة.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                نفخر بأننا ساهمنا في تخريج آلاف المتدربين الذين يعملون الآن في 
                كبرى الشركات المحلية والعالمية، مما يؤكد على جودة التدريب والتأهيل 
                الذي نقدمه.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" dir="rtl">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 iti-gradient rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">رؤيتنا</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                أن نكون المؤسسة الرائدة في تأهيل الكوادر البشرية في مجال تكنولوجيا 
                المعلومات على مستوى الشرق الأوسط وأفريقيا، وأن نساهم في تحويل مصر 
                إلى مركز إقليمي للتكنولوجيا والابتكار.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 iti-gradient rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">رسالتنا</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                تقديم برامج تدريبية متميزة تجمع بين المعرفة النظرية والتطبيق العملي، 
                وإعداد خريجين قادرين على المنافسة في سوق العمل المحلي والعالمي، 
                مع الالتزام بأعلى معايير الجودة والتميز.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="section-title mx-auto">قيمنا</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتشكل ثقافتنا
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" dir="rtl">
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
          <div className="text-center mb-12" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">محطات في مسيرتنا</h2>
            <p className="text-white/80 text-lg">رحلة من الإنجازات والنجاحات</p>
          </div>

          <div className="max-w-3xl mx-auto" dir="rtl">
            <div className="space-y-8">
              {[
                { year: "1993", title: "تأسيس المعهد", desc: "تأسيس معهد تكنولوجيا المعلومات كمبادرة وطنية" },
                { year: "2010", title: "التوسع الإقليمي", desc: "افتتاح فروع إقليمية في مختلف المحافظات" },
                { year: "2015", title: "فرع المنوفية", desc: "افتتاح فرع المنوفية لخدمة شباب المحافظة" },
                { year: "2023", title: "التحول الرقمي", desc: "إطلاق برامج متخصصة في الذكاء الاصطناعي والحوسبة السحابية" },
              ].map((item, index) => (
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
