import { useState, useEffect, useRef } from 'react'

// Images
import heroImg from './images/DSC_5566.jpg'
import directorImg from './images/mom.png'
import galleryImg1  from './images/bs3.JPG'
import galleryImg2  from './images/bs1.JPG'
import galleryImg3  from './images/bs5.JPG'
import galleryImg4  from './images/bs12.JPG'
import galleryImg5  from './images/diwali/IMG_11.jpg'
import galleryImg6  from './images/diwali/IMG_3.jpg'
import galleryImg7  from './images/christmas/IMG_0257.JPG'
import galleryImg8  from './images/christmas/IMG_0898.jpg'
import galleryImg9  from './images/republicday/IMG_1911.jpg'
import galleryImg10 from './images/republicday/IMG_2062.JPG'
import galleryImg11 from './images/independenceDay.jpeg'
import galleryImg12 from './images/painting.jpeg'
import galleryImg13 from './images/hischal-first-day.jpeg'
import galleryImg14 from './images/vidyarambham.jpg'

const GALLERY = [
  { src: galleryImg1,  alt: 'Child in the ball pool' },
  { src: galleryImg2,  alt: 'Baby exploring the ball pool' },
  { src: galleryImg3,  alt: 'Child discovering music' },
  { src: galleryImg4,  alt: 'Outdoor play with teacher' },
  { src: galleryImg5,  alt: 'Diwali — little ones with glowing candles' },
  { src: galleryImg6,  alt: 'Diwali craft activity' },
  { src: galleryImg7,  alt: 'Christmas craft — decorating together' },
  { src: galleryImg8,  alt: 'Christmas celebration' },
  { src: galleryImg9,  alt: 'Republic Day — saluting the flag' },
  { src: galleryImg10, alt: 'Republic Day — children with tricolour' },
  { src: galleryImg11, alt: 'Independence Day activities' },
  { src: galleryImg12, alt: 'Painting with a teacher' },
  { src: galleryImg13, alt: 'A warm welcome on the first day' },
  { src: galleryImg14, alt: 'Vidyarambham — initiation of learning' },
]

const SKILLS = [
  {
    icon: '🌿',
    title: 'Physical Skills',
    body: 'Gross and fine motor development through splash pool, sand pit, ball pool, swings, slides, clay modelling, balancing beam, and physical exercise.',
  },
  {
    icon: '📖',
    title: 'Language Skills',
    body: 'Listening, speaking, reading and writing through story telling, music, rhymes, dramatisation, puppet shows, magic show, and English conversation.',
  },
  {
    icon: '🔭',
    title: 'Intellectual Skills',
    body: 'Memory, observation and problem solving using Montessori equipment, puzzles, block building, beads, flash cards, pink tower, spindles and number rods.',
  },
  {
    icon: '🎨',
    title: 'Creative Skills',
    body: 'Imagination and expression through colouring, clay modelling, painting, cutting, pasting, crayons, music, dance, story telling and scribbling.',
  },
  {
    icon: '🤝',
    title: 'Socio-emotional Skills',
    body: 'Sharing, caring, independence, leadership, responsibility and confidence through celebrations, festivals, greetings, prayers and good manners.',
  },
  {
    icon: '✨',
    title: 'Etiquette & Technology',
    body: '"Polite is Right" life skills classes combined with child-friendly technology integration — tradition and technology, the best of both worlds.',
  },
]

const PROGRAMS = [
  { name: 'Montessori 1', age: '2+' },
  { name: 'Montessori 2', age: '3+' },
  { name: 'Montessori 3', age: '4+' },
]

const DOCUMENTS = [
  'Birth certificate of the child',
  'Passport-size photographs (4 copies)',
  'Aadhar card of the child',
  'Aadhar card of parents / guardian',
  'Address proof',
  'Medical fitness certificate',
]

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Programs',   id: 'programs' },
  { label: 'Gallery',    id: 'gallery' },
  { label: 'Admissions', id: 'admissions' },
  { label: 'Contact',    id: 'contact' },
]

// ---------- Fade-in hook ----------
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ---------- Section heading ----------
function SectionHeading({ eyebrow, title, light = false }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-in text-center mb-16">
      <p className="text-xs tracking-widest uppercase mb-3"
         style={{ color: light ? 'var(--dusty-gold)' : 'var(--terracotta)' }}>
        {eyebrow}
      </p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 400,
        color: light ? 'var(--cream)' : 'var(--warm-brown)',
        lineHeight: 1.2,
      }}>
        {title}
      </h2>
      <div className="h-px w-14 mx-auto mt-5"
           style={{ backgroundColor: 'var(--dusty-gold)' }} />
    </div>
  )
}

// ---------- Wave divider ----------
function WaveDown({ from, to }) {
  return (
    <div style={{ backgroundColor: to, marginTop: '-1px' }}>
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
        <path
          d="M0 0 C240 56 480 56 720 28 C960 0 1200 0 1440 28 L1440 0 Z"
          fill={from}
        />
      </svg>
    </div>
  )
}

// ---------- App ----------
export default function App() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Refs for fade-ins
  const aboutTextRef    = useFadeIn()
  const aboutStatsRef   = useFadeIn()
  const directorRef     = useFadeIn()
  const skillsRef       = useFadeIn()
  const programsRef     = useFadeIn()
  const galleryRef      = useFadeIn()
  const admissionsRef   = useFadeIn()
  const contactRef      = useFadeIn()

  return (
    <div style={{ backgroundColor: 'var(--cream)', color: 'var(--warm-brown)' }}>

      {/* ─── Navbar ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(245,239,224,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxShadow: scrolled ? '0 1px 24px rgba(74,55,40,0.08)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="text-left leading-none">
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: scrolled ? 'var(--warm-brown)' : 'white',
              transition: 'color 0.4s',
            }}>
              Woodsorrel
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-60"
                style={{ color: scrolled ? 'var(--warm-brown)' : 'rgba(245,239,224,0.9)' }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('admissions')}
              className="ml-2 px-5 py-2 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{
                backgroundColor: 'var(--terracotta)',
                color: 'white',
                letterSpacing: '0.1em',
              }}
            >
              Apply
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ backgroundColor: scrolled ? 'var(--warm-brown)' : 'white' }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? '320px' : '0',
            backgroundColor: 'var(--cream)',
          }}
        >
          <div className="px-6 pb-5 pt-2 space-y-1">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left py-3 text-sm font-medium border-b"
                style={{ color: 'var(--warm-brown)', borderColor: 'var(--sand)' }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('admissions')}
              className="mt-3 w-full py-3 text-xs font-medium tracking-widest uppercase"
              style={{ backgroundColor: 'var(--terracotta)', color: 'white' }}
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroImg})`,
            transformOrigin: 'center',
          }}
        />
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(74,55,40,0.68) 0%, rgba(74,55,40,0.45) 60%, rgba(196,113,74,0.35) 100%)' }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* School name */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.05,
            letterSpacing: '0.03em',
          }}>
            Woodsorrel Angels' Meadow
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(212,168,83,0.6)' }} />
            <p className="text-xs tracking-widest uppercase"
               style={{ color: 'rgba(245,239,224,0.85)', fontFamily: "'DM Sans', sans-serif" }}>
              Montessori Preschool · Dehradun · Ages 2–5
            </p>
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(212,168,83,0.6)' }} />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontStyle: 'italic',
            color: 'rgba(245,239,224,0.88)',
            marginTop: '1.75rem',
            letterSpacing: '0.03em',
          }}>
            Where little minds bloom
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('admissions')}
              className="px-9 py-3.5 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-85"
              style={{ backgroundColor: 'var(--terracotta)', color: 'white', letterSpacing: '0.14em' }}
            >
              Apply for Admission
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="px-9 py-3.5 text-xs font-medium uppercase tracking-widest transition-all hover:bg-white hover:bg-opacity-10"
              style={{ border: '1px solid rgba(245,239,224,0.45)', color: 'white', letterSpacing: '0.14em' }}
            >
              Discover More
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-px h-10" style={{ backgroundColor: 'white' }} />
        </div>
      </section>

      {/* ─── About ─── */}
      <WaveDown from="transparent" to="var(--cream)" />

      <section id="about" className="py-24 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Our Story" title="Our Philosophy" />

          <div className="grid md:grid-cols-2 gap-14 items-start mb-20">
            <div ref={aboutTextRef} className="fade-in">
              <p className="text-base leading-relaxed mb-5">
                Woodsorrel offers an <strong>intimate, high quality preschool program for 2–5 year olds.</strong> Children during preschool years learn more, and at a greater speed, than at any other time in their lives. Research shows that half of a child's adult intelligence is formed during the first four years of life — they simply soak up every experience.
              </p>
              <p className="text-base leading-relaxed">
                We provide an ideal environment for all-round development by following a <strong>Montessori-inspired, child-led, teacher-facilitated, play-based curriculum.</strong> Children are free to follow their own interests within a planned environment, developing naturally — highly motivated, with good discipline and mastery of basic skills. Aspects of Reggio Emilia are woven throughout as well.
              </p>
            </div>

            <div ref={aboutStatsRef} className="fade-in grid grid-cols-2 gap-4">
              {[
                { label: 'Ages',      value: '2 – 5',       sub: 'years' },
                { label: 'Approach',  value: 'Montessori',  sub: 'inspired' },
                { label: 'Programs',  value: '3',           sub: 'levels' },
                { label: 'Location',  value: 'Dehradun',    sub: 'Uttarakhand' },
              ].map(item => (
                <div key={item.label} className="p-6 text-center" style={{ backgroundColor: 'var(--sand)' }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.75rem',
                    fontWeight: 500,
                    color: 'var(--terracotta)',
                  }}>
                    {item.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest mt-1"
                       style={{ color: 'var(--warm-brown)' }}>
                    {item.label}
                  </div>
                  <div className="text-xs mt-0.5"
                       style={{ color: 'rgba(74,55,40,0.45)' }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Director */}
          <div className="pt-16 border-t" style={{ borderColor: 'var(--sand)' }}>
            <SectionHeading eyebrow="Meet the Founder" title="Director's Profile" />

            <div ref={directorRef} className="fade-in flex flex-col md:flex-row gap-12 items-start max-w-4xl mx-auto">
              <div className="flex-shrink-0 mx-auto md:mx-0 text-center">
                <div className="w-44 h-52 overflow-hidden mx-auto"
                     style={{ border: '4px solid var(--sand)' }}>
                  <img
                    src={directorImg}
                    alt="Mrs. Seema Chamoli"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="mt-4"
                   style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontStyle: 'italic' }}>
                  Mrs. Seema Chamoli
                </p>
                <p className="text-xs tracking-widest uppercase mt-1"
                   style={{ color: 'var(--terracotta)' }}>
                  Founder Director
                </p>
              </div>

              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Mrs. Seema Chamoli is a <strong>reputed educationist who has dedicated her entire career to working with young children</strong>, earning invaluable experience in teaching and administration. Her key specialisation is <strong>Childhood Education and Nutrition</strong>.
                </p>
                <p>
                  She is <strong>thoughtful, compassionate and highly skilled</strong> at understanding each child individually — where they are emotionally and developmentally — so she can best facilitate their learning. She has experience in private, public and hi-tech preschool settings across India, and has served as VP of Educational Projects with Futomic Consultancy.
                </p>
                <p>
                  <strong>Realising the necessity of a world-class preschool in Dehradun</strong>, she nurtured the concept of Woodsorrel Angels' Meadow — a blend of modernity and tradition — to prepare children for success in today's world while nurturing excellent global citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Programs ─── */}
      <WaveDown from="var(--cream)" to="var(--sand)" />

      <section id="programs" className="py-24 px-6" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Curriculum" title="Growth & Development" />

          <p ref={skillsRef} className="fade-in text-base leading-relaxed text-center max-w-2xl mx-auto mb-14"
             style={{ color: 'rgba(74,55,40,0.8)' }}>
            Education at Woodsorrel means <strong>education for life.</strong> We prepare children by imparting age-appropriate knowledge, enhancing their talent, and empowering them with life skills for holistic development across five core areas.
          </p>

          {/* Skill cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {SKILLS.map((skill, i) => (
              <div
                key={skill.title}
                className="p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--cream)',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: '0.65rem',
                  color: 'var(--warm-brown)',
                }}>
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed"
                   style={{ color: 'rgba(74,55,40,0.72)' }}>
                  {skill.body}
                </p>
              </div>
            ))}
          </div>

          {/* Programs table */}
          <div ref={programsRef} className="fade-in max-w-sm mx-auto">
            <h3 className="text-center mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400 }}>
              Our Programs
            </h3>
            <div style={{ overflow: 'hidden', border: '1px solid rgba(74,55,40,0.12)' }}>
              <div className="grid grid-cols-2 px-6 py-3 text-xs uppercase tracking-widest"
                   style={{ backgroundColor: 'var(--terracotta)', color: 'white' }}>
                <span>Class</span>
                <span>Age</span>
              </div>
              {PROGRAMS.map((p, i) => (
                <div
                  key={p.name}
                  className="grid grid-cols-2 px-6 py-4 text-sm"
                  style={{
                    backgroundColor: i % 2 === 0 ? 'var(--cream)' : 'rgba(245,239,224,0.6)',
                    borderTop: '1px solid rgba(74,55,40,0.08)',
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{p.name}</span>
                  <span style={{ color: 'var(--terracotta)' }}>{p.age} years</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <WaveDown from="var(--sand)" to="var(--cream)" />

      <section id="gallery" className="py-24 px-6" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Life at Woodsorrel" title="Moments & Memories" />

          <div ref={galleryRef} className="fade-in gallery-grid">
            {GALLERY.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Admissions ─── */}
      <WaveDown from="var(--cream)" to="var(--warm-brown)" />

      <section id="admissions" className="py-24 px-6" style={{ backgroundColor: 'var(--warm-brown)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Join Us" title="Admissions" light />

          <div ref={admissionsRef} className="fade-in grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="mb-7"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 400, color: 'var(--cream)' }}>
                Admission Information
              </h3>
              <ul className="space-y-4">
                {[
                  'Admissions are open throughout the year',
                  'Children aged 2 to 5 years are welcome',
                  'School visits and interactions can be arranged',
                  'Fee structure is discussed at the time of admission',
                  'Limited seats — early registration recommended',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm"
                      style={{ color: 'var(--sand)' }}>
                    <span className="mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--dusty-gold)' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-7"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 400, color: 'var(--cream)' }}>
                Documents Required
              </h3>
              <ul className="space-y-4">
                {DOCUMENTS.map((doc, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm"
                      style={{ color: 'var(--sand)' }}>
                    <span className="mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--dusty-gold)' }}>—</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-8 text-sm" style={{ color: 'rgba(232,213,183,0.65)' }}>
              Ready to give your child the best start in life?
            </p>
            <a
              href="https://tinyurl.com/ydy99uu4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--terracotta)', color: 'white', letterSpacing: '0.14em' }}
            >
              Online Admission Form
            </a>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <WaveDown from="var(--warm-brown)" to="var(--sand)" />

      <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Find Us" title="Contact Us" />

          <div ref={contactRef} className="fade-in grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                {
                  label: 'Address',
                  content: (
                    <>
                      146, Lane 10, Rajpur Road<br />
                      Bhagirathi Puram, Jakhan<br />
                      Dehradun, Uttarakhand 248003<br />
                      India
                    </>
                  ),
                },
                {
                  label: 'Phone',
                  content: (
                    <a href="tel:+918939163417"
                       className="hover:opacity-60 transition-opacity"
                       style={{ color: 'var(--warm-brown)' }}>
                      +91 89391 63417
                    </a>
                  ),
                },
                {
                  label: 'Email',
                  content: (
                    <a href="mailto:seemachamoli22@yahoo.co.in"
                       className="hover:opacity-60 transition-opacity"
                       style={{ color: 'var(--warm-brown)' }}>
                      seemachamoli22@yahoo.co.in
                    </a>
                  ),
                },
                {
                  label: 'Website',
                  content: 'www.woodsorrel.in',
                },
              ].map(({ label, content }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest mb-2"
                     style={{ color: 'var(--terracotta)' }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed"
                     style={{ color: 'var(--warm-brown)' }}>
                    {content}
                  </p>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div style={{ height: '340px', overflow: 'hidden' }}>
              <iframe
                title="Woodsorrel Angels' Meadow — Jakhan, Dehradun"
                src="https://maps.google.com/maps?q=30.3624154,78.0601653&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="py-7 px-6 text-center text-xs"
        style={{ backgroundColor: 'var(--warm-brown)', color: 'rgba(245,239,224,0.4)' }}
      >
        <p style={{ letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} Woodsorrel, Angels' Meadow Preschool · Dehradun, Uttarakhand
        </p>
      </footer>

    </div>
  )
}
