import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-17">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
  Pyetje
  <br />
  <span className="text-muted-foreground">të shpeshta</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
            Gjej përgjigje për pyetjet që bëhen më shpesh.
        </p>
      </div>
      <Accordion type="single" collapsible defaultValue="branding" className="grid w-full gap-4">
        <AccordionItemFAQs value="branding">
          <AccordionTriggerFAQs>Çfarë është Oferta24?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Oferta24 është një platformë që të ndihmon të gjesh ofertat dhe katalogët më të fundit nga supermarketet në qytetin tënd.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="supermarkets">
          <AccordionTriggerFAQs>A është Oferta24 vetëm për supermarketet?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Për momentin, Oferta24 përfshin vetëm katalogët dhe ofertat nga supermarketet kryesore. Në të ardhmen do të shtohen edhe biznese të tjera si dyqane elektronike, produkte shtëpie, kozmetike dhe farmaci për t'i pasur të gjitha ofertat në një vend të vetëm.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="search">
          <AccordionTriggerFAQs>Si mund të kërkoj produkte ose kategori?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>Mund të përdorësh fushën e kërkimit ose filtrat sipas kategorive për të gjetur produktet që të interesojnë.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="shopping-list">
          <AccordionTriggerFAQs>Si funksionon lista e blerjeve?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>Lista e blerjeve të lejon të ruash produktet që dëshiron të blesh dhe t'i organizosh sipas nevojave të tua. Mund ta përdorësh si një kujtes për blerjet e tua.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="future-features">
          <AccordionTriggerFAQs>A do të shtohen veçori të reja në të ardhmen?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>Po, ekipi i Oferta24 po punon vazhdimisht për të shtuar funksione të reja që e bëjnë përvojën më të plotë dhe më të lehtë për përdoruesit.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}


