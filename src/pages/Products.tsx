import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimator from "@/components/ScrollAnimator";
import { products } from "@/data/products";

const categories = ["All", "Grid & Lighting", "Systems", "Other Products"];

import { useState } from "react";

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      {/* Banner */}
      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Our Products</h1>
          <p className="opacity-90">Complete range of solar energy solutions</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ScrollAnimator key={p.id} delay={i * 0.04}>
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-medium text-primary mb-1">{p.category}</span>
                    <h3 className="font-heading font-semibold text-lg mb-2">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{p.description}</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link to={`/enquiry?product=${p.id}`}>Enquire Now</Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
