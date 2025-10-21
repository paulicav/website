import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Sparkles, Home as HomeIcon, Building2, CheckCircle2, Award, Users, Wrench, Calendar, ClipboardCheck, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Clean_modern_kitchen_hero_bddb4901.png';
import residentialImage from '@assets/generated_images/Clean_residential_living_room_f8e191ac.png';
import commercialImage from '@assets/generated_images/Clean_modern_office_space_383f3d78.png';

// Custom hook for scroll-triggered fade animations
function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
}

// Sticky Header Navigation
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 dark:bg-background/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
      data-testid="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-foreground dark:text-foreground' : 'text-white dark:text-white'
            }`}
            data-testid="button-logo"
          >
            Clean4Good
          </button>

          {/* Desktop & Mobile Navigation */}
          <div className="flex flex-wrap items-center gap-3 md:gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`text-xs md:text-sm lg:text-base font-medium transition-colors hover-elevate px-2 md:px-3 py-2 rounded-md ${
                isScrolled ? 'text-foreground dark:text-foreground' : 'text-white dark:text-white'
              }`}
              data-testid="link-nav-services"
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`text-xs md:text-sm lg:text-base font-medium transition-colors hover-elevate px-2 md:px-3 py-2 rounded-md ${
                isScrolled ? 'text-foreground dark:text-foreground' : 'text-white dark:text-white'
              }`}
              data-testid="link-nav-how-it-works"
            >
              Cum Funcționează
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-xs md:text-sm lg:text-base font-medium transition-colors hover-elevate px-2 md:px-3 py-2 rounded-md ${
                isScrolled ? 'text-foreground dark:text-foreground' : 'text-white dark:text-white'
              }`}
              data-testid="link-nav-contact"
            >
              Contact
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="text-xs md:text-sm hidden md:inline-flex"
              data-testid="button-nav-cta"
            >
              Solicită Ofertă
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Hero Section with Parallax
function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src={heroImage}
          alt="Bucătărie modernă și curată"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="space-y-6">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              data-testid="text-hero-title"
            >
              Clean4Good
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed">
              Servicii profesionale de curățenie pentru locuințe și afaceri
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Transformăm spațiile tale într-un mediu curat, sănătos și primitor cu echipamente profesionale și personal dedicat
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base md:text-lg font-semibold"
                data-testid="button-request-quote"
              >
                Solicită Ofertă Gratuită
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Services Overview Section
function ServicesOverview() {
  const { elementRef: ref1, isVisible: visible1 } = useScrollAnimation();
  const { elementRef: ref2, isVisible: visible2 } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferim soluții complete de curățenie adaptate nevoilor tale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Residential Card */}
          <div
            ref={ref1}
            className={`transition-all duration-700 ease-out ${
              visible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="p-8 md:p-10 border hover-elevate h-full" data-testid="card-residential-service">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <HomeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">
                  Curățenie Rezidențială
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Servicii complete de curățenie pentru casa ta. De la curățenie generală la întreținere periodică, ne asigurăm că locuința ta strălucește.
                </p>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('residential')}
                  className="w-full md:w-auto"
                  data-testid="button-residential-details"
                >
                  Află mai multe
                </Button>
              </div>
            </Card>
          </div>

          {/* Commercial Card */}
          <div
            ref={ref2}
            className={`transition-all duration-700 ease-out delay-100 ${
              visible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="p-8 md:p-10 border hover-elevate h-full" data-testid="card-commercial-service">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">
                  Curățenie Birouri și Spații Comerciale
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Soluții profesionale pentru birouri și spații comerciale. Flexibilitate totală - curățăm în timpul sau după program.
                </p>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('commercial')}
                  className="w-full md:w-auto"
                  data-testid="button-commercial-details"
                >
                  Află mai multe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const { elementRef: ref1, isVisible: visible1 } = useScrollAnimation();
  const { elementRef: ref2, isVisible: visible2 } = useScrollAnimation();
  const { elementRef: ref3, isVisible: visible3 } = useScrollAnimation();

  const steps = [
    {
      icon: Phone,
      title: '1. Contactează-ne',
      description: 'Sună sau completează formularul de contact pentru a solicita o ofertă gratuită. Discutăm despre nevoile tale specifice.',
      ref: ref1,
      visible: visible1,
      delay: ''
    },
    {
      icon: Calendar,
      title: '2. Programare Convenabilă',
      description: 'Stabilim împreună data și ora care ți se potrivesc cel mai bine. Flexibilitate totală pentru confortul tău.',
      ref: ref2,
      visible: visible2,
      delay: 'delay-100'
    },
    {
      icon: Sparkle,
      title: '3. Curățenie Profesională',
      description: 'Echipa noastră vine echipată cu tot necesarul și lasă spațiul tău impecabil de curat. Garantat!',
      ref: ref3,
      visible: visible3,
      delay: 'delay-200'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Cum Funcționează
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trei pași simpli către un spațiu perfect curat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={step.ref}
              className={`transition-all duration-700 ease-out ${step.delay} ${
                step.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="p-8 md:p-10 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Residential Cleaning Section
function ResidentialSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generalServices = [
    'Curățarea și degresarea aragazului, cuptorului, hota, frigiderului',
    'Curățarea și spălarea interior/exterior frigider',
    'Degresarea cu aburi și spălarea faianței în bucătărie',
    'Spălarea interior-exterior a geamurilor',
    'Igienizarea și dezinfectarea tuturor spațiilor și suprafețelor',
    'Curățarea și dezinfectarea băilor',
    'Detartrarea, spălarea faianței și a obiectelor sanitare din baie',
    'Stergerea umedă a pardoselilor (parchet, gresie, marmură)',
    'Curățarea tâmplăriei (uși, tocuri)',
    'Tratarea cu soluții protectoare a suprafețelor de lemn',
    'Stergerea prafului de pe mobilier și electrocasnice',
    'Curățarea caloriferelor și tevilor la exterior',
    'Aspirarea tuturor suprafețelor',
    'Aerisirea și odorizarea încăperilor',
  ];

  const maintenanceServices = [
    'Detartrarea, spălarea obiectelor sanitare din baie',
    'Igienizarea, spălarea și dezinfectarea tuturor spațiilor',
    'Stergerea prafului de pe mobilier și electrocasnice',
    'Îndepărtarea eventualelor pânze de păianjen',
    'Stergerea geamurilor',
    'Stergerea umedă a pardoselilor',
    'Aspirarea mochetelor, covoarelor și parchetului',
    'Curățarea și dezinfectarea băilor',
    'Strângerea și debasarea gunoiului',
    'Odorizarea încăperilor',
  ];

  return (
    <section id="residential" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-secondary">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${(scrollY - 800) * 0.3}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src={residentialImage}
          alt="Interior casă modernă"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={elementRef}
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-residential-title">
            Curățenie Rezidențială
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Servicii complete de curățenie pentru locuința ta. Dispunem de aparatură profesională și soluții certificate pentru a reda strălucirea casei tale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* General Cleaning */}
          <Card className="p-8 md:p-10 bg-background border">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-accent" />
              <h3 className="text-xl md:text-2xl font-medium text-foreground">
                Curățenie Generală
              </h3>
            </div>
            <ul className="space-y-3">
              {generalServices.map((service, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-600 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`item-general-service-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Maintenance Cleaning */}
          <Card className="p-8 md:p-10 bg-background border">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-accent" />
              <h3 className="text-xl md:text-2xl font-medium text-foreground">
                Curățenie de Întreținere
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              Se poate executa zilnic, săptămânal, bilunar, lunar sau la cerere. De obicei se realizează o curățenie generală, după care la o perioadă stabilită de comun acord se realizează cea de întreținere.
            </p>
            <ul className="space-y-3">
              {maintenanceServices.map((service, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-600 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`item-maintenance-service-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Commercial Cleaning Section
function CommercialSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generalServices = [
    'Aspirarea mochetelor, covoarelor, gresiei, parchetului',
    'Spălarea și lustruirea suprafețelor',
    'Stergerea și lustruirea parchetului',
    'Stergerea prafului de pe toate suprafețele',
    'Spălarea și curățarea geamurilor (interior și exterior)',
    'Curățarea ramelor de geam și manerelor',
    'Aspirarea pereților și îndepărtarea pânzelor de păianjen',
    'Curățarea caloriferelor',
    'Curățarea prizelor și întrerupătoarelor',
    'Stergerea ușilor, tocurilor și manerelor',
    'Curățarea și dezinfectarea spațiilor sanitare',
    'Lustruirea și stergerea faianței',
    'Curățarea exterioară a electrocasnicelor',
    'Aerisirea și odorizarea încăperilor',
  ];

  const maintenanceServices = [
    'Aspirarea suprafețelor, mochetelor și covoarelor',
    'Spălarea și stergerea suprafețelor',
    'Stergerea prafului și lustruirea',
    'Spălarea și stergerea spațiilor sanitare',
    'Înlocuirea sacilor menajeri',
    'Colectarea gunoiului',
    'Aerisirea încăperilor',
    'Odorizarea spațiilor',
    'Alte activități specifice',
  ];

  return (
    <section id="commercial" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${(scrollY - 1800) * 0.3}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src={commercialImage}
          alt="Birou modern și curat"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={elementRef}
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-commercial-title">
            Curățenie Birouri și Spații Comerciale
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Echipa noastră oferă profesionalism cu servicii eficiente și de calitate pentru birouri. Ne adaptăm cerințelor fiecărui client și oferim flexibilitate totală.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* General Cleaning */}
          <Card className="p-8 md:p-10 bg-card border">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-medium text-foreground">
                Curățenie Generală
              </h3>
            </div>
            <ul className="space-y-3">
              {generalServices.map((service, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-600 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`item-commercial-general-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-card-foreground leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Maintenance Cleaning */}
          <Card className="p-8 md:p-10 bg-card border">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-medium text-foreground">
                Curățenie de Întreținere
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              Curățenia de întreținere se poate executa zilnic, săptămânal, bilunar, lunar sau la cerere. De obicei se realizează o curățenie generală, după care la o perioadă stabilită de comun acord se realizează cea de întreținere.
            </p>
            <ul className="space-y-3">
              {maintenanceServices.map((service, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-600 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`item-commercial-maintenance-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-card-foreground leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Award,
      title: 'Profesionalism',
      description:
        'Echipă dedicată și pregătită profesional pentru a oferi servicii de cea mai înaltă calitate.',
    },
    {
      icon: Users,
      title: 'Flexibilitate',
      description:
        'Ne adaptăm perfect programului și cerințelor tale. Curățăm când și cum ai nevoie.',
    },
    {
      icon: Wrench,
      title: 'Echipamente Profesionale',
      description:
        'Utilizăm doar echipamente și soluții de curățare profesionale, certificate și ecologice.',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-6 md:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            De Ce Clean4Good?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ne dedicăm să oferim servicii de curățenie de excepție care depășesc așteptările
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-600 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="p-8 text-center bg-background border hover-elevate h-full" data-testid={`card-feature-${index}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-6 md:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Contactează-ne
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Suntem aici să răspundem întrebărilor tale și să îți oferim o ofertă personalizată
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12">
            <div className="text-center" data-testid="contact-name">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Contact</p>
              <p className="text-lg font-semibold text-foreground">
                Cristian Ioana
              </p>
            </div>

            <div className="text-center" data-testid="contact-phone">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Telefon</p>
              <a
                href="tel:+40742575464"
                className="text-lg font-semibold text-primary hover:underline"
                data-testid="link-phone"
              >
                0742 575 464
              </a>
            </div>

            <div className="text-center" data-testid="contact-address">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Adresă</p>
              <p className="text-lg font-semibold text-foreground">
                Str. Tiberiu Ricci Nr.13, Cisnadie
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 pt-8 border-t border-border">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Solicită o Ofertă Gratuită
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fiecare spațiu este unic. Contactează-ne telefonic pentru a discuta despre nevoile tale și pentru a primi o ofertă personalizată.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 py-6">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base">Evaluare gratuită</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base">Ofertă transparentă</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base">Răspuns rapid</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base">Flexibilitate totală</span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                asChild
                className="text-base md:text-lg font-semibold min-w-64"
                data-testid="button-call-now"
              >
                <a href="tel:+40742575464" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Sună Acum - 0742 575 464
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[hsl(220,20%,12%)] text-[hsl(200,10%,95%)] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Clean4Good</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Servicii profesionale de curățenie rezidențială și comercială. Ne dedicăm să transformăm spațiile tale într-un mediu curat și sănătos.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('residential');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-90 hover:opacity-100 hover:underline"
                  data-testid="link-footer-residential"
                >
                  Curățenie Rezidențială
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('commercial');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="opacity-90 hover:opacity-100 hover:underline"
                  data-testid="link-footer-commercial"
                >
                  Curățenie Comercială
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politica-confidentialitate" className="opacity-90 hover:opacity-100 hover:underline" data-testid="link-footer-privacy">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/politica-cookie" className="opacity-90 hover:opacity-100 hover:underline" data-testid="link-footer-cookies">
                  Politica de Cookie-uri
                </Link>
              </li>
              <li>
                <a
                  href="https://anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 hover:underline"
                  data-testid="link-footer-anpc"
                >
                  ANPC - Protecția Consumatorilor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+40742575464"
                  className="opacity-90 hover:opacity-100 hover:underline"
                  data-testid="link-footer-phone"
                >
                  0742 575 464
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Str. Tiberiu Ricci Nr.13
                  <br />
                  Cisnadie
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-center opacity-75">
            © {new Date().getFullYear()} Clean4Good. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <ResidentialSection />
      <CommercialSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
}
