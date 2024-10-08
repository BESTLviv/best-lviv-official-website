import Link from "next/link";
import { maruipol_bold, inter } from "../../fonts/fonts"
import Image from "next/image";

const socialLinks = [
  { src: "/linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/bestlviv/posts" },
  { src: "/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/best_lviv?igsh=dTNwNDc3YTJoOW9t" },
  { src: "/telegram.svg", alt: "Telegram", href: "https://t.me/bestlviv" },
  { src: "/tik_tok.svg", alt: "TikTok", href: "https://www.tiktok.com/@best__lviv?_t=8pY6lfMTdkk&_r=1" },
  { src: "/youtube.svg", alt: "YouTube", href: "https://www.youtube.com/@BEST_Lviv" },
];

const footerLinks = [
  { href: "/about-us", text: "Про нас" },
  { href: "/blog", text: "Блог" },
  { href: "/events", text: "Івенти" },
  { href: "/opportunities", text: "Можливості" },
  { href: "/gallery", text: "Галерея" },
  { href: "/qa", text: "Q/A" },
  { href: "/contacts", text: "Контакти" },
];

const renderSocialLinks = () =>
  socialLinks.map(({ src, alt, href }) => (
    <a target="_blank" key={alt} href={href} className="hover:scale-105">
      <Image
        src={src}
        width={30}
        height={30}
        alt={alt}
      />
    </a>
  ));

const renderFooterLinks = () =>
  footerLinks.map(({ href, text }) => (
    <Link key={text} href={href} className="hover:scale-105">
      <h1>{text}</h1>
    </Link>
  ));

export default function Footer() {
  return (
    <div className={`${inter.className} w-full min-h-64 bg-best-blue px-6 py-6 md:p-0 relative`}>
      <div className="absolute inset-0 pointer-events-none lg:flex hidden">
        <Image
          src="/Vector.svg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="absolute inset-0 pointer-events-none flex lg:hidden">
        <Image
          src="/Vector_mobile.svg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="text-white flex lg:flex-row flex-col justify-between items-center py-6 md:px-16 xl:px-52 lg:py-10 relative z-10">
        <div className="flex text-left z-10">
          <h1 className={`${maruipol_bold.className} text-white lg:max-w-xs text-3xl`}>
            МГО “Рада студентів технічних університетів” ЄДРПОУ
          </h1>
        </div>
        <div className="flex lg:px-10 z-10">
          <Image
            src="/Line.svg"
            width={30}
            height={30}
            className="w-auto lg:flex hidden"
            alt="Line"
          />
          <Image
            src="/Line_vertical.svg"
            width={30}
            height={40}
            className="w-auto flex lg:hidden py-8"
            alt="Line Vertical"
          />
        </div>
        <div className="lg:flex hidden text-left flex-row text-white text-sm gap-8 z-10 lg:px-24">
          <div className="flex flex-col gap-3">
            {renderFooterLinks().slice(0, 4)}
          </div>
          <div className="flex flex-col gap-3">
            {renderFooterLinks().slice(4)}
          </div>
        </div>
        <div className="flex flex-col h-full justify-between z-10 gap-6 w-full lg:w-auto">
          <div className="flex flex-row justify-between">
            {renderSocialLinks()}
          </div>
          <div>
            <h1 className="font-bold">Адреса:</h1>
            <p>вул. С. Бандери, 12, м. Львів, Україна</p>
          </div>
          <div>
            <h1 className="font-bold">Email:</h1>
            <p>lviv@best-eu.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
