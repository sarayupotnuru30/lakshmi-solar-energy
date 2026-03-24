import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";
import { products } from "@/data/products";

const PHONE = "919642278752";

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("product") || "";

  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "", product: preselected });
  const selectedProduct = products.find((p) => p.id === form.product);

  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, product: preselected }));
  }, [preselected]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productName = selectedProduct?.name || "your solar products";
    const msg = `Hi, I am *${form.name}*.%0AI am interested in *${productName}*.%0APhone: ${form.phone}%0AAddress: ${form.address}%0AMessage: ${form.message}%0A%0APlease share details.`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  return (
    <div>
      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Enquiry</h1>
          <p className="opacity-90">Get in touch — we'll respond via WhatsApp</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Product Preview */}
            <div className="md:col-span-2">
              <ScrollAnimator direction="left">
                {selectedProduct ? (
                  <div className="bg-card rounded-xl border border-border overflow-hidden sticky top-24">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full aspect-square object-cover" loading="lazy" width={512} height={512} />
                    <div className="p-4">
                      <h3 className="font-heading font-semibold">{selectedProduct.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{selectedProduct.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-muted rounded-xl p-8 text-center">
                    <MessageCircle size={48} className="mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground text-sm">Select a product or send a general enquiry</p>
                  </div>
                )}
              </ScrollAnimator>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <ScrollAnimator direction="right">
                <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 space-y-5">
                  <div>
                    <Label>Product</Label>
                    <Select value={form.product} onValueChange={(v) => setForm({ ...form, product: v })}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select a product" /></SelectTrigger>
                      <SelectContent>
                        {products.map((p) => (
                          <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Name *</Label>
                    <Input required className="mt-1" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div>
                    <Label>Phone *</Label>
                    <Input required type="tel" className="mt-1" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input className="mt-1" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your address" />
                  </div>
                  <div>
                    <Label>Message</Label>
                    <Textarea className="mt-1" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific requirements..." />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base">
                    <MessageCircle size={20} /> Send via WhatsApp
                  </Button>
                </form>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
