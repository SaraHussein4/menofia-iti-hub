import Layout from "@/components/Layout";
import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const leadership = [
  {
    nameAr: "د. أحمد محمد",
    nameEn: "Dr. Ahmed Mohamed",
    roleAr: "مدير الفرع",
    roleEn: "Branch Director",
    departmentAr: "الإدارة",
    departmentEn: "Administration",
    email: "ahmed.m@iti.gov.eg",
  },
  {
    nameAr: "م. سارة أحمد",
    nameEn: "Eng. Sara Ahmed",
    roleAr: "نائب مدير الفرع",
    roleEn: "Deputy Director",
    departmentAr: "الإدارة",
    departmentEn: "Administration",
    email: "sara.a@iti.gov.eg",
  },
];

const instructors = [
  {
    nameAr: "م. محمد حسن",
    nameEn: "Eng. Mohamed Hassan",
    roleAr: "مدرب تطوير الويب",
    roleEn: "Web Development Instructor",
    departmentAr: "قسم التطوير",
    departmentEn: "Development Dept.",
    specialization: "React, Node.js, TypeScript",
  },
  {
    nameAr: "م. فاطمة علي",
    nameEn: "Eng. Fatma Ali",
    roleAr: "مدربة علوم البيانات",
    roleEn: "Data Science Instructor",
    departmentAr: "قسم البيانات",
    departmentEn: "Data Dept.",
    specialization: "Python, Machine Learning, AI",
  },
  {
    nameAr: "م. عمر إبراهيم",
    nameEn: "Eng. Omar Ibrahim",
    roleAr: "مدرب تطبيقات الموبايل",
    roleEn: "Mobile Apps Instructor",
    departmentAr: "قسم الموبايل",
    departmentEn: "Mobile Dept.",
    specialization: "Flutter, React Native, iOS",
  },
  {
    nameAr: "م. نورا سمير",
    nameEn: "Eng. Noura Samir",
    roleAr: "مدربة الحوسبة السحابية",
    roleEn: "Cloud Computing Instructor",
    departmentAr: "قسم البنية التحتية",
    departmentEn: "Infrastructure Dept.",
    specialization: "AWS, Azure, DevOps",
  },
  {
    nameAr: "م. خالد محمود",
    nameEn: "Eng. Khaled Mahmoud",
    roleAr: "مدرب الأمن السيبراني",
    roleEn: "Cybersecurity Instructor",
    departmentAr: "قسم الأمن",
    departmentEn: "Security Dept.",
    specialization: "Security, Penetration Testing",
  },
  {
    nameAr: "م. مريم عادل",
    nameEn: "Eng. Mariam Adel",
    roleAr: "مدربة واجهات المستخدم",
    roleEn: "UI/UX Instructor",
    departmentAr: "قسم التصميم",
    departmentEn: "Design Dept.",
    specialization: "UI/UX, Figma, Adobe XD",
  },
];

const adminStaff = [
  { nameAr: "أ. هدى سعيد", nameEn: "Ms. Hoda Said", roleAr: "مسؤولة شؤون المتدربين", roleEn: "Trainee Affairs Officer" },
  { nameAr: "أ. أحمد فوزي", nameEn: "Mr. Ahmed Fawzy", roleAr: "مسؤول الموارد البشرية", roleEn: "HR Officer" },
  { nameAr: "أ. منى عبدالله", nameEn: "Ms. Mona Abdullah", roleAr: "مسؤولة العلاقات العامة", roleEn: "PR Officer" },
  { nameAr: "أ. كريم حسين", nameEn: "Mr. Karim Hussein", roleAr: "مسؤول تقنية المعلومات", roleEn: "IT Officer" },
];

const Staff = () => {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="iti-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("staffPage.title")}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t("staffPage.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t("staffPage.leadership")}</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              {t("staffPage.leadershipDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border card-hover"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full iti-gradient flex items-center justify-center shrink-0">
                    <span className="text-3xl font-bold text-white">
                      {isAr ? member.nameAr.charAt(2) : member.nameEn.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {isAr ? member.nameAr : member.nameEn}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {isAr ? member.roleAr : member.roleEn}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {isAr ? member.departmentAr : member.departmentEn}
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
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t("staffPage.instructors")}</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              {t("staffPage.instructorsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border card-hover group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-white">
                      {isAr ? instructor.nameAr.charAt(2) : instructor.nameEn.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">
                      {isAr ? instructor.nameAr : instructor.nameEn}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {isAr ? instructor.roleAr : instructor.roleEn}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    {isAr ? instructor.departmentAr : instructor.departmentEn}
                  </p>
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
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t("staffPage.admin")}</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              {t("staffPage.adminDesc")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {adminStaff.map((staff, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg shadow-sm border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-secondary">
                    {isAr ? staff.nameAr.charAt(2) : staff.nameEn.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-secondary text-sm mb-1">
                  {isAr ? staff.nameAr : staff.nameEn}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {isAr ? staff.roleAr : staff.roleEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("staffPage.joinTitle")}
            </h2>
            <p className="text-white/80 mb-6">
              {t("staffPage.joinDesc")}
            </p>
            <a
              href="mailto:careers@iti.gov.eg"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              {t("staffPage.sendCV")}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
