import Layout from "@/components/Layout";
import { Mail, Linkedin } from "lucide-react";

const leadership = [
  {
    name: "د. أحمد محمد",
    role: "مدير الفرع",
    department: "الإدارة",
    email: "ahmed.m@iti.gov.eg",
  },
  {
    name: "م. سارة أحمد",
    role: "نائب مدير الفرع",
    department: "الإدارة",
    email: "sara.a@iti.gov.eg",
  },
];

const instructors = [
  {
    name: "م. محمد حسن",
    role: "مدرب تطوير الويب",
    department: "قسم التطوير",
    specialization: "React, Node.js, TypeScript",
  },
  {
    name: "م. فاطمة علي",
    role: "مدربة علوم البيانات",
    department: "قسم البيانات",
    specialization: "Python, Machine Learning, AI",
  },
  {
    name: "م. عمر إبراهيم",
    role: "مدرب تطبيقات الموبايل",
    department: "قسم الموبايل",
    specialization: "Flutter, React Native, iOS",
  },
  {
    name: "م. نورا سمير",
    role: "مدربة الحوسبة السحابية",
    department: "قسم البنية التحتية",
    specialization: "AWS, Azure, DevOps",
  },
  {
    name: "م. خالد محمود",
    role: "مدرب الأمن السيبراني",
    department: "قسم الأمن",
    specialization: "Security, Penetration Testing",
  },
  {
    name: "م. مريم عادل",
    role: "مدربة واجهات المستخدم",
    department: "قسم التصميم",
    specialization: "UI/UX, Figma, Adobe XD",
  },
];

const adminStaff = [
  { name: "أ. هدى سعيد", role: "مسؤولة شؤون المتدربين" },
  { name: "أ. أحمد فوزي", role: "مسؤول الموارد البشرية" },
  { name: "أ. منى عبدالله", role: "مسؤولة العلاقات العامة" },
  { name: "أ. كريم حسين", role: "مسؤول تقنية المعلومات" },
];

const Staff = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="iti-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" dir="rtl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              فريق العمل
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              نخبة من الخبراء والمتخصصين الملتزمين بتقديم أفضل تجربة تعليمية
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="section-title mx-auto">القيادة</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              فريق الإدارة المسؤول عن توجيه وتطوير الفرع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" dir="rtl">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border card-hover"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full iti-gradient flex items-center justify-center shrink-0">
                    <span className="text-3xl font-bold text-white">
                      {member.name.charAt(2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {member.department}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="section-title mx-auto">المدربون</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              خبراء متخصصون في أحدث التقنيات ومتحمسون لنقل خبراتهم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border card-hover group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-white">
                      {instructor.name.charAt(2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">{instructor.name}</h3>
                    <p className="text-primary text-sm font-medium">{instructor.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{instructor.department}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialization.split(", ").map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Staff */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" dir="rtl">
            <h2 className="section-title mx-auto">الفريق الإداري</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              فريق الدعم الإداري الذي يضمن سير العمل بسلاسة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" dir="rtl">
            {adminStaff.map((staff, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg shadow-sm border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-secondary">
                    {staff.name.charAt(2)}
                  </span>
                </div>
                <h3 className="font-semibold text-secondary text-sm mb-1">
                  {staff.name}
                </h3>
                <p className="text-muted-foreground text-xs">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center" dir="rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              انضم إلى فريقنا
            </h2>
            <p className="text-white/80 mb-6">
              نبحث دائماً عن خبراء ومتخصصين للانضمام إلى فريق المدربين لدينا
            </p>
            <a
              href="mailto:careers@iti.gov.eg"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              أرسل سيرتك الذاتية
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
