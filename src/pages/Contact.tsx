import { Phone, MapPin, Youtube, Facebook, MessageCircle } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Opp. Tara Screen, Pipula Road", "Santhi Nagar, Payakapuram", "Vijayawada – 520015"],
    linkText: "Open in Google Maps →",
    linkHref: "https://www.google.com/maps/place/LAKSHMI+SOLAR+ENERGY/@16.5444196,80.6394458,835m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a35e5bfbf7bb1e5:0x400cd3b88e331dd1!8m2!3d16.5444197!4d80.6443167!16s%2Fg%2F11h6d62cgd",
    iconBg: "bg-primary",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 9642278752", "+91 8885278752"],
    linkText: undefined,
    linkHref: undefined,
    iconBg: "bg-primary",
    phoneLinks: true,
  },
  {
    icon: Youtube,
    title: "YouTube",
    lines: ["Watch our installations", "and product demos"],
    linkText: "Visit Channel →",
    linkHref: "https://youtube.com/@lsevja",
    iconBg: "bg-[hsl(0,100%,50%)]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Message us directly for", "quick enquiries!"],
    linkText: "Chat on WhatsApp →",
    linkHref: "https://wa.me/919642278752",
    iconBg: "bg-[hsl(142,70%,45%)]",
  },
];

const Contact = () => (
  <div>
    {/* Header */}
    <section className="pt-24 pb-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="uppercase tracking-widest text-sm font-semibold mb-2 text-primary-foreground/80">Get In Touch</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="opacity-90 max-w-lg mx-auto">Have questions or want to place a bulk order? Reach out to us!</p>
      </div>
    </section>

    {/* Cards */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((item, i) => (
            <ScrollAnimator key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center mb-4`}>
                  <item.icon className="text-white" size={26} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <div className="flex-1">
                  {item.phoneLinks ? (
                    item.lines.map((line, j) => (
                      <a key={j} href={`tel:${line.replace(/\s/g, "")}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors underline underline-offset-2 mb-1">
                        {line}
                      </a>
                    ))
                  ) : (
                    item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground text-sm">{line}</p>
                    ))
                  )}
                </div>
                {item.linkText && item.linkHref && (
                  <a
                    href={item.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-primary font-semibold text-sm hover:underline"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Social Links */}
        <ScrollAnimator>
          <div className="mt-10 flex justify-center gap-4">
            <a href="https://youtube.com/@lsevja" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-muted hover:bg-primary/10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors">
              <Youtube size={18} className="text-[hsl(0,100%,50%)]" /> YouTube
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-muted hover:bg-primary/10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors">
              <Facebook size={18} className="text-[hsl(220,80%,50%)]" /> Facebook
            </a>
            <a href="https://wa.me/919642278752" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-muted hover:bg-primary/10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors">
              <MessageCircle size={18} className="text-[hsl(142,70%,45%)]" /> WhatsApp
            </a>
          </div>
        </ScrollAnimator>

        {/* Map */}
        <ScrollAnimator>
          <div className="mt-12 rounded-xl overflow-hidden border border-border">
            <iframe
              title="Lakshmi Solar Energy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835!2d80.6394458!3d16.5444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5bfbf7bb1e5%3A0x400cd3b88e331dd1!2sLAKSHMI%20SOLAR%20ENERGY!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollAnimator>
      </div>
    </section>
  </div>
);

export default Contact;
