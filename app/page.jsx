import Link from 'next/link'

export const metadata = {
  title: "Mutolaa | Kitoblar dunyosiga xush kelibsiz",
  description: "O'zbek va jahon adabiyotining eng sara asarlarini onlayn o'qing, yuklab oling va sevimli kitoblaringizni kashf eting.",
  openGraph: {
    title: "Mutolaa | Kitoblar dunyosiga xush kelibsiz",
    description: "O'zbek va jahon adabiyotining eng sara asarlarini onlayn o'qing, yuklab oling va sevimli kitoblaringizni kashf eting.",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lkICrHNRAvGhMKQ7hwkAAVo9hJYvQI5snSB5FS9sC55rpUrJ6-0KdVU&s=10",
        width: 1200,
        height: 630,
        alt: "Mutolaa - kitoblar platformasi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutolaa | Kitoblar dunyosiga xush kelibsiz",
    description: "O'zbek va jahon adabiyotining eng sara asarlarini onlayn o'qing.",
    images: ["/og-home.jpg"],
  },
}

const stats = [
  { value: "1,248+", label: "Kitoblar" },
  { value: "8,432+", label: "Foydalanuvchilar" },
  { value: "56+", label: "Mualliflar" },
  { value: "4.8", label: "O'rtacha reyting" },
]

const featuredBooks = [
  { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80" },
  { id: 2, title: "Sinchalak", author: "O'tkir Hoshimov", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80" },
  { id: 3, title: "Ufq", author: "Said Ahmad", image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&q=80" },
  { id: 4, title: "Sarob", author: "Abdulla Qahhor", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80" },
]

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <span className="hero-eyebrow">Mutolaa platformasi</span>
        <h1>
          Har bir sahifa <span className="hero-highlight">yangi olam</span>
        </h1>
        <p>
          O'zbek va jahon adabiyotining eng sara asarlarini bir joyda toping,
          o'qing va sevimli kitoblaringiz ro'yxatini yarating.
        </p>
        <div className="hero-actions">
          <Link href="/catalog" className="hero-btn primary">
            Katalogni ko'rish
          </Link>
          <Link href="/news" className="hero-btn secondary">
            Yangiliklar
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        {stats.map((stat, i) => (
          <div key={i} className="home-stat-item">
            <span className="home-stat-value">{stat.value}</span>
            <span className="home-stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Featured Books */}
      <section className="featured-section">
        <div className="featured-header">
          <div>
            <span className="catalog-eyebrow">Tavsiya etamiz</span>
            <h2>Eng sara kitoblar</h2>
          </div>
          <Link href="/catalog" className="featured-link">
            Barchasini ko'rish
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="featured-grid">
          {featuredBooks.map((book) => (
            <div key={book.id} className="featured-card">
              <div className="featured-card-image">
                <img src={book.image} alt={book.title} loading="lazy" />
              </div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>O'qishni hoziroq boshlang</h2>
        <p>Minglab kitoblar sizni kutmoqda — ro'yxatdan o'ting va mutolaa dunyosiga qadam qo'ying.</p>
        <Link href="/catalog" className="hero-btn primary">
          Boshlash
        </Link>
      </section>
    </div>
  )
}

export default Home
