# LUEUR — Next.js Landing Page

صفحة هبوط لعلامة أدوات تجميل نسائية، مبنية على Next.js 14 (App Router) + TypeScript + Framer Motion، بنفس منطق الحركات المستخرج من تحليل فيديو "Field & Form".

## التشغيل

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## البنية

```
src/
  app/                  # App Router: layout, page, globals.css
  components/
    layout/             # AnnounceBar, Navbar, Footer
    sections/           # Hero, RitualFinder, SeasonEdit, TheStandard, CareRepair, Journal, Newsletter
    ui/                 # Button, FadeUp (fade+translateY stagger), ProgressBar
  data/content.ts        # كل نصوص وبيانات الموقع (منتجات، فئات، مقالات)
  hooks/                  # useAnnounceBar, useMobileMenu
  styles/tokens.css       # متغيرات الألوان والخطوط
  types/index.ts          # أنواع TypeScript المشتركة
```

## خريطة الحركات (Framer Motion + Lenis)

| الحركة | المكان | التنفيذ |
|---|---|---|
| تمرير سلس (inertia) | الصفحة كاملة | `Lenis` في `SmoothScroll` |
| شريط تقدم التمرير | أعلى الصفحة | `useScroll` + `useSpring` |
| Preloader (حروف + ستارة تنزاح للأعلى) | `Preloader` | `AnimatePresence` + `exit` |
| Slide-down للبانر | `AnnounceBar` | `AnimatePresence` |
| Navbar تختفي عند النزول وتظهر عند الصعود + blur | `Navbar` | `useMotionValueEvent` |
| Zoom-out للصورة + Parallax + اختفاء المحتوى عند التمرير | `Hero` | `useScroll` + `useTransform` |
| كشف العناوين كلمة بكلمة (mask) | كل الأقسام | `SplitText` |
| Magnetic buttons | أزرار الـ Hero وCare | `Magnetic` |
| Fan-out بنابض فيزيائي + رفع عند hover | `RitualFinder` | `spring` + `custom` index |
| شريط نصوص يتحرك مع التمرير (صفّان باتجاهين) | قبل المنتجات | `Marquee` |
| كشف الصور بقصّ من الأسفل + Zoom-out + Parallax داخلي | المنتجات، المعيار، المجلة | `RevealImage` |
| Clip-path reveal للاقتباس | `TheStandard` | `clipPath: inset()` |
| Fade + blur + translateY متدرج | عام | `FadeUp` |
| أيقونات بنابض + حلقات Parallax | `CareRepair` | `spring` + `useScroll` |
| Orbs عائمة + رسالة نجاح بعد الاشتراك | `Newsletter` | `animate` loop + `AnimatePresence` |
| حروف الشعار الضخم ترتفع بالتتابع | `Footer` | `FooterWordmark` |

## ملاحظات

- الصور كلها منتجات أدوات تجميل (بدون صور أشخاص) من Unsplash (تراخيص مجانية) عبر `next/image` مع `remotePatterns` في `next.config.mjs`.
- الخطوط (Playfair Display / Inter / Bebas Neue) محمّلة عبر `next/font/google` — بدون طلبات خارجية إضافية، وبدون Layout Shift.
- الأيقونات من `lucide-react`.
- `prefers-reduced-motion` مدعوم عبر `MotionConfig reducedMotion="user"` وتعطيل Lenis.
- مدة الـ Preloader وتوقيت دخول الـ Hero في `src/lib/motion.ts`.
