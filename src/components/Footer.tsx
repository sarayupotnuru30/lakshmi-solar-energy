import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Youtube, Facebook, Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground text-white relative">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Lakshmi Solar Energy" className="h-16 w-auto mb-4 rounded-md bg-white p-1" />
            <p className="text-sm opacity-80 leading-relaxed">
              Powering your future with reliable, cost-effective solar energy solutions since 6+ years.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://youtube.com/@lsevja" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/enquiry", label: "Enquiry" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {["On-Grid Systems", "Off-Grid Systems", "Street Lights", "Water Heater", "Solar CCTV", "Solar Fencing"].map((p) => (
                <li key={p}>
                  <Link to="/products" className="hover:text-primary transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>9642278752 / 8885278752</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>lakshmisolarenergykesava@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Opp. Tara Screen, Pipula Road, Santhi Nagar, Payakapuram, Vijayawada – 520015</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm opacity-60">
          <p>© {new Date().getFullYear()} Lakshmi Solar Energy. All rights reserved.</p>
          
          <div className="flex justify-center items-center gap-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="inline h-4 w-4 text-red-500 mx-1" fill="currentColor" />
            <span>by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 font-bold hover:underline ml-1"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;