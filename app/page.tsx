import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import BannerSlider from "@/components/banner-slider";
import GameCard from "@/components/game-card";
import NewsCard, { NewsCardMobile } from "@/components/news-card";
import PromoCard, { PromoCardMobile } from "@/components/promo-card";
import WhyUsCard from "@/components/why-us-card";

export default function Home() {
  const itemsDesktop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const itemsMobile = itemsDesktop.slice(0, 6);
  return (
    <>
      {/* Banner Slider */}
      <section className="px-0 pt-20 sm:px-4">
        <div className="container">
          <div className="w-full">
            <BannerSlider />
          </div>
        </div>
      </section>
      {/* ./ Banner Slider */}

      {/* Lebih Hemat */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Lebih Hemat Pakai Codacash
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Lebih Hemat */}

      {/* Popular */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Populer
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Popular */}

      {/* New Titles */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              New Titles
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ New Titles */}

      {/* Promo */}
      <section className="section-bg-1">
        <div className="section-bg-2 pb-16 pt-8 md:px-4">
          <div className="container">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-extrabold text-white max-md:px-4 md:text-4xl">
                Promo
              </h2>

              {/* News Cards Desktop */}
              <div className="grid gap-4 max-md:hidden sm:grid-cols-2 md:grid-cols-3">
                {/* Card */}
                <PromoCard />
              </div>
              {/* ./ News Cards Desktop */}

              {/* News Cards Mobile */}
              <div className="w-full md:hidden">
                {/* Card */}
                <PromoCardMobile />
              </div>
              {/* ./ News Cards Mobile */}
            </div>
          </div>
        </div>
      </section>
      {/* ./ Promo */}

      {/* Games */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Games
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Games */}

      {/* Entertaiment */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Entertaiment
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Entertaiment */}

      {/* Voucher */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Beli Kode Voucher
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Voucher */}

      {/* News & Updates */}
      <section className="pb-16 pt-8 md:px-4">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white max-md:px-4 md:text-4xl">
              News and Updates
            </h2>

            {/* News Cards Desktop */}
            <div className="grid gap-4 max-md:hidden sm:grid-cols-2 md:grid-cols-3">
              {/* Card */}
              <NewsCard />
            </div>
            {/* ./ News Cards Desktop */}

            {/* News Cards Mobile */}
            <div className="w-full md:hidden">
              {/* Card */}
              <NewsCardMobile />
            </div>
            {/* ./ News Cards Mobile */}
          </div>
        </div>
      </section>
      {/* ./ News & Updates */}

      {/* Codashop Indonesia */}
      <section className="px-4 pb-16 pt-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Codashop Indonesia
            </h2>
            <div>
              <h3 className="font-bold text-white">
                Codashop: Website top-up terbesar, tercepat dan terpercaya di
                Indonesia
              </h3>
              <p className="text-sm text-white/80">
                Setiap bulannya, jutaan gamers menggunakan Codashop untuk
                melakukan pembelian kredit game dengan lancar: tanpa registrasi
                ataupun log-in, dan kredit permainan akan ditambahkan secara
                instan. Top-up Mobile Legends, Free Fire, Ragnarok M, dan
                berbagai game lainnya!
              </p>
            </div>

            {/* Why Us Cards */}
            <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Card */}
              <WhyUsCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Codashop Indonesia */}
    </>
  );
}
