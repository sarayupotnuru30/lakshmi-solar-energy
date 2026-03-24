import homeLights from "@/assets/products/home-lights.jpg";
import gardenLights from "@/assets/products/garden-lights.jpg";
import streetLights from "@/assets/products/street-lights.jpg";
import aviationLights from "@/assets/products/aviation-lights.jpg";
import trafficBlinkers from "@/assets/products/traffic-blinkers.jpg";
import onGrid from "@/assets/products/on-grid.jpg";
import offGrid from "@/assets/products/off-grid.jpg";
import insectTraps from "@/assets/products/insect-traps.jpg";
import solarFencing from "@/assets/products/solar-fencing.jpg";
import solarCctv from "@/assets/products/solar-cctv.jpg";
import waterHeater from "@/assets/products/water-heater.jpg";
import waterMotor from "@/assets/products/water-motor.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "home-lights",
    name: "Solar DC Home Lighting",
    description: "Portable solar-powered home lighting system with LED bulbs for reliable indoor illumination.",
    image: homeLights,
    category: "Grid & Lighting",
  },
  {
    id: "garden-lights",
    name: "Garden Lights",
    description: "Decorative solar garden lights that charge during the day and glow beautifully at night.",
    image: gardenLights,
    category: "Grid & Lighting",
  },
  {
    id: "street-lights",
    name: "Street Lights",
    description: "High-efficiency solar street lights for roads, colonies, and public areas.",
    image: streetLights,
    category: "Grid & Lighting",
  },
  {
    id: "aviation-lights",
    name: "Aviation Lights",
    description: "Solar-powered aviation obstruction lights for towers, buildings, and tall structures.",
    image: aviationLights,
    category: "Grid & Lighting",
  },
  {
    id: "traffic-blinkers",
    name: "Traffic Blinkers",
    description: "Solar traffic warning blinkers for road safety and construction zones.",
    image: trafficBlinkers,
    category: "Grid & Lighting",
  },
  {
    id: "on-grid",
    name: "On-Grid Solar Systems",
    description: "Grid-tied solar power systems that reduce electricity bills and feed excess power back.",
    image: onGrid,
    category: "Systems",
  },
  {
    id: "off-grid",
    name: "Off-Grid Solar Systems",
    description: "Standalone solar systems with battery backup for areas without reliable grid power.",
    image: offGrid,
    category: "Systems",
  },
  {
    id: "insect-traps",
    name: "Insect Traps",
    description: "Solar-powered UV insect traps for agriculture and outdoor pest control.",
    image: insectTraps,
    category: "Other Products",
  },
  {
    id: "solar-fencing",
    name: "Solar Fencing",
    description: "Solar electric fencing systems for farm protection and perimeter security.",
    image: solarFencing,
    category: "Other Products",
  },
  {
    id: "solar-cctv",
    name: "Solar CCTV",
    description: "Solar-powered surveillance cameras for remote and off-grid security monitoring.",
    image: solarCctv,
    category: "Other Products",
  },
  {
    id: "water-heater",
    name: "Water Heater (Supreme Solar)",
    description: "Supreme Solar water heaters with evacuated tube technology for efficient hot water.",
    image: waterHeater,
    category: "Other Products",
  },
  {
    id: "water-motor",
    name: "Water Motor Drives",
    description: "Solar-powered water pump VFD drives for agricultural and domestic water pumping.",
    image: waterMotor,
    category: "Other Products",
  },
];
