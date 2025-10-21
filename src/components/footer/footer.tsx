import { FooterBlur } from "@/components/footer/footer-blur";
import Link from "next/link";

const links = [
  {
    title: "Aplikacioni",
    links: [
      {
        label: "Për Android",
        href: "https://play.google.com/store",
        title: "Shkarko për Android",
      },
      {
        label: "Për iPhone",
        href: "https://apps.apple.com/",
        title: "Shkarko për iOS",
      },
    ],
  },
  {
    title: "Kompania",
    links: [
      {
        label: "Kushtet e përdorimit",
        href: "/terms-and-conditions",
        title: "Lexo kushtet e përdorimit",
      },
      {
        label: "Politika e privatësisë",
        href: "/privacy-policy",
        title: "Lexo politikën e privatësisë",
      },
    ],
  },
  {
    title: "Na kontakto",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <span>E-mail</span>
          </div>
        ),
        href: "mailto:oferta24.shoppingoffers@gmail.com",
        title: "Na dërgo një email",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <span>Instagram</span>
          </div>
        ),
        href: "https://www.instagram.com/oferta24.al/",
        title: "Na ndiq në Instagram",
      },
    ],
  },
];


export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 tracking-tight md:grid-cols-3">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
