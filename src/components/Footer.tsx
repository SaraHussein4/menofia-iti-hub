import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import itiLogo from "@/assets/iti-logo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={itiLogo} alt="ITI Logo" className="h-12 brightness-0 invert" />
              <div>
                <p className="font-bold">{t("header.iti")}</p>
                <p className="text-sm text-primary">{t("header.branch")}</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-primary transition-colors">{t("nav.staff")}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">{t("footer.programs")}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>{t("footer.program1")}</li>
              <li>{t("footer.program2")}</li>
              <li>{t("footer.program3")}</li>
              <li>{t("footer.program4")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">{t("footer.contactUs")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t("footer.address")}</span>
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
            <p>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
            <p>{t("footer.ministry")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
