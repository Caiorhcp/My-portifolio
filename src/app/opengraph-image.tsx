import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Caio Gonçalves, desenvolvedor full stack de sites, apps e sistemas";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage("Desenvolvo sites, apps e sistemas", "caio gonçalves · portfólio e blog");
}
