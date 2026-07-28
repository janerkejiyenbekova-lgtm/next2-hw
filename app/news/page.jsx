import React from 'react'

export const metadata = {
  title: "Yangiliklar | Mutolaa",
  description: "Eng so'nggi yangiliklar va e'lonlar",
  openGraph: {
    title: "Yangiliklar | Mutolaa",
    description: "Eng so'nggi yangiliklar va e'lonlar",
    images: [
      {
        url: "https://img.magnific.com/free-vector/news-grunge-text_460848-9369.jpg?semt=ais_hybrid&w=740&q=80",
        width: 1200,
        height: 630,
        alt: "Mutolaa yangiliklari",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yangiliklar | Mutolaa",
    description: "Eng so'nggi yangiliklar va e'lonlar",
    images: ["https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80"],
  },
}

const newsData = [
  {
    id: 1,
    title: "Yangi kitoblar to'plami sotuvga chiqdi",
    excerpt: "Ushbu oy ichida platformamizga 50 dan ortiq yangi kitob qo'shildi. Zamonaviy va klassik adabiyot ixlosmandlari uchun.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    category: "Kitoblar",
    date: "2026-07-20",
  },
  {
    id: 2,
    title: "Mualliflar bilan onlayn uchrashuv",
    excerpt: "Mashhur yozuvchilar bilan jonli efirda suhbat tashkil etiladi. Savol-javob sessiyasi ham bo'ladi.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    category: "Tadbirlar",
    date: "2026-07-18",
  },
  {
    id: 3,
    title: "Mobil ilova yangilanishi chiqdi",
    excerpt: "Endi kitoblarni oflayn rejimda ham o'qish imkoniyati mavjud. Ilovani yangilashni unutmang.",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&q=80",
    category: "Yangilanish",
    date: "2026-07-15",
  },
  {
    id: 4,
    title: "Bepul obuna aksiyasi boshlandi",
    excerpt: "Birinchi 1000 foydalanuvchi uchun 1 oylik premium obuna mutlaqo bepul taqdim etiladi.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    category: "Aksiya",
    date: "2026-07-10",
  },
  {
    id: 5,
    title: "Bolalar bo'limi ishga tushdi",
    excerpt: "Endi platformamizda bolalar uchun maxsus rasmli kitoblar bo'limi mavjud.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    category: "Yangilik",
    date: "2026-07-05",
  },
  {
    id: 6,
    title: "Audiokitoblar qo'shildi",
    excerpt: "Sevimli kitoblaringizni endi tinglash orqali ham iste'mol qilishingiz mumkin.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    category: "Yangilik",
    date: "2026-07-01",
  },
]

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

const News = () => {
  return (
    <div className="news-page">
      <div className="news-header">
        <span className="news-eyebrow">Blog & Yangiliklar</span>
        <h1>So'nggi yangiliklar</h1>
        <p>Platformamizdagi eng so'nggi voqealar, e'lonlar va yangilanishlar bilan tanishing</p>
      </div>

      <div className="news-grid">
        {newsData.map((item) => (
          <article key={item.id} className="news-card">
            <div className="news-card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="news-badge">{item.category}</span>
            </div>
            <div className="news-card-content">
              <time className="news-date">{formatDate(item.date)}</time>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <a href={`/news/${item.id}`} className="news-link">
                Batafsil o'qish
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News