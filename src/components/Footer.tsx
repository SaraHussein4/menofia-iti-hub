import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import itiLogo from "@/assets/iti-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" dir="rtl">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={itiLogo} alt="ITI Logo" className="h-12 brightness-0 invert" />
              <div>
                <p className="font-bold">معهد تكنولوجيا المعلومات</p>
                <p className="text-sm text-primary">فرع المنوفية</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              معهد تكنولوجيا المعلومات هو أحد أهم المؤسسات التعليمية في مصر المتخصصة في 
              تدريب وتأهيل الكوادر البشرية في مجال تكنولوجيا المعلومات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-primary transition-colors">فريق العمل</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">البرامج التدريبية</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>برنامج التدريب المهني (9 أشهر)</li>
              <li>برنامج المنح الصيفية</li>
              <li>دورات تدريبية قصيرة</li>
              <li>برامج تدريب الشركات</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>شبين الكوم، المنوفية، مصر</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span dir="ltr">+20 48 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>menofia@iti.gov.eg</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} معهد تكنولوجيا المعلومات - فرع المنوفية. جميع الحقوق محفوظة.</p>
            <p>تابع لوزارة الاتصالات وتكنولوجيا المعلومات</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
