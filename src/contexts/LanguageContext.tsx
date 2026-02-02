import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.staff": "فريق العمل",
    "nav.contact": "تواصل معنا",
    "header.iti": "معهد تكنولوجيا المعلومات",
    "header.branch": "فرع المنوفية",

    // Hero
    "hero.slide1.title": "معهد تكنولوجيا المعلومات",
    "hero.slide1.subtitle": "فرع المنوفية",
    "hero.slide1.desc": "نبني المستقبل الرقمي لمصر من خلال تأهيل أفضل الكوادر البشرية في مجال تكنولوجيا المعلومات",
    "hero.slide2.title": "قوة رقمية جديدة",
    "hero.slide2.subtitle": "DIGITOPIA",
    "hero.slide2.desc": "برامج تدريبية متميزة تواكب أحدث التقنيات العالمية وتلبي احتياجات سوق العمل",
    "hero.discover": "اكتشف المزيد",
    "hero.contact": "تواصل معنا",

    // Stats
    "stats.trainees": "متدرب سنوياً",
    "stats.employment": "نسبة التوظيف",
    "stats.partners": "شركة شريكة",
    "stats.experience": "سنة خبرة",

    // About Preview
    "about.title": "عن معهد تكنولوجيا المعلومات",
    "about.desc1": "معهد تكنولوجيا المعلومات هو المعهد الرائد في مصر والشرق الأوسط في مجال تدريب وتأهيل الكوادر البشرية في تكنولوجيا المعلومات والاتصالات. يعمل المعهد تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات منذ أكثر من 15 عاماً.",
    "about.desc2": "فرع المنوفية هو أحد الفروع المتميزة للمعهد، حيث نقدم برامج تدريبية متخصصة لشباب محافظة المنوفية والمحافظات المجاورة.",
    "about.feature1": "برامج تدريبية معتمدة دولياً",
    "about.feature2": "مدربين ذوي خبرة عالية",
    "about.feature3": "شراكات مع كبرى الشركات",
    "about.feature4": "فرص توظيف مضمونة",
    "about.feature5": "بيئة تعليمية متطورة",
    "about.feature6": "مناهج محدثة باستمرار",
    "about.readMore": "اقرأ المزيد",
    "about.months": "أشهر تدريب مكثف",
    "about.support": "ساعة يومياً دعم",
    "about.free": "مجاني بالكامل",
    "about.companies": "شركة توظيف",

    // Programs
    "programs.title": "البرامج التدريبية",
    "programs.desc": "نقدم برامج تدريبية متخصصة تواكب أحدث التقنيات وتلبي احتياجات سوق العمل المحلي والعالمي",
    "programs.web": "تطوير الويب",
    "programs.web.desc": "تعلم أحدث تقنيات تطوير مواقع وتطبيقات الويب باستخدام React, Node.js, و المزيد",
    "programs.mobile": "تطوير تطبيقات الموبايل",
    "programs.mobile.desc": "بناء تطبيقات iOS و Android باستخدام أحدث الأدوات والتقنيات",
    "programs.data": "علوم البيانات",
    "programs.data.desc": "تحليل البيانات والتعلم الآلي واستخراج رؤى قيمة من البيانات الضخمة",
    "programs.cloud": "الحوسبة السحابية",
    "programs.cloud.desc": "إتقان خدمات AWS, Azure, و Google Cloud لبناء بنى تحتية قوية",
    "programs.ai": "الذكاء الاصطناعي",
    "programs.ai.desc": "تطوير حلول ذكية باستخدام تقنيات الذكاء الاصطناعي والتعلم العميق",
    "programs.security": "الأمن السيبراني",
    "programs.security.desc": "حماية الأنظمة والشبكات من التهديدات الأمنية والهجمات الإلكترونية",

    // CTA
    "cta.title": "ابدأ رحلتك المهنية معنا",
    "cta.desc": "انضم إلى آلاف الخريجين الناجحين واحصل على تدريب مجاني عالي الجودة يؤهلك لسوق العمل المحلي والعالمي",
    "cta.apply": "تقدم الآن",
    "cta.call": "اتصل بنا",

    // Footer
    "footer.about": "معهد تكنولوجيا المعلومات هو أحد أهم المؤسسات التعليمية في مصر المتخصصة في تدريب وتأهيل الكوادر البشرية في مجال تكنولوجيا المعلومات.",
    "footer.quickLinks": "روابط سريعة",
    "footer.programs": "البرامج التدريبية",
    "footer.program1": "برنامج التدريب المهني (9 أشهر)",
    "footer.program2": "برنامج المنح الصيفية",
    "footer.program3": "دورات تدريبية قصيرة",
    "footer.program4": "برامج تدريب الشركات",
    "footer.contactUs": "تواصل معنا",
    "footer.address": "شبين الكوم، المنوفية، مصر",
    "footer.copyright": "© {year} معهد تكنولوجيا المعلومات - فرع المنوفية. جميع الحقوق محفوظة.",
    "footer.ministry": "تابع لوزارة الاتصالات وتكنولوجيا المعلومات",

    // About Page
    "aboutPage.title": "من نحن",
    "aboutPage.subtitle": "نحن معهد تكنولوجيا المعلومات - فرع المنوفية، نسعى لبناء جيل قادر على قيادة التحول الرقمي في مصر",
    "aboutPage.sectionTitle": "نبذة عن الفرع",
    "aboutPage.p1": "يُعد فرع معهد تكنولوجيا المعلومات (ITI) بالمنوفية أحد الفروع الإقليمية التابعة للمعهد، وقد تم افتتاحه في عام 2020 في إطار خطة وزارة الاتصالات وتكنولوجيا المعلومات للتوسع الجغرافي ونشر التدريب التكنولوجي بالمحافظات.",
    "aboutPage.p2": "يهدف الفرع إلى إتاحة فرص تدريب متقدمة في مجالات تكنولوجيا المعلومات لشباب محافظة المنوفية والمحافظات المجاورة، ويقدّم نفس البرامج التدريبية المعتمدة التي يقدمها المعهد في مقره الرئيسي بالقاهرة، مع الالتزام بنفس معايير الجودة والمناهج الحديثة.",
    "aboutPage.p3": "ويساهم فرع المنوفية في إعداد كوادر مؤهلة قادرة على المنافسة في سوق العمل المحلي والإقليمي، من خلال التدريب العملي وتنمية المهارات التقنية والشخصية، بما يدعم رؤية الدولة في بناء مجتمع رقمي قوي.",
    "aboutPage.vision": "رؤيتنا",
    "aboutPage.visionText": "أن نكون المؤسسة الرائدة في تأهيل الكوادر البشرية في مجال تكنولوجيا المعلومات على مستوى الشرق الأوسط وأفريقيا، وأن نساهم في تحويل مصر إلى مركز إقليمي للتكنولوجيا والابتكار.",
    "aboutPage.mission": "رسالتنا",
    "aboutPage.missionText": "تقديم برامج تدريبية متميزة تجمع بين المعرفة النظرية والتطبيق العملي، وإعداد خريجين قادرين على المنافسة في سوق العمل المحلي والعالمي، مع الالتزام بأعلى معايير الجودة والتميز.",
    "aboutPage.values": "قيمنا",
    "aboutPage.valuesDesc": "نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتشكل ثقافتنا",
    "aboutPage.value1": "التميز",
    "aboutPage.value1Desc": "نسعى دائماً لتقديم أعلى مستويات الجودة في التدريب والتعليم",
    "aboutPage.value2": "العمل الجماعي",
    "aboutPage.value2Desc": "نؤمن بقوة التعاون والعمل المشترك لتحقيق أهدافنا",
    "aboutPage.value3": "التعلم المستمر",
    "aboutPage.value3Desc": "نشجع على التطوير الذاتي ومواكبة أحدث التقنيات",
    "aboutPage.value4": "الاحترافية",
    "aboutPage.value4Desc": "نلتزم بأعلى معايير الاحترافية في جميع تعاملاتنا",
    "aboutPage.timeline": "محطات في مسيرتنا",
    "aboutPage.timelineDesc": "رحلة من الإنجازات والنجاحات",
    "aboutPage.year1": "1993",
    "aboutPage.year1Title": "تأسيس المعهد",
    "aboutPage.year1Desc": "تأسيس معهد تكنولوجيا المعلومات كمبادرة وطنية",
    "aboutPage.year2": "2010",
    "aboutPage.year2Title": "التوسع الإقليمي",
    "aboutPage.year2Desc": "افتتاح فروع إقليمية في مختلف المحافظات",
    "aboutPage.year3": "2020",
    "aboutPage.year3Title": "فرع المنوفية",
    "aboutPage.year3Desc": "افتتاح فرع المنوفية لخدمة شباب المحافظة",
    "aboutPage.year4": "2023",
    "aboutPage.year4Title": "التحول الرقمي",
    "aboutPage.year4Desc": "إطلاق برامج متخصصة في الذكاء الاصطناعي والحوسبة السحابية",

    // Staff Page
    "staffPage.title": "فريق العمل",
    "staffPage.subtitle": "نخبة من الخبراء والمتخصصين الملتزمين بتقديم أفضل تجربة تعليمية",
    "staffPage.leadership": "القيادة",
    "staffPage.leadershipDesc": "فريق الإدارة المسؤول عن توجيه وتطوير الفرع",
    "staffPage.instructors": "المدربون",
    "staffPage.instructorsDesc": "خبراء متخصصون في أحدث التقنيات ومتحمسون لنقل خبراتهم",
    "staffPage.admin": "الفريق الإداري",
    "staffPage.adminDesc": "فريق الدعم الإداري الذي يضمن سير العمل بسلاسة",
    "staffPage.joinTitle": "انضم إلى فريقنا",
    "staffPage.joinDesc": "نبحث دائماً عن خبراء ومتخصصين للانضمام إلى فريق المدربين لدينا",
    "staffPage.sendCV": "أرسل سيرتك الذاتية",

    // Contact Page
    "contactPage.title": "تواصل معنا",
    "contactPage.subtitle": "نحن هنا للإجابة على استفساراتك ومساعدتك في رحلتك المهنية",
    "contactPage.sendMessage": "أرسل لنا رسالة",
    "contactPage.fullName": "الاسم الكامل",
    "contactPage.namePlaceholder": "أدخل اسمك",
    "contactPage.email": "البريد الإلكتروني",
    "contactPage.phone": "رقم الهاتف",
    "contactPage.subject": "الموضوع",
    "contactPage.selectSubject": "اختر الموضوع",
    "contactPage.admission": "الاستفسار عن القبول",
    "contactPage.programsOption": "البرامج التدريبية",
    "contactPage.partnership": "الشراكات",
    "contactPage.other": "أخرى",
    "contactPage.message": "رسالتك",
    "contactPage.messagePlaceholder": "اكتب رسالتك هنا...",
    "contactPage.sending": "جاري الإرسال...",
    "contactPage.send": "إرسال الرسالة",
    "contactPage.info": "معلومات التواصل",
    "contactPage.address": "العنوان",
    "contactPage.addressLine1": "شارع الجمهورية، شبين الكوم",
    "contactPage.addressLine2": "محافظة المنوفية، مصر",
    "contactPage.phoneLabel": "الهاتف",
    "contactPage.emailLabel": "البريد الإلكتروني",
    "contactPage.workHours": "ساعات العمل",
    "contactPage.workDays": "الأحد - الخميس: 9:00 ص - 5:00 م",
    "contactPage.closed": "الجمعة - السبت: مغلق",
    "contactPage.followUs": "تابعنا على",
    "contactPage.successTitle": "تم إرسال رسالتك بنجاح!",
    "contactPage.successDesc": "سنتواصل معك في أقرب وقت ممكن.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.staff": "Staff",
    "nav.contact": "Contact",
    "header.iti": "Information Technology Institute",
    "header.branch": "Menofia Branch",

    // Hero
    "hero.slide1.title": "Information Technology Institute",
    "hero.slide1.subtitle": "Menofia Branch",
    "hero.slide1.desc": "Building Egypt's digital future by training the best IT professionals",
    "hero.slide2.title": "A New Digital Force",
    "hero.slide2.subtitle": "DIGITOPIA",
    "hero.slide2.desc": "Outstanding training programs that keep pace with the latest global technologies and meet market needs",
    "hero.discover": "Discover More",
    "hero.contact": "Contact Us",

    // Stats
    "stats.trainees": "Trainees Annually",
    "stats.employment": "Employment Rate",
    "stats.partners": "Partner Companies",
    "stats.experience": "Years Experience",

    // About Preview
    "about.title": "About Information Technology Institute",
    "about.desc1": "The Information Technology Institute is the leading institute in Egypt and the Middle East in training and qualifying human resources in information technology and communications. The institute operates under the umbrella of the Ministry of Communications and Information Technology for over 15 years.",
    "about.desc2": "The Menofia branch is one of the distinguished branches of the institute, offering specialized training programs for the youth of Menofia and neighboring governorates.",
    "about.feature1": "Internationally accredited programs",
    "about.feature2": "Highly experienced trainers",
    "about.feature3": "Partnerships with major companies",
    "about.feature4": "Guaranteed employment opportunities",
    "about.feature5": "Advanced learning environment",
    "about.feature6": "Constantly updated curricula",
    "about.readMore": "Read More",
    "about.months": "Months Intensive Training",
    "about.support": "Hours Daily Support",
    "about.free": "Completely Free",
    "about.companies": "Hiring Companies",

    // Programs
    "programs.title": "Training Programs",
    "programs.desc": "We offer specialized training programs that keep pace with the latest technologies and meet local and global market needs",
    "programs.web": "Web Development",
    "programs.web.desc": "Learn the latest web development technologies using React, Node.js, and more",
    "programs.mobile": "Mobile App Development",
    "programs.mobile.desc": "Build iOS and Android apps using the latest tools and technologies",
    "programs.data": "Data Science",
    "programs.data.desc": "Data analysis, machine learning, and extracting valuable insights from big data",
    "programs.cloud": "Cloud Computing",
    "programs.cloud.desc": "Master AWS, Azure, and Google Cloud services to build robust infrastructure",
    "programs.ai": "Artificial Intelligence",
    "programs.ai.desc": "Develop intelligent solutions using AI and deep learning technologies",
    "programs.security": "Cybersecurity",
    "programs.security.desc": "Protect systems and networks from security threats and cyber attacks",

    // CTA
    "cta.title": "Start Your Career Journey With Us",
    "cta.desc": "Join thousands of successful graduates and get free, high-quality training that qualifies you for the local and global job market",
    "cta.apply": "Apply Now",
    "cta.call": "Call Us",

    // Footer
    "footer.about": "The Information Technology Institute is one of the most important educational institutions in Egypt specializing in training and qualifying human resources in the field of information technology.",
    "footer.quickLinks": "Quick Links",
    "footer.programs": "Training Programs",
    "footer.program1": "Professional Training Program (9 months)",
    "footer.program2": "Summer Scholarship Program",
    "footer.program3": "Short Training Courses",
    "footer.program4": "Corporate Training Programs",
    "footer.contactUs": "Contact Us",
    "footer.address": "Shebin El-Kom, Menofia, Egypt",
    "footer.copyright": "© {year} Information Technology Institute - Menofia Branch. All rights reserved.",
    "footer.ministry": "Under the Ministry of Communications and Information Technology",

    // About Page
    "aboutPage.title": "About Us",
    "aboutPage.subtitle": "We are the Information Technology Institute - Menofia Branch, striving to build a generation capable of leading digital transformation in Egypt",
    "aboutPage.sectionTitle": "About the Branch",
    "aboutPage.p1": "The Information Technology Institute (ITI) Menofia Branch is one of the regional branches of the institute. It was opened in 2020 as part of the Ministry of Communications and Information Technology's plan for geographic expansion and spreading technological training across governorates.",
    "aboutPage.p2": "The branch aims to provide advanced training opportunities in information technology fields for the youth of Menofia Governorate and neighboring governorates. It offers the same accredited training programs provided by the institute at its headquarters in Cairo, with commitment to the same quality standards and modern curricula.",
    "aboutPage.p3": "The Menofia branch contributes to preparing qualified cadres capable of competing in the local and regional labor market, through practical training and developing technical and personal skills, supporting the state's vision of building a strong digital society.",
    "aboutPage.vision": "Our Vision",
    "aboutPage.visionText": "To be the leading institution in qualifying human resources in the field of information technology in the Middle East and Africa, and to contribute to transforming Egypt into a regional center for technology and innovation.",
    "aboutPage.mission": "Our Mission",
    "aboutPage.missionText": "To provide distinguished training programs that combine theoretical knowledge and practical application, and to prepare graduates capable of competing in the local and global job market, while adhering to the highest standards of quality and excellence.",
    "aboutPage.values": "Our Values",
    "aboutPage.valuesDesc": "We believe in a set of core values that guide our work and shape our culture",
    "aboutPage.value1": "Excellence",
    "aboutPage.value1Desc": "We always strive to provide the highest levels of quality in training and education",
    "aboutPage.value2": "Teamwork",
    "aboutPage.value2Desc": "We believe in the power of cooperation and joint work to achieve our goals",
    "aboutPage.value3": "Continuous Learning",
    "aboutPage.value3Desc": "We encourage self-development and keeping up with the latest technologies",
    "aboutPage.value4": "Professionalism",
    "aboutPage.value4Desc": "We adhere to the highest standards of professionalism in all our dealings",
    "aboutPage.timeline": "Milestones in Our Journey",
    "aboutPage.timelineDesc": "A journey of achievements and successes",
    "aboutPage.year1": "1993",
    "aboutPage.year1Title": "Institute Founded",
    "aboutPage.year1Desc": "Establishment of the Information Technology Institute as a national initiative",
    "aboutPage.year2": "2010",
    "aboutPage.year2Title": "Regional Expansion",
    "aboutPage.year2Desc": "Opening regional branches in various governorates",
    "aboutPage.year3": "2020",
    "aboutPage.year3Title": "Menofia Branch",
    "aboutPage.year3Desc": "Opening the Menofia branch to serve the governorate's youth",
    "aboutPage.year4": "2023",
    "aboutPage.year4Title": "Digital Transformation",
    "aboutPage.year4Desc": "Launching specialized programs in AI and cloud computing",

    // Staff Page
    "staffPage.title": "Our Team",
    "staffPage.subtitle": "An elite group of experts and specialists committed to providing the best learning experience",
    "staffPage.leadership": "Leadership",
    "staffPage.leadershipDesc": "The management team responsible for directing and developing the branch",
    "staffPage.instructors": "Instructors",
    "staffPage.instructorsDesc": "Specialized experts in the latest technologies, passionate about sharing their expertise",
    "staffPage.admin": "Administrative Team",
    "staffPage.adminDesc": "The administrative support team that ensures smooth operations",
    "staffPage.joinTitle": "Join Our Team",
    "staffPage.joinDesc": "We are always looking for experts and specialists to join our team of trainers",
    "staffPage.sendCV": "Send Your CV",

    // Contact Page
    "contactPage.title": "Contact Us",
    "contactPage.subtitle": "We are here to answer your inquiries and help you on your career journey",
    "contactPage.sendMessage": "Send Us a Message",
    "contactPage.fullName": "Full Name",
    "contactPage.namePlaceholder": "Enter your name",
    "contactPage.email": "Email",
    "contactPage.phone": "Phone Number",
    "contactPage.subject": "Subject",
    "contactPage.selectSubject": "Select Subject",
    "contactPage.admission": "Admission Inquiry",
    "contactPage.programsOption": "Training Programs",
    "contactPage.partnership": "Partnerships",
    "contactPage.other": "Other",
    "contactPage.message": "Your Message",
    "contactPage.messagePlaceholder": "Write your message here...",
    "contactPage.sending": "Sending...",
    "contactPage.send": "Send Message",
    "contactPage.info": "Contact Information",
    "contactPage.address": "Address",
    "contactPage.addressLine1": "Gomhouria Street, Shebin El-Kom",
    "contactPage.addressLine2": "Menofia Governorate, Egypt",
    "contactPage.phoneLabel": "Phone",
    "contactPage.emailLabel": "Email",
    "contactPage.workHours": "Working Hours",
    "contactPage.workDays": "Sunday - Thursday: 9:00 AM - 5:00 PM",
    "contactPage.closed": "Friday - Saturday: Closed",
    "contactPage.followUs": "Follow Us",
    "contactPage.successTitle": "Message sent successfully!",
    "contactPage.successDesc": "We will contact you as soon as possible.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
