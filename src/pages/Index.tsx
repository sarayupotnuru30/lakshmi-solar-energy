// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Sun, Shield, Zap, Users, ChevronRight, Leaf, Award } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import ScrollAnimator from "@/components/ScrollAnimator";
// import heroBg from "@/assets/hero-bg-new.jpg";
// import { products } from "@/data/products";

// const features = [
//   { icon: Sun, title: "6+ Years Experience", desc: "Trusted solar solutions since day one" },
//   { icon: Users, title: "Expert Technicians", desc: "Skilled team for quality installations" },
//   { icon: Shield, title: "Reliable & Durable", desc: "Long-lasting products with warranty" },
//   { icon: Zap, title: "Cost Effective", desc: "Save on electricity bills instantly" },
// ];

// const stats = [
//   { value: "500+", label: "Installations" },
//   { value: "6+", label: "Years Experience" },
//   { value: "12+", label: "Product Range" },
//   { value: "98%", label: "Happy Customers" },
// ];

// const Index = () => (
//   <div>
//     {/* Hero */}
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="relative z-10 container mx-auto px-4">
//         <div className="max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white rounded-full px-4 py-2 text-sm mb-6"
//           >
//             <Leaf size={16} /> Powering a Greener Tomorrow
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
//           >
//             Lakshmi Solar
//             <span className="block text-primary">Energy</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.25 }}
//             className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
//           >
//             Powering Your Future with Solar Solutions — reliable, cost-effective, and built to last.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
//               <Link to="/products">Explore Products <ChevronRight size={18} /></Link>
//             </Button>
//             <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 text-base px-8 h-12 border-0">
//               <Link to="/enquiry">Get Enquiry</Link>
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Stats bar */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-white/10"
//       >
//         <div className="container mx-auto px-4 py-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
//             {stats.map((s) => (
//               <div key={s.label}>
//                 <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{s.value}</div>
//                 <div className="text-sm text-white/70">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>

//     {/* Features */}
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <ScrollAnimator>
//           <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
//           <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Trusted by hundreds of customers across Vijayawada and Andhra Pradesh</p>
//         </ScrollAnimator>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((f, i) => (
//             <ScrollAnimator key={f.title} delay={i * 0.1}>
//               <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group">
//                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
//                   <f.icon className="text-primary" size={28} />
//                 </div>
//                 <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
//                 <p className="text-muted-foreground text-sm">{f.desc}</p>
//               </div>
//             </ScrollAnimator>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* Featured Products */}
//     <section className="py-20 bg-muted">
//       <div className="container mx-auto px-4">
//         <ScrollAnimator>
//           <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Our Products</h2>
//           <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Complete range of solar energy solutions</p>
//         </ScrollAnimator>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.slice(0, 8).map((p, i) => (
//             <ScrollAnimator key={p.id} delay={i * 0.05}>
//               <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
//                 <div className="aspect-square overflow-hidden">
//                   <img src={p.image} alt={p.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-heading font-semibold mb-1">{p.name}</h3>
//                   <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{p.description}</p>
//                   <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
//                     <Link to={`/enquiry?product=${p.id}`}>Enquire Now</Link>
//                   </Button>
//                 </div>
//               </div>
//             </ScrollAnimator>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//             <Link to="/products">View All Products <ChevronRight size={18} /></Link>
//           </Button>
//         </div>
//       </div>
//     </section>

//     {/* CTA */}
//     <section className="py-20 bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 text-center">
//         <ScrollAnimator>
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Go Solar?</h2>
//           <p className="opacity-90 mb-8 max-w-lg mx-auto">Get a free consultation and switch to clean, renewable energy today.</p>
//           <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 text-base px-8 border-0">
//             <Link to="/enquiry">Get Free Enquiry</Link>
//           </Button>
//         </ScrollAnimator>
//       </div>
//     </section>
//   </div>
// );

// export default Index;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Shield, Zap, Users, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimator from "@/components/ScrollAnimator";
import heroBg from "@/assets/hero-bg-new.jpg";
import { products } from "@/data/products";

const features = [
  { icon: Sun, title: "6+ Years Experience", desc: "Trusted solar solutions since day one" },
  { icon: Users, title: "Expert Technicians", desc: "Skilled team for quality installations" },
  { icon: Shield, title: "Reliable & Durable", desc: "Long-lasting products with warranty" },
  { icon: Zap, title: "Cost Effective", desc: "Save on electricity bills instantly" },
];

const stats = [
  { value: "500+", label: "Installations" },
  { value: "6+", label: "Years Experience" },
  { value: "12+", label: "Product Range" },
  { value: "98%", label: "Happy Customers" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white rounded-full px-4 py-2 text-sm mb-6"
          >
            <Leaf size={16} /> Powering a Greener Tomorrow
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Lakshmi Solar <span className="text-primary">Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          >
            Powering Your Future with Solar Solutions — reliable, cost-effective, and built to last.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12">
              <Link to="/products">Explore Products <ChevronRight size={18} /></Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 text-base px-8 h-12 border-0">
              <Link to="/enquiry">Get Enquiry</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{s.value}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>

    {/* Features */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Trusted by hundreds of customers across Vijayawada and Andhra Pradesh</p>
        </ScrollAnimator>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollAnimator key={f.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Our Products</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Complete range of solar energy solutions</p>
        </ScrollAnimator>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((p, i) => (
            <ScrollAnimator key={p.id} delay={i * 0.05}>
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{p.description}</p>
                  <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to={`/enquiry?product=${p.id}`}>Enquire Now</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/products">View All Products <ChevronRight size={18} /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimator>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="opacity-90 mb-8 max-w-lg mx-auto">Get a free consultation and switch to clean, renewable energy today.</p>
          <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 text-base px-8 border-0">
            <Link to="/enquiry">Get Free Enquiry</Link>
          </Button>
        </ScrollAnimator>
      </div>
    </section>
  </div>
);

export default Index;