import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";

const Contact = () => (
  <div>
    <section className="pt-24 pb-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
        <p className="opacity-90">We'd love to hear from you</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Phone,
              title: "Phone",
              lines: ["9642278752", "8885278752"],
              href: "tel:+919642278752",
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["lakshmisolarenergykesava@gmail.com"],
              href: "mailto:lakshmisolarenergykesava@gmail.com",
            },
            {
              icon: MapPin,
              title: "Address",
              lines: ["Opp. Tara Screen, Pipula Road", "Santhi Nagar, Payakapuram", "Vijayawada – 520015"],
            },
            {
              icon: Clock,
              title: "Working Hours",
              lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
            },
          ].map((item, i) => (
            <ScrollAnimator key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                {item.lines.map((line, j) =>
                  item.href && j === 0 ? (
                    <a key={j} href={item.href} className="block text-muted-foreground text-sm hover:text-primary transition-colors">{line}</a>
                  ) : (
                    <p key={j} className="text-muted-foreground text-sm">{line}</p>
                  )
                )}
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Map embed */}
        <ScrollAnimator>
          <div className="mt-12 rounded-xl overflow-hidden border border-border">
            <iframe
              title="Lakshmi Solar Energy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5!2d80.63!3d16.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzM2LjAiTiA4MMKwMzcnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
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
