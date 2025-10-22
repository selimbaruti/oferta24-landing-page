import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Oferta24",
  description: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-center text-4xl font-medium tracking-tight sm:text-5xl">Kushtet e përdorimit</h1>
      
      <div className="prose prose-lg mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Pranimi i kushteve</h2>
          <p className="mb-4">
            Duke përdorur aplikacionin Oferta24, ju pranoni të përmbaheni nga këto kushte dhe kushtet e përdorimit. 
            Nëse nuk pajtoheni me ndonjë nga këto kushte, ju lutem mos përdorni shërbimin tonë.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Përshkrimi i shërbimit</h2>
          <p className="mb-4">
            Oferta24 është një aplikacion që ofron informacione për produkte dhe oferta nga dyqane të ndryshme. 
            Ne mundohemi të sigurojmë informacione të sakta dhe të azhurnuara, por nuk garantojmë saktësinë e plotë të të dhënave.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Përdorimi i aplikacionit</h2>
          <p className="mb-4">
            Ju zotoheni të përdorni aplikacionin vetëm për qëllime ligjore dhe në përputhje me të gjitha ligjet dhe rregulloret e zbatueshme. 
            Nuk duhet të:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Përdorni aplikacionin për aktivitete të paligjshme</li>
            <li>Tentoni të hakoni apo dëmtoni sistemin</li>
            <li>Shpërndani viruse apo programe të dëmshme</li>
            <li>Kopjoni apo riprodhoni përmbajtjen pa leje</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Të dhënat personale</h2>
          <p className="mb-4">
            Mbledhja dhe përdorimi i të dhënave tuaja personale rregullohet nga Politika jonë e Privatësisë, 
            e cila është pjesë integrale e këtyre kushteve.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Përgjegjësia</h2>
          <p className="mb-4">
            Oferta24 nuk është përgjegjës për:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Dëmet e shkaktuara nga përdorimi i aplikacionit</li>
            <li>Saktësinë e informacioneve të ofruara nga palë të treta</li>
            <li>Transaksionet midis përdoruesve dhe dyqaneve</li>
            <li>Ndryshimet në çmimet apo ofertat</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Ndryshimet në kushte</h2>
          <p className="mb-4">
            Ne rezervojmë të drejtën të ndryshojmë këto kushte në çdo kohë. Ndryshimet do të publikohen në këtë faqe 
            dhe do të hyjnë në fuqi menjëherë pas publikimit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Kontakti</h2>
          <p className="mb-4">
            Për pyetje rreth këtyre kushteve, na kontaktoni në: oferta24.shoppingoffers@gmail.com
          </p>
        </section>

        <div className="text-sm text-gray-600 mt-8 pt-8 border-t">
          <p>Këto kushte u përditësuan për herë të fundit më: {new Date().toLocaleDateString('sq-AL')}</p>
        </div>
      </div>
    </div>
  );
}
