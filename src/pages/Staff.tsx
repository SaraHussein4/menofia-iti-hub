import Layout from "@/components/Layout";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import omniaNourImg from "@/assets/omnia-nour.png";
import mohamedElshafeiImg from "@/assets/mohamed-elshafei.png";

const leadership = [
  {
    nameAr: "م. امنية نور",
    nameEn: "Eng. Omnia Nour",
    roleAr: "مدير الفرع",
    roleEn: "Branch Director",
    departmentAr: "الإدارة",
    departmentEn: "Administration",
    image: omniaNourImg,
  },
  {
    nameAr: "م. محمد الشافعي",
    nameEn: "Eng. Mohamed Elshafei",
    roleAr: "مدير التدريب",
    roleEn: "Training Director",
    departmentAr: "الإدارة",
    departmentEn: "Administration",
    image: mohamedElshafeiImg,
  },
];

const instructors = [
  {
    nameAr: "م. سارة حسين",
    nameEn: "Eng. Sara Hussein",
    roleAr: "مدربة",
    roleEn: "Instructor",
    departmentAr: "قسم System Development",
    departmentEn: "System Development Dept.",
    specialization: "HTML & CSS, Javascript, ECMA6, HTML5 & CSS3, Angular Framework",
  },
  {
    nameAr: "م. زياد أشرف",
    nameEn: "Eng. Ziad Ashraf",
    roleAr: "مدرب",
    roleEn: "Instructor",
    departmentAr: "قسم Open Source",
    departmentEn: "Open Source Dept.",
    specialization: "Operating System, Python, OOP Using Python",
  },
  {
    nameAr: "م. عمرو أحمد",
    nameEn: "Eng. Amr Ahmed",
    roleAr: "مدرب",
    roleEn: "Instructor",
    departmentAr: "قسم Open Source",
    departmentEn: "Open Source Dept.",
    specialization: "Apache Web Server, Laravel",
  },
  {
    nameAr: "م. آيات عادل",
    nameEn: "Eng. Ayaat Adel",
    roleAr: "مدربة",
    roleEn: "Instructor",
    departmentAr: "قسم Open Source",
    departmentEn: "Open Source Dept.",
    specialization: "Version Control, PHP",
  },
  {
    nameAr: "م. رحاب هشام",
    nameEn: "Eng. Rehab Hesham",
    roleAr: "مدربة",
    roleEn: "Instructor",
    departmentAr: "قسم System Development",
    departmentEn: "System Development Dept.",
    specialization: "Node.js, Windows Form, Version Control, ADO",
  },
  {
    nameAr: "م. سيمون شحاته",
    nameEn: "Eng. Simon Shehata",
    roleAr: "مدرب",
    roleEn: "Instructor",
    departmentAr: "قسم التطوير",
    departmentEn: "Development Dept.",
    specialization: "HTML & CSS, Javascript, ECMA6, HTML5 & CSS3, Bootstrap",
  },
];

const adminStaff = [
  { nameAr: "أ. نبيل عبدالعزيز", nameEn: "Mr. Nabil Abdelaziz" },
  { nameAr: "أ. أحمد عزمي", nameEn: "Mr. Ahmed Azmy" },
  { nameAr: "أ. صالح فارس", nameEn: "Mr. Saleh Fares" },
  { nameAr: "أ. عبدالرحمن صلاح", nameEn: "Mr. Abdelrahman Salah" },
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
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <img 
                      src={member.image} 
                      alt={isAr ? member.nameAr : member.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {isAr ? member.nameAr : member.nameEn}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {isAr ? member.roleAr : member.roleEn}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {isAr ? member.departmentAr : member.departmentEn}
                    </p>
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
                <h3 className="font-semibold text-secondary text-sm">
                  {isAr ? staff.nameAr : staff.nameEn}
                </h3>
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
              <Mail className="h-5 w-5" />
              {t("staffPage.sendCV")}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
