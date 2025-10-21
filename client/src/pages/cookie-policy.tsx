import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background dark:bg-background shadow-sm py-4 sticky top-0 z-50 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
              <Home className="w-4 h-4" />
              Înapoi la Home
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-primary dark:text-primary">
            <Cookie className="w-5 h-5" />
            <span className="text-sm font-medium">Clean4Good</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Politica de Cookie-uri
          </h1>
          <p className="text-base text-muted-foreground">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              1. Ce sunt cookie-urile?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Cookie-urile sunt fișiere text de mici dimensiuni pe care site-ul web le stochează pe computerul sau 
              dispozitivul dvs. mobil atunci îl vizitați. Cookie-urile sunt utilizate pe scară largă pentru a face 
              site-urile web să funcționeze mai eficient și pentru a oferi informații proprietarilor de site-uri.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              2. Cum folosim cookie-urile
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Site-ul nostru Clean4Good utilizează cookie-uri pentru a îmbunătăți experiența dvs. de navigare. 
              Acestea ne ajută să înțelegem cum vizitatorii interactionează cu site-ul nostru și să oferim funcționalități 
              mai bune.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              3. Tipuri de cookie-uri utilizate
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Cookie-uri strict necesare</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Aceste cookie-uri sunt esențiale pentru funcționarea site-ului nostru și nu pot fi dezactivate. 
                  Ele sunt de obicei setate doar ca răspuns la acțiunile dvs., cum ar fi completarea formularelor.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Cookie-uri de performanță</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic pentru a putea măsura și 
                  îmbunătăți performanța site-ului nostru. Ele ne ajută să știm care pagini sunt cele mai populare 
                  și cum navighează vizitatorii pe site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Cookie-uri funcționale</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Aceste cookie-uri permit site-ului să ofere funcționalitate îmbunătățită și personalizare. Pot fi 
                  setate de noi sau de furnizori terți ale căror servicii le-am adăugat pe paginile noastre.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              4. Cookie-uri terțe părți
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              În anumite cazuri speciale, folosim cookie-uri furnizate de terți de încredere. Acestea pot include 
              servicii de analiză web sau alte instrumente care ne ajută să înțelegem modul în care utilizați site-ul 
              nostru pentru a-l putea îmbunătăți continuu.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              5. Gestionarea cookie-urilor
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care 
              sunt deja pe computerul dvs. și puteți seta majoritatea browserelor să împiedice plasarea acestora. 
              Cu toate acestea, dacă faceți acest lucru, este posibil să fie necesar să ajustați manual unele 
              preferințe de fiecare dată când vizitați un site.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Pentru mai multe informații despre cum să gestionați cookie-urile în browserul dvs., consultați 
              documentația furnizată de producătorul browserului dvs.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              6. Consimțământul dvs.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Prin utilizarea site-ului nostru, acceptați utilizarea cookie-urilor conform acestei politici. 
              Dacă nu sunteți de acord cu utilizarea cookie-urilor, vă rugăm să le dezactivați din setările 
              browserului dvs. sau să nu utilizați site-ul nostru.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              7. Modificări ale politicii
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ne rezervăm dreptul de a actualiza această politică de cookie-uri periodic pentru a reflecta 
              modificările în practicile noastre sau din motive operaționale, legale sau de reglementare. 
              Data ultimei actualizări este afișată în partea de sus a acestei pagini.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              8. Contact
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Pentru orice întrebări legate de această politică de cookie-uri, vă rugăm să ne contactați:
            </p>
            <div className="space-y-2 text-base text-muted-foreground">
              <p><strong>Clean4Good</strong></p>
              <p>Telefon: <a href="tel:+40742575464" className="text-primary dark:text-primary hover:underline" data-testid="link-contact-phone">0742 575 464</a></p>
              <p>Adresă: Str. Tiberiu Ricci Nr.13, Cisnadie</p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button size="lg" data-testid="button-back-home-bottom">
              Înapoi la pagina principală
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(220,20%,12%)] text-[hsl(200,10%,95%)] py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Clean4Good. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
