import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-center text-4xl font-medium tracking-tight sm:text-5xl">
        Politika e Privatësisë
      </h1>
      
      <div className="prose prose-lg mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informacione të përgjithshme</h2>
          <p className="mb-4">
            Kjo politikë e privatësisë përshkruan praktikat tona të privatësisë për aplikacionin tonë mobile. 
            Ne nuk mbledhim asnjë informacion personal nga përdoruesit tanë. Aplikacioni 
            ynë mobile funksionon plotësisht pa nevojën për regjistrim ose identifikim personal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Mungesa e mbledhjes së të dhënave personale</h2>
          <p className="mb-4">
            Aplikacioni ynë mobile është projektuar për të respektuar plotësisht privatësinë tuaj. 
            Ju mund ta përdorni pa u regjistruar, pa dhënë emrin tuaj, email-in, ose çdo 
            informacion tjetër personal. Gjithçka funksionon lokalisht në pajisjen tuaj.
          </p>
          
          <h3 className="text-xl font-medium mb-2">2.1 Asnjë informacion personal</h3>
          <p className="mb-4">Ne nuk mbledhim:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Emra dhe mbiemra</li>
            <li>Adresa email</li>
            <li>Numra telefoni</li>
            <li>Adresa fizike</li>
            <li>Informacione të pagesës</li>
            <li>Foto ose imazhe personale</li>
            <li>Të dhëna biometrike</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">2.2 Informacione teknike minimale</h3>
          <p className="mb-4">
            Për funksionimin bazik të aplikacionit mobile, sistemi ynë mund të përdorë vetëm 
            informacione teknike të përgjithshme që nuk ju identifikojnë personalisht:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Lloji i pajisjes mobile (iOS/Android)</li>
            <li>Versioni i sistemit operativ</li>
            <li>Gjuha e preferuar e pajisjes</li>
            <li>Rezolucioni i ekranit (për optimizim të dizajnit)</li>
          </ul>
          <p className="text-sm text-gray-600">
            <em>Këto informacione janë anonime dhe nuk lidhen me identitetin tuaj.</em>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Si funksionon aplikacioni pa të dhëna personale</h2>
          <p className="mb-4">
            Meqenëse ne nuk mbledhim informacione personale, aplikacioni funksionon në mënyrë anonime:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Të gjitha veçoritë janë të disponueshme pa regjistruar</li>
            <li>Asnjë gjurmë e aktivitetit tuaj nuk ruhet</li>
            <li>Nuk krijohen profile përdoruesish</li>
            <li>Përmbajtja personalizohet vetëm në pajisjen tuaj lokalisht</li>
            <li>Asnjë komunikim nuk kryhet me serverët tanë për informacione personale</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Ndarja e informacioneve</h2>
          <p className="mb-4">
            Meqenëse ne nuk mbledhim informacione personale, nuk ka asgjë për të ndarë 
            me palë të treta. Privatësia juaj është 100% e garantuar.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Siguria dhe privatësia</h2>
          <p className="mb-4">
            Meqenëse ne nuk ruajmë asnjë informacion personal, nuk ka rrezik për sigurinë 
            e të dhënave tuaja. Megjithatë, ne:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Përdorim enkriptim të sigurt për të gjitha komunikimet</li>
            <li>Zbatojmë praktikat më të mira të sigurisë për aplikacionin mobile</li>
            <li>Kryejmë kontrolle të rregullta sigurie</li>
            <li>Nuk ruajmë asnjë log që përmban informacione identifikuese</li>
            <li>Aplikacioni funksionon lokalisht në pajisjen tuaj</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Ruajtja lokale në pajisje</h2>
          <p className="mb-4">
            Aplikacioni mobile mund të ruajë në pajisjen tuaj vetëm:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Preferencat tuaja (gjuha, tema, cilësimet e aplikacionit)</li>
            <li>Cache të përkohshme për performancë më të mirë</li>
            <li>Të dhëna të nevojshme për funksionimin e aplikacionit</li>
          </ul>
          <p className="text-sm text-gray-600">
            <em>Të gjitha këto të dhëna ruhen vetëm në pajisjen tuaj mobile dhe 
            nuk na dërgohen neve. Ju mund t'i fshini në çdo moment duke fshirë aplikacionin.</em>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Të drejtat tuaja</h2>
          <p className="mb-4">
            Meqenëse ne nuk mbledhim asnjë informacion personal, ju gëzoni automatikisht 
            të gjitha të drejtat e privatësisë:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Anonimiteti i plotë - Askush nuk di kush jeni</li>
            <li>Asnjë gjurmë - Aktiviteti juaj nuk regjistrohet</li>
            <li>Kontroll i plotë - Të gjitha të dhënat janë në pajisjen tuaj</li>
            <li>Asnjë kërkesë e nevojshme - Nuk ka asgjë për të fshirë</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Ruajtja e të dhënave në aplikacionin mobile</h2>
          <p className="mb-4">
            Ne nuk ruajmë asnjë të dhënë personale në serverët tanë.
            Si funksionon në pajisjen tuaj mobile:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Çdo informacion ruhet vetëm lokalisht në pajisjen tuaj</li>
            <li>Asgjë nuk dërgohet në serverët tanë</li>
            <li>Duke fshirë aplikacionin, fshihen të gjitha të dhënat</li>
            <li>Duke rivendosur pajisjen, hiqen të gjitha gjurmët</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Transferimi ndërkombëtar</h2>
          <p className="mb-4">
            Meqenëse ne nuk mbledhim informacione personale, nuk ka asnjë transferim 
            ndërkombëtar të të dhënave tuaja personale. Privatësia juaj mbetet e mbrojtur 
            pavarësisht nga vendi ku gjendeni.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Ndryshimet ne politike</h2>
          <p className="mb-4">
            Ne mund të përditësojmë këtë politikë privatësie kohë pas kohe. Ndryshimet 
            do të publikohen në këtë faqe me datën e përditësimit. Përdorimi i vazhdueshëm 
            i shërbimit pas ndryshimeve do të konsiderohet si pranon i kushteve të reja.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Kontakti</h2>
          <p className="mb-4">
            Për pyetje rreth kësaj politike të privatësisë, na kontaktoni në: oferta24.shoppingoffers@gmail.com
          </p>
        </section>

        <div className="text-sm text-gray-600 mt-8 pt-8 border-t">
          <p>Kjo politikë u përditësua për herë të fundit më: {new Date().toLocaleDateString('sq-AL')}</p>
        </div>
      </div>
    </div>
  );
}
