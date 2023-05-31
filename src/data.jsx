import Delivery1 from "./assets/images/delivery-1.png";
import About from "./assets/images/about.png";
import FeatureCardBg from "./assets/images/feature-bg-card.jpg";
import Feature1 from "./assets/images/features-1.png";
import Feature2 from "./assets/images/features-2.png";
import Feature3 from "./assets/images/features-3.png";
import Feature4 from "./assets/images/features-4.png";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import Logo from "./assets/images/logo.png";

export const heroData = {
  title: " Order Products Faster Easier",
  subtitle:
    "Order your favourite foods at any time and we will deliver them right to where you are.",
  btnText: "Get Started",
  image: Delivery1,
};

export const aboutData = {
  image: About,
  title: "Find out a Little More About Us",
  subTitle:
    "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
};

export const featureData = {
  title: "Some service we offer",
  subtitle:
    "With our app you can view the route of your order, form our local headquarters to the place where  you are. Look for the app now!",
  list: [
    {
      image: Feature1,
      bgImage: FeatureCardBg,
      title: "Payment done",
      description: "Pay with a visa / paypal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2,
      bgImage: FeatureCardBg,
      title: "Find your product",
      description: "We offer sale of products through the internet...",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3,
      bgImage: FeatureCardBg,
      title: "Print Out",
      description: "Print out service gives you convenience if somebody you need print",
      linkText: "Learn more",
      delay: "800",
    },
    {
      image: Feature4,
      bgImage: FeatureCardBg,
      title: "Product Received",
      description: "In our app you can see the delayed time of your order",
      linkText: "Learn more",
      delay: "1000",
    },
  ],
};

export const navigationData = [
  {
    name: "Delivery",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

export const ctaData = {
  title: "Contact Us from here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: Logo,
  address: "Product texas, 234 Broke Shop, Avenue Streen, Block 22",
  email: "info@gmail.com",
  phone: "1-222-345-666",
  list: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign-up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q&A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyRightData = {
  text: "© Product Texas, 2023. All rights reserved.",
  icon: <BsChatDotsFill />,
};
