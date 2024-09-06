import Icon1 from "@/assets/icons/1.png";
import Icon2 from "@/assets/icons/2.png";
import Icon3 from "@/assets/icons/3.png";
import Icon4 from "@/assets/icons/5.png";
import Icon5 from "@/assets/icons/6.png";
import Icon6 from "@/assets/icons/8.png";
import Icon7 from "@/assets/icons/9.png";
import Logo from "@/assets/logo.png";

const logo = Logo;
const title = "Pixel Fusionary";
const description =
  "Pixel Fusionary is a digital marketing agency in Bangladesh. We provide services like SEO, SMM, PPC, Email Marketing, and more.";
const sponsors = [
  {
    image: Icon1,
  },
  {
    image: Icon2,
  },
  {
    image: Icon3,
  },
  {
    image: Icon4,
  },
  {
    image: Icon5,
  },
  {
    image: Icon6,
  },
  {
    image: Icon7,
  },
];

export const Config = {
  logo,
  title,
  description,
  sponsors,
} as const;
