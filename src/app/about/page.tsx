import Image from 'next/image';
import { ShieldCheck, Target, Lightbulb, Users } from 'lucide-react';


export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#000b21] transition-all duration-300">
      {/* Hero Section - About Us */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-[#031436] transition-all duration-300">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mt-10 text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                PT Cakrawala Pancaran Bahari
              </h1>
              <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Perusahaan spesialis pengerukan dan reklamasi yang bergerak di bidang Pelabuhan, Alur Pelayaran, hingga Penambangan Pasir Lepas Pantai. Kami mengedepankan solusi optimal untuk setiap tantangan pengerukan yang dihadapi klien kami.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mt-10">
              <Image 
                src="/images/banner/kp1.png" 
                alt="Dredging Operation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full dark:bg-mode text-primary mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-slate-900">Visi Kami</h2>
            <p className="text-xl italic text-slate-600 dark:text-slate-300">
              "Menjadi perusahaan terdepan dalam spesialisasi penyedia unit cutter suction dredger serta pelayanan terkait pengerukan dan reklamasi".
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-slate-900">Misi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-salte font-bold text-2xl mb-4">01</div>
              <p className="text-slate-600 text-xl dark:text-slate-300">
                Memprioritaskan keselamatan, kesehatan dan lingkungan kerja serta Integritas dalam menjalankan operasional perusahaan.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-salte font-bold text-2xl mb-4">02</div>
              <p className="text-slate-600 text-xl dark:text-slate-300">
                Mengedepankan bisnis yang professional dan terpercaya dalam memberikan solusi serta keuntungan bersama.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-salte font-bold text-2xl mb-4">03</div>
              <p className="text-slate-600 text-xl dark:text-slate-300">
                Komitmen dalam menyediakan SDM yang terampil serta inovatif untuk meningkatkan efektivitas pelayanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-mode transition-all duration-300 text-white rounded-t-[20px]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Spesialisasi Dredging & Reklamasi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Pemetaan & Perencanaan', 'Dredging Aplikasi', 'Pengelolaan Disposal', 'Keselamatan Operasi'].map((item, idx) => (
              <div key={idx} className="p-6 border border-slate-700 rounded-xl hover:bg-primary/20 transition-colors">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}