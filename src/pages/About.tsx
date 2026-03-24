import { CheckCircle } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";
import aboutBg from "@/assets/about-bg.jpg";

const highlights = [
  "6+ years of experience in the solar energy industry",
  "Skilled and experienced installation technicians",
  "Focus on quality installations and premium components",
  "Reliable and cost-effective energy solutions",
  "Serving Vijayawada, Andhra Pradesh and surrounding areas",
  "Complete range of solar products for homes and businesses",
  "Post-installation support and maintenance services",
  "Government subsidy assistance for solar installations",
];

const About = () => (
  <div>
    {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={aboutBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center text-white">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">About Us</h1>
        <p className="text-lg opacity-90">Know our story and mission</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollAnimator>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6">
            Your Trusted Solar Energy Partner
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12">
            Lakshmi Solar Energy has been at the forefront of the solar energy revolution in Vijayawada
            for over 6 years. We specialize in designing, supplying, and installing high-quality solar
            energy systems for residential, commercial, and agricultural applications.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <ScrollAnimator key={i} delay={i * 0.05}>
              <div className="flex items-start gap-3 bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow">
                <CheckCircle className="text-secondary shrink-0 mt-0.5" size={22} />
                <p className="text-sm font-medium">{h}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator>
          <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              To make clean, renewable solar energy accessible and affordable for every home and
              business, while providing exceptional quality, service, and support that our
              customers can rely on for decades.
            </p>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  </div>
);

export default About;
