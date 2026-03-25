import { Toaster } from "@/components/ui/sonner";
import {
  Building2,
  ChevronRight,
  Clock,
  Facebook,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Sun,
  Trophy,
  Wrench,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "मुख्यपृष्ठ", href: "#home" },
  { label: "आमच्याबद्दल", href: "#about" },
  { label: "सेवा", href: "#services" },
  { label: "PM योजना", href: "#pm-scheme" },
  { label: "संपर्क", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("आपला संदेश पाठवला गेला! आम्ही लवकरच संपर्क करू.");
    setFormData({ name: "", phone: "", location: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Toaster position="top-center" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3"
              data-ocid="nav.link"
            >
              <img
                src="/assets/generated/solar-logo-transparent.dim_200x200.png"
                alt="Lakshmi Solar System Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="text-primary font-bold text-lg leading-tight">
                  लक्ष्मी सोलर सिस्टम
                </div>
                <div className="text-muted-foreground text-xs">
                  Lakshmi Solar System, Gadhinglaj
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium text-sm transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors"
              data-ocid="nav.primary_button"
            >
              विनामूल्य सल्ला घ्या
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-foreground"
              data-ocid="nav.toggle"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-foreground hover:text-primary font-medium py-1"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-center text-sm"
                  data-ocid="nav.primary_button"
                >
                  विनामूल्य सल्ला घ्या
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-solar.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "१००+ पूर्ण कामे",
                "२५ वर्षांची वॉरंटी",
                "गडहिंग्लज मधील विश्वासार्ह सेवा",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-amber/90 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
              महाराष्ट्राला सूर्यशक्तीने उजळवा!
            </h1>
            <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed">
              विश्वासू, किफायतशीर आणि टिकाऊ सोलर पॅनेल — घर आणि व्यवसायासाठी
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg"
                data-ocid="hero.primary_button"
              >
                विनामूल्य सल्ला घ्या <ChevronRight size={20} />
              </a>
              <a
                href="#pm-scheme"
                className="inline-flex items-center justify-center gap-2 bg-amber text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-light transition-colors shadow-lg"
                data-ocid="hero.secondary_button"
              >
                PM योजना जाणून घ्या
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              आम्हाला का निवडायचे?
            </h2>
            <p className="text-muted-foreground text-lg">
              गडहिंग्लज मधील विश्वासार्ह सोलर सेवा
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Trophy size={32} className="text-primary" />,
                title: "विश्वासार्ह नाव",
                desc: "हळकर्णी, ता. गडहिंग्लज — २४+ महिन्यांचा अनुभव",
              },
              {
                icon: <Zap size={32} className="text-primary" />,
                title: "उच्च दर्जाचे पॅनेल",
                desc: "ISO प्रमाणित सर्वोत्तम कंपन्यांचे सोलर पॅनेल",
              },
              {
                icon: <Wrench size={32} className="text-primary" />,
                title: "संपूर्ण सेवा",
                desc: "इन्स्टॉलेशन ते देखभाल — सर्व काही एकाच ठिकाणी",
              },
              {
                icon: <Sun size={32} className="text-primary" />,
                title: "वीज बिलात बचत",
                desc: "दरमहा ₹२,०००-₹५,००० पर्यंत बचत",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              आमच्या सेवा
            </h2>
            <p className="text-muted-foreground text-lg">
              घर ते व्यवसाय — सर्वांसाठी सोलर समाधान
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home size={40} className="text-primary" />,
                title: "घरगुती सोलर",
                desc: "आपल्या घराच्या छतावर सोलर पॅनेल बसवा आणि वीज बिलातून मुक्ती मिळवा",
                badge: "सर्वात लोकप्रिय",
              },
              {
                icon: <Building2 size={40} className="text-primary" />,
                title: "व्यावसायिक सोलर",
                desc: "दुकान, कारखाना, शेतीसाठी मोठ्या क्षमतेचे सोलर सिस्टम",
                badge: null,
              },
              {
                icon: <Wrench size={40} className="text-primary" />,
                title: "देखभाल व दुरुस्ती",
                desc: "आमच्या तज्ज्ञ टीमकडून वार्षिक देखभाल आणि त्वरित दुरुस्ती",
                badge: null,
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow relative overflow-hidden border border-border"
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-5">
                  {service.icon}
                </div>
                <h3 className="font-black text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                  data-ocid="services.link"
                >
                  अधिक जाणून घ्या <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Scheme Band */}
      <section
        id="pm-scheme"
        className="py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #FFF3E0 0%, #FFF8E1 50%, #FFF3E0 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-3">
              🌟 पंतप्रधान सूर्य घर मुफ्त बिजली योजना
            </h2>
            <p className="text-amber-800 text-lg max-w-3xl mx-auto">
              केंद्र सरकारची महत्त्वाकांक्षी योजना — आता सोलर पॅनेल लावा आणि मोफत वीज
              मिळवा!
            </p>
            <div className="w-16 h-1 bg-amber mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-card border border-amber/40"
            >
              <h3 className="font-black text-xl text-amber-900 mb-4 flex items-center gap-2">
                <Sun className="text-amber" size={24} /> योजनेची माहिती
              </h3>
              <p className="text-foreground leading-relaxed text-base">
                पंतप्रधान नरेंद्र मोदी यांनी सुरू केलेल्या या योजनेत{" "}
                <strong>१ कोटी घरांना</strong> सोलर पॅनेल मिळणार आहेत. पात्र कुटुंबांना
                दरमहा <strong>३०० युनिट मोफत वीज</strong> मिळेल.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "✅ केंद्र सरकारकडून थेट सबसिडी",
                  "✅ बँक कर्जाची सुविधा",
                  "✅ NET Metering योजना",
                  "✅ अतिरिक्त वीज ग्रिडला विकण्याची संधी",
                ].map((point) => (
                  <div key={point} className="text-foreground text-sm">
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-amber rounded-2xl p-8 shadow-card"
            >
              <h3 className="font-black text-xl text-amber-900 mb-5 flex items-center gap-2">
                💰 सरकारी अनुदान (सबसिडी)
              </h3>
              <div className="space-y-4">
                {[
                  { kw: "१ kW साठी", amount: "₹३०,०००", color: "bg-white/60" },
                  { kw: "२ kW साठी", amount: "₹६०,०००", color: "bg-white/70" },
                  { kw: "३ kW साठी", amount: "₹७८,०००", color: "bg-white/80" },
                  {
                    kw: "मासिक",
                    amount: "३०० युनिट मोफत वीज",
                    color: "bg-primary text-white",
                    highlight: true,
                  },
                ].map((item) => (
                  <div
                    key={item.kw}
                    className={`flex justify-between items-center rounded-xl px-5 py-3 font-semibold ${
                      item.highlight
                        ? "bg-primary text-white"
                        : "bg-white/70 text-amber-900"
                    }`}
                  >
                    <span>{item.kw}</span>
                    <span className="font-black text-lg">{item.amount}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors"
                data-ocid="pmscheme.primary_button"
              >
                पात्रता तपासा — आम्हाला संपर्क करा <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              पूर्ण झालेले प्रकल्प
            </h2>
            <p className="text-muted-foreground text-lg">
              गडहिंग्लज परिसरातील आमचे यशस्वी प्रकल्प
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: "/assets/generated/project-shirol.dim_400x300.jpg",
                label: "शिरोळ — ५ kW",
                type: "घरगुती",
              },
              {
                img: "/assets/generated/project-ichalkaranji.dim_400x300.jpg",
                label: "हळकर्णी — ३ kW",
                type: "घरगुती",
              },
              {
                img: "/assets/generated/project-kagal.dim_400x300.jpg",
                label: "गडहिंग्लज — १० kW",
                type: "व्यावसायिक",
              },
              {
                img: "/assets/generated/project-gargoti.dim_400x300.jpg",
                label: "गारगोटी — ४ kW",
                type: "घरगुती",
              },
            ].map((project, i) => (
              <motion.div
                key={project.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-card group"
                data-ocid={`projects.item.${i + 1}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-sm">
                    {project.label}
                  </span>
                </div>
                <div className="bg-muted px-4 py-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.type === "व्यावसायिक"
                        ? "bg-amber/30 text-amber-900"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              ग्राहकांचे अभिप्राय
            </h2>
            <p className="text-muted-foreground text-lg">
              आमच्या समाधानी ग्राहकांचे काय म्हणणे आहे
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "श्री. प्रकाश शिवाजी तांबडे",
                location: "हळकर्णी",
                review:
                  "लक्ष्मी सोलरने आमच्या घरावर उत्कृष्ट काम केले. वीज बिल जवळपास शून्य झाले! खूप विश्वासार्ह टीम आहे.",
              },
              {
                name: "श्रीमती. सुनिता शिंदे",
                location: "गडहिंग्लज",
                review:
                  "PM योजनेचा लाभ मिळवून दिल्याबद्दल खूप आभारी. सरकारी कागदपत्रे भरण्यातही मदत केली.",
              },
              {
                name: "श्री. सुभाष रामचंद्र पाटील",
                location: "हासूर",
                review:
                  "व्यावसायिक वापरासाठी १० kW सिस्टम बसवला. दर्जा आणि सेवा दोन्ही अप्रतिम!",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-7 shadow-card border border-border"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  <Star size={18} className="fill-amber text-amber" />
                  <Star size={18} className="fill-amber text-amber" />
                  <Star size={18} className="fill-amber text-amber" />
                  <Star size={18} className="fill-amber text-amber" />
                  <Star size={18} className="fill-amber text-amber" />
                </div>
                <p className="text-foreground leading-relaxed mb-5 italic">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(t.name.indexOf(".") + 2)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              आमच्याशी संपर्क करा
            </h2>
            <p className="text-muted-foreground text-lg">
              विनामूल्य सल्ला व माहितीसाठी आजच संपर्क करा
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-primary/10 border-2 border-primary rounded-2xl p-10 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-black text-primary mb-2">
                      संदेश पाठवला गेला!
                    </h3>
                    <p className="text-foreground">
                      आम्ही लवकरच आपल्याशी संपर्क करू.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    data-ocid="contact.modal"
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-foreground mb-1"
                      >
                        नाव *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="आपले पूर्ण नाव"
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-muted"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-foreground mb-1"
                      >
                        मोबाईल नंबर *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, phone: e.target.value }))
                        }
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-muted"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-location"
                        className="block text-sm font-semibold text-foreground mb-1"
                      >
                        तुमचे गाव/शहर *
                      </label>
                      <input
                        id="contact-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            location: e.target.value,
                          }))
                        }
                        placeholder="उदा. हळकर्णी, गडहिंग्लज, गारगोटी..."
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-muted"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-foreground mb-1"
                      >
                        संदेश
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        placeholder="आपला प्रश्न किंवा माहिती लिहा..."
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-muted resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors"
                      data-ocid="contact.submit_button"
                    >
                      संपर्क करा →
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-muted rounded-2xl p-6 space-y-5">
                <h3 className="font-black text-xl text-foreground">
                  संपर्क तपशील
                </h3>
                {[
                  {
                    icon: <MapPin size={20} className="text-primary" />,
                    label: "पत्ता",
                    value: "बस स्टँड हळकर्णी, ता. गडहिंग्लज",
                  },
                  {
                    icon: <Phone size={20} className="text-primary" />,
                    label: "फोन",
                    value: "8668791551 / 8806627805 / 8698421551",
                  },
                  {
                    icon: <Mail size={20} className="text-primary" />,
                    label: "ईमेल",
                    value: "info@lakshmisolar.in",
                  },
                  {
                    icon: <Clock size={20} className="text-primary" />,
                    label: "वेळ",
                    value: "सोम-शनि: सकाळी ९ - सायंकाळी ७",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-foreground font-medium text-sm">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden h-48 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                }}
              >
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-primary font-bold">बस स्टँड हळकर्णी</p>
                  <p className="text-muted-foreground text-sm">
                    ता. गडहिंग्लज, महाराष्ट्र
                  </p>
                </div>
              </div>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: "१००+", label: "पूर्ण कामे" },
                  { num: "२४+", label: "महिने अनुभव" },
                  { num: "२५", label: "वर्षे वॉरंटी" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-primary text-white rounded-xl p-4 text-center"
                  >
                    <div className="font-black text-xl">{stat.num}</div>
                    <div className="text-xs text-white/80 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/generated/solar-logo-transparent.dim_200x200.png"
                  alt="Logo"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <div className="font-black text-lg">लक्ष्मी सोलर सिस्टम</div>
                  <div className="text-white/60 text-xs">
                    गडहिंग्लज मधील विश्वासू सोलर तज्ज्ञ
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                गडहिंग्लज परिसरातील विश्वासार्ह सोलर पॅनेल पुरवठादार. घर ते व्यवसाय —
                सर्वांसाठी किफायतशीर सोलर समाधान.
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { icon: <Facebook size={18} />, label: "Facebook" },
                  { icon: <Instagram size={18} />, label: "Instagram" },
                  { icon: <Youtube size={18} />, label: "YouTube" },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    aria-label={s.label}
                    className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-colors"
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-base mb-4 text-amber">त्वरित दुवे</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1"
                      data-ocid="footer.link"
                    >
                      <ChevronRight size={14} className="text-amber" />{" "}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-black text-base mb-4 text-amber">संपर्क</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin
                    size={16}
                    className="text-amber mt-0.5 flex-shrink-0"
                  />
                  <span>बस स्टँड हळकर्णी, ता. गडहिंग्लज</span>
                </div>
                <div className="flex items-start gap-2 text-white/70 text-sm">
                  <Phone
                    size={16}
                    className="text-amber mt-0.5 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span>8668791551</span>
                    <span>8806627805</span>
                    <span>8698421551</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail size={16} className="text-amber" />
                  <span>info@lakshmisolar.in</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock size={16} className="text-amber" />
                  <span>सोम-शनि: सकाळी ९ - सायंकाळी ७</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
            <span>
              © {new Date().getFullYear()} लक्ष्मी सोलर सिस्टम. सर्व हक्क राखीव.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
