import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Clean4Good</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-base text-muted-foreground">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              1. Introducere
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Clean4Good respectă confidențialitatea datelor dvs. personale și se angajează să protejeze informațiile pe care ni le furnizați. 
              Această politică descrie modul în care colectăm, utilizăm și protejăm datele dumneavoastră personale.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              2. Datele pe care le colectăm
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Când ne contactați pentru serviciile noastre, putem colecta următoarele informații:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
              <li>Nume și prenume</li>
              <li>Număr de telefon</li>
              <li>Adresă de email (dacă este furnizată)</li>
              <li>Adresa locuinței sau a spațiului comercial care necesită servicii de curățenie</li>
              <li>Detalii despre serviciile solicitate</li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              3. Cum utilizăm datele dvs.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Utilizăm informațiile colectate în următoarele scopuri:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
              <li>Pentru a vă furniza serviciile de curățenie solicitate</li>
              <li>Pentru a vă contacta în legătură cu programările și serviciile</li>
              <li>Pentru a îmbunătăți calitatea serviciilor noastre</li>
              <li>Pentru a răspunde întrebărilor și solicitărilor dvs.</li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              4. Protecția datelor
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ne angajăm să protejăm datele dvs. personale. Implementăm măsuri de securitate adecvate pentru a preveni accesul 
              neautorizat, modificarea, divulgarea sau distrugerea informațiilor dvs. personale. Datele dvs. nu vor fi vândute, 
              închiriate sau partajate cu terțe părți fără consimțământul dvs., cu excepția cazurilor în care este necesar pentru 
              furnizarea serviciilor solicitate.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              5. Drepturile dvs.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              În conformitate cu GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
              <li>Dreptul de acces la datele dvs. personale</li>
              <li>Dreptul de rectificare a datelor incorecte</li>
              <li>Dreptul de ștergere a datelor ("dreptul de a fi uitat")</li>
              <li>Dreptul de restricționare a prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul de opoziție la prelucrarea datelor</li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              6. Contact
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Pentru orice întrebări legate de această politică de confidențialitate sau pentru exercitarea drepturilor dvs., 
              vă rugăm să ne contactați:
            </p>
            <div className="space-y-2 text-base text-muted-foreground">
              <p><strong>Clean4Good</strong></p>
              <p>Telefon: <a href="tel:+40742575464" className="text-primary dark:text-primary hover:underline" data-testid="link-contact-phone">0742 575 464</a></p>
              <p>Adresă: Str. Tiberiu Ricci Nr.13, Cisnadie</p>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              7. Modificări ale politicii
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ne rezervăm dreptul de a actualiza această politică de confidențialitate periodic. Vă recomandăm să verificați 
              această pagină în mod regulat pentru a fi la curent cu orice modificări. Data ultimei actualizări este afișată 
              în partea de sus a acestei pagini.
            </p>
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
