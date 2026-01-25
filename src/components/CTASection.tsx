import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" dir="rtl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ رحلتك المهنية معنا
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            انضم إلى آلاف الخريجين الناجحين واحصل على تدريب مجاني عالي الجودة 
            يؤهلك لسوق العمل المحلي والعالمي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold 
                         hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2"
            >
              تقدم الآن
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <a
              href="tel:+20481234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold 
                         hover:bg-white hover:text-secondary transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
