import Icon1 from "@/assets/icons/1.png";
import Icon2 from "@/assets/icons/2.png";
import Icon3 from "@/assets/icons/3.png";
import Icon4 from "@/assets/icons/5.png";
import Icon5 from "@/assets/icons/6.png";
import Icon6 from "@/assets/icons/8.png";
import Icon7 from "@/assets/icons/9.png";
import Logo from "@/assets/logo.png";
import Services12 from "@/assets/services/ad.webp";
import Services from "@/assets/services/ads.jpg";
import Services7 from "@/assets/services/am.webp";
import Services4 from "@/assets/services/cm.png";
import Services6 from "@/assets/services/cro.png";
import Services15 from "@/assets/services/ecommerce.jpg";
import Services5 from "@/assets/services/email.jpg";
import Services13 from "@/assets/services/gd.jpg";
import Services8 from "@/assets/services/im.jpg";
import Services10 from "@/assets/services/mm.jpg";
import Services17 from "@/assets/services/music.jpg";
import Services2 from "@/assets/services/ppc.jpeg";
import Services1 from "@/assets/services/seo.svg";
import Services3 from "@/assets/services/smm.jpeg";
import Services16 from "@/assets/services/suspend.jpg";
import Services14 from "@/assets/services/uiux.jpg";
import Services9 from "@/assets/services/vm.jpg";
import Services11 from "@/assets/services/wd.jpg";

const logo = Logo;
const title = "CIPROXIN LLC";
const description =
  "Ciproxin LLC is a digital marketing agency in Bangladesh. We provide services like SEO, SMM, PPC, Email Marketing, and more.";
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

export type TService = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
};

const digitalServices: TService[] = [
  {
    title: "Music Distribution",
    subtitle: "Get your music on major streaming platforms",
    description:
      "Distribute your music across platforms like Spotify, Apple Music, and YouTube. We ensure your tracks are delivered to all major streaming services, giving you maximum exposure to a global audience.",
    image: Services17,
    price: 150,
  },
  {
    title: "Google Ads Campaign",
    subtitle: "Run targeted ads for maximum ROI",
    description:
      "Create, manage, and optimize Google Ads campaigns to drive traffic and conversions. Our data-driven approach ensures that your ads are targeted to the right audience for maximum return on investment.",
    image: Services,
    price: 200,
  },
  {
    title: "Unsuspend Ads Account",
    subtitle: "Get your Google Ads account back online",
    description:
      "Resolve issues with suspended Google Ads accounts and get your campaigns back up and running. We work directly with Google to identify and fix policy violations or other issues causing the suspension.",
    image: Services16,
    price: 250,
  },
  {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Boost your organic search rankings",
    description:
      "Optimize your website to rank higher on search engines and attract organic traffic through keyword research, content optimization, and technical SEO strategies.",
    image: Services1,
    price: 500,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    subtitle: "Drive instant traffic with paid ads",
    description:
      "Maximize your visibility with paid search ads on platforms like Google Ads. Achieve immediate results by targeting specific keywords and audiences.",
    image: Services2,
    price: 300,
  },
  {
    title: "Social Media Marketing",
    subtitle: "Engage your audience on social platforms",
    description:
      "Create compelling social media content and run targeted ad campaigns on platforms like Facebook, Instagram, and Twitter to build brand awareness and drive conversions.",
    image: Services3,
    price: 400,
  },
  {
    title: "Content Marketing",
    subtitle: "Craft engaging and valuable content",
    description:
      "Develop and distribute high-quality content that resonates with your audience, positioning your brand as an authority in your niche and driving organic traffic.",
    image: Services4,
    price: 350,
  },
  {
    title: "Email Marketing",
    subtitle: "Reach your customers directly",
    description:
      "Leverage personalized email campaigns to nurture leads, retain customers, and promote products or services directly to your subscribers.",
    image: Services5,
    price: 250,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    subtitle: "Turn visitors into customers",
    description:
      "Increase the percentage of website visitors who take desired actions such as making a purchase or signing up, by optimizing your website and user experience.",
    image: Services6,
    price: 600,
  },
  {
    title: "Affiliate Marketing",
    subtitle: "Expand your reach with affiliates",
    description:
      "Partner with affiliates to promote your products or services, paying them commissions on successful sales or leads they generate for you.",
    image: Services7,
    price: 700,
  },
  {
    title: "Influencer Marketing",
    subtitle: "Leverage influencers for brand promotion",
    description:
      "Collaborate with industry influencers to promote your brand to their engaged audiences, increasing visibility and credibility.",
    image: Services8,
    price: 550,
  },
  {
    title: "Video Marketing",
    subtitle: "Engage with impactful video content",
    description:
      "Create professional video content for platforms like YouTube, TikTok, or social media to engage users and build a strong visual brand presence.",
    image: Services9,
    price: 800,
  },
  {
    title: "Mobile Marketing",
    subtitle: "Connect with mobile users",
    description:
      "Reach your audience on mobile devices through SMS campaigns, in-app ads, and mobile-optimized content to drive engagement and conversions.",
    image: Services10,
    price: 450,
  },
  {
    title: "Web Development",
    subtitle: "Build high-performance websites",
    description:
      "Design and develop responsive, fast, and secure websites that align with your business goals, ensuring an optimal user experience.",
    image: Services11,
    price: 1500,
  },
  {
    title: "App Development",
    subtitle: "Create custom mobile applications",
    description:
      "Design and build mobile applications for both iOS and Android platforms to expand your digital presence and offer a seamless user experience.",
    image: Services12,
    price: 2000,
  },
  {
    title: "Graphic Design",
    subtitle: "Create stunning visual assets",
    description:
      "Develop professional and eye-catching graphics for websites, social media, and other digital marketing materials to enhance your brand’s appeal.",
    image: Services13,
    price: 500,
  },
  {
    title: "UI/UX Design",
    subtitle: "Optimize user experience and interfaces",
    description:
      "Design intuitive, user-friendly interfaces and improve user experience for both web and mobile applications to maximize customer satisfaction.",
    image: Services14,
    price: 1200,
  },
  {
    title: "E-commerce Solutions",
    subtitle: "Sell online with confidence",
    description:
      "Build and optimize e-commerce platforms, integrating payment gateways, security protocols, and customer management systems to drive online sales.",
    image: Services15,
    price: 2500,
  },
];

export const Config = {
  logo,
  title,
  description,
  sponsors,
  digitalServices,
} as const;
