import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white" style={{ "--soft-blue-1": "#E9F5FF", "--soft-blue-2": "#CFE9FF", "--accent-blue": "#3B82F6" }}>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a className="flex items-center gap-3" href="#home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--soft-blue-2)] to-[var(--soft-blue-1)] flex items-center justify-center shadow-inner">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12l20-8-5 8 5 8-20-8z" fill="#ffffff" opacity="0.95"/>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold">خدمات مهاجرتی</h1>
              <p className="text-xs text-gray-500">راهنمایی، پرونده‌سازی و مشاوره‌ی کامل</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[var(--accent-blue)]">خدمات</a>
            <a href="#process" className="hover:text-[var(--accent-blue)]">روند کار</a>
            <a href="#about" className="hover:text-[var(--accent-blue)]">درباره ما</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-[var(--accent-blue)] text-white">تماس</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="menu" className="p-2 rounded-md border">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#334155" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">مهاجرت هوشمندانه و مطمئن — با تیمِ همراهِ شما</h2>
            <p className="mt-4 text-gray-600">ما روند مهاجرتی شما را ساده می‌کنیم: از ارزیابی شرایط تا ارائه مدارک، تقویت پرونده و پیگیری درخواست.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent-blue)] text-white font-medium">درخواست مشاوره</a>
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-[var(--accent-blue)]">دیدن خدمات</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-[var(--soft-blue-1)]">
                <h4 className="text-sm font-semibold">برنامه‌ریزی اختصاصی</h4>
                <p className="text-xs text-gray-600 mt-1">استراتژی متناسب با وضعیتِ شما</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--soft-blue-1)]">
                <h4 className="text-sm font-semibold">پشتیبانی مدارک</h4>
                <p className="text-xs text-gray-600 mt-1">تهیه و ویرایش مدارک همراه با چک لیست</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl shadow-lg overflow-hidden bg-white border">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">وضعیت پرونده</p>
                    <h3 className="text-xl font-semibold">بررسی اولیه — رایگان</h3>
                  </div>
                  <div className="text-xs text-gray-400">تا 48 ساعت پاسخ</div>
                </div>

                <div className="mt-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><Check size={16}/> ارزیابی شرایط</li>
                    <li className="flex items-center gap-2"><Check size={16}/> تهیه مدارک</li>
                    <li className="flex items-center gap-2"><Check size={16}/> ارسال و پیگیری</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <a href="#contact" className="inline-block px-4 py-2 rounded-md bg-[var(--accent-blue)] text-white">شروع کنید</a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[var(--soft-blue-2)] to-white p-4">
                <p className="text-xs text-gray-600">پوشش کشورها:</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/60 border">استرالیا</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/60 border">نیوزیلند</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/60 border">سوئد</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/60 border">نروژ</span>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-8 w-40 h-40 rounded-full opacity-30 bg-[var(--soft-blue-2)] blur-2xl"></div>
          </motion.div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-bold">خدمات ما</h3>
          <p className="text-gray-600 mt-2">بسته‌ای کامل از ارزیابی تا پذیرش و همراهی پس از ورود</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "بررسی صلاحیت", desc: "ارزیابی رزومه، مدارک و مسیر مناسب" },
              { title: "درخواست ویزا", desc: "تهیه و تکمیل فرم‌ها و ارسال درخواست" },
              { title: "آمادگی مصاحبه", desc: "تمرین و راهنمایی برای مصاحبه‌های ویزا" },
              { title: "پشتیبانی بعد از ورود", desc: "یافتن محل زندگی، مدرسه و اطلاعات محلی" },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="p-5 rounded-lg border bg-white">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                <a className="mt-4 inline-block text-sm text-[var(--accent-blue)]" href="#contact">بیشتر</a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process" className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-bold">روند کاری ما</h3>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[{ step: 1, title: "درخواست اولیه" },{ step: 2, title: "ارزیابی و استراتژی" },{ step: 3, title: "تهیه مدارک" },{ step: 4, title: "ارسال و پیگیری" },].map((p) => (
              <div key={p.step} className="p-6 rounded-lg bg-[var(--soft-blue-1)] text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center font-bold">{p.step}</div>
                <h4 className="mt-4 font-semibold">{p.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">درباره‌ی ما</h3>
              <p className="text-gray-600 mt-3">تیم ما شامل وکلا، مشاوران مهاجرت و کارشناسان پرونده است. هدف ما شفاف‌سازی مسیر و کاهش استرس شماست.</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check size={16}/> صدها پرونده موفق</li>
                <li className="flex items-center gap-2"><Check size={16}/> پاسخ سریع و شفاف</li>
                <li className="flex items-center gap-2"><Check size={16}/> پشتیبانی از فارسی‌زبانان</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border bg-white">
              <h4 className="font-semibold">تماس سریع</h4>
              <p className="text-sm text-gray-600 mt-2">برای شروع همین حالا پیام دهید</p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm"><Phone size={16}/> <span>+44 7700 900000</span></div>
                <div className="flex items-center gap-3 text-sm"><Mail size={16}/> <span>info@example.com</span></div>
                <div className="flex items-center gap-3 text-sm"><MapPin size={16}/> <span>لندن — دفتر مرکزی</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
            <div className="p-8 bg-[var(--soft-blue-1)]">
              <h3 className="text-2xl font-bold">درخواست مشاوره رایگان</h3>
              <p className="text-gray-700 mt-2">فرم زیر را پر کنید و ما در اولین فرصت با شما تماس می‌گیریم.</p>

              <div className="mt-6 space-y-3">
                <input placeholder="نام و نام خانوادگی" className="w-full px-4 py-3 rounded-md border" />
                <input placeholder="ایمیل" className="w-full px-4 py-3 rounded-md border" />
                <input placeholder="شماره تماس" className="w-full px-4 py-3 rounded-md border" />
                <textarea placeholder="متن پیام" className="w-full px-4 py-3 rounded-md border h-28" />
                <div className="flex items-center gap-3">
                  <button className="px-5 py-3 rounded-md bg-[var(--accent-blue)] text-white">ارسال</button>
                  <button className="px-4 py-3 rounded-md border">پاک کردن</button>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white">
              <h4 className="font-semibold">سوالات متداول</h4>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div>
                  <div className="font-medium">من باید از کجا شروع کنم؟</div>
                  <div className="mt-1">ابتدا فرم ارزیابی را پر کنید تا مسیر مناسب شما مشخص شود.</div>
                </div>
                <div>
                  <div className="font-medium">هزینه‌ها چگونه محاسبه می‌شود؟</div>
                  <div className="mt-1">هزینه‌ها بسته به نوع و پیچیدگی پرونده متفاوت است؛ بعد از ارزیابی، پیش‌فاکتور دریافت می‌کنید.</div>
                </div>
                <div>
                  <div className="font-medium">آیا پشتیبانی بعد از ورود دارید؟</div>
                  <div className="mt-1">بله — در پیدا کردن مسکن، مدارس و معرفی خدمات محلی همراهتان هستیم.</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="testimonials" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">نظرات مراجعین</h3>
          <p className="text-gray-600 mt-2">تجربه افرادی که با کمک ما مهاجرت کردند</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-xl bg-white shadow border">
              <p className="text-gray-700">«فرایند مهاجرت کاری من به استرالیا دقیق و بدون استرس انجام شد. تیم فوق‌العاده حرفه‌ای بود.»</p>
              <div className="mt-3 font-medium text-[var(--accent-blue)]">— سعید، مهندس IT</div>
            </div>
            <div className="p-6 rounded-xl bg-white shadow border">
              <p className="text-gray-700">«برای ویزای تحصیلی سوئد اقدام کردم و همه چیز سریع‌تر از انتظارم پیش رفت.»</p>
              <div className="mt-3 font-medium text-[var(--accent-blue)]">— نرگس، دانشجو</div>
            </div>
            <div className="p-6 rounded-xl bg-white shadow border">
              <p className="text-gray-700">«راهنمایی‌ها خیلی شفاف بود و بعد از ورود هم کمکمون کردند.»</p>
              <div className="mt-3 font-medium text-[var(--accent-blue)]">— رضا، پزشک</div>
            </div>
          </div>
        </section>

        <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">پکیج‌های خدمات</h3>
          <p className="text-gray-600 mt-2">گزینه‌های شفاف و قابل انتخاب بر اساس نیاز شما</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-xl border shadow bg-white">
              <h4 className="text-lg font-semibold">پایه</h4>
              <p className="text-gray-600 text-sm mt-2">مشاوره اولیه + بررسی رزومه</p>
              <div className="mt-4 text-2xl font-bold text-[var(--accent-blue)]">$99</div>
              <a href="#contact" className="inline-block mt-4 px-4 py-2 rounded-md bg-[var(--accent-blue)] text-white text-sm">انتخاب</a>
            </div>

            <div className="p-6 rounded-xl border shadow bg-white">
              <h4 className="text-lg font-semibold">استاندارد</h4>
              <p className="text-gray-600 text-sm mt-2">ارزیابی + تهیه مدارک + ارسال پرونده</p>
              <div className="mt-4 text-2xl font-bold text-[var(--accent-blue)]">$490</div>
              <a href="#contact" className="inline-block mt-4 px-4 py-2 rounded-md bg-[var(--accent-blue)] text-white text-sm">انتخاب</a>
            </div>

            <div className="p-6 rounded-xl border shadow bg-white">
              <h4 className="text-lg font-semibold">VIP</h4>
              <p className="text-gray-600 text-sm mt-2">خدمات کامل + پیگیری + پشتیبانی بعد از ورود</p>
              <div className="mt-4 text-2xl font-bold text-[var(--accent-blue)]">$990</div>
              <a href="#contact" className="inline-block mt-4 px-4 py-2 rounded-md bg-[var(--accent-blue)] text-white text-sm">انتخاب</a>
            </div>
          </div>
        </section>

        <section id="blog" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">بلاگ مهاجرتی</h3>
          <p className="text-gray-600 mt-2">آخرین نکات، قوانین و مسیرهای مهاجرت</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[{ title: "شرایط مهاجرت کاری به استرالیا", desc: "مروری بر ویزاهای مهارت و امتیازبندی" },{ title: "بهترین شهرهای نیوزیلند برای خانواده", desc: "مقایسه امنیت، مدارس و هزینه‌ها" },{ title: "مهاجرت پزشکان به نروژ", desc: "مدارک، آزمون‌ها و مسیر شغلی" },].map((p, i) => (
              <div key={i} className="p-6 rounded-xl border bg-white shadow">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <a href="#" className="text-[var(--accent-blue)] text-sm mt-3 inline-block">ادامه مطلب</a>
              </div>
            ))}
          </div>
        </section>

        <section id="compare" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">مقایسه کشورها</h3>
          <p className="text-gray-600 mt-2">بر اساس امنیت، درآمد، کیفیت زندگی و سختی پرونده</p>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[var(--soft-blue-1)]">
                <tr>
                  <th className="p-3 text-right">کشور</th>
                  <th className="p-3 text-right">امنیت</th>
                  <th className="p-3 text-right">درآمد متخصصین</th>
                  <th className="p-3 text-right">هزینه زندگی</th>
                  <th className="p-3 text-right">سختی پرونده</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="p-3">استرالیا</td><td className="p-3">عالی</td><td className="p-3">خیلی بالا</td><td className="p-3">بالا</td><td className="p-3">متوسط</td></tr>
                <tr className="border-t"><td className="p-3">نیوزیلند</td><td className="p-3">عالی</td><td className="p-3">بالا</td><td className="p-3">متوسط</td><td className="p-3">متوسط</td></tr>
                <tr className="border-t"><td className="p-3">سوئد</td><td className="p-3">عالی</td><td className="p-3">بالا</td><td className="p-3">بالا</td><td className="p-3">سخت</td></tr>
                <tr className="border-t"><td className="p-3">نروژ</td><td className="p-3">عالی</td><td className="p-3">خیلی بالا</td><td className="p-3">بالا</td><td className="p-3">سخت</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="multiform" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">فرم چندمرحله‌ای مهاجرت</h3>
          <div className="mt-6 p-6 border rounded-xl bg-white shadow">
            <p className="text-sm text-gray-700">مرحله ۱: اطلاعات فردی</p>
            <input className="w-full px-4 py-3 border rounded mt-3" placeholder="نام" />
            <input className="w-full px-4 py-3 border rounded mt-3" placeholder="ایمیل" />
            <button className="mt-4 px-5 py-2 rounded bg-[var(--accent-blue)] text-white">مرحله بعد</button>
          </div>
        </section>

        <footer className="bg-gray-50 border-t mt-8">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <h5 className="font-semibold">خدمات مهاجرتی</h5>
              <p className="text-sm text-gray-600 mt-2">همراه شما در مسیر مهاجرت — با شفافیت، دقت و تجربه</p>
            </div>

            <div className="flex gap-6">
              <div className="text-sm">
                <div className="font-medium">تماس</div>
                <div className="text-gray-600 text-sm mt-1">info@example.com</div>
              </div>

              <div className="text-sm">
                <div className="font-medium">آدرس</div>
                <div className="text-gray-600 text-sm mt-1">لندن — خیابان نمونه</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
