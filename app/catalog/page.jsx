import Link from 'next/link'

export const metadata = {
  title: "Katalog | Mutolaa",
  description: "Kitoblar katalogi — o'zingizga mos kitobni toping",
  openGraph: {
    title: "Katalog | Mutolaa",
    description: "Kitoblar katalogi — o'zingizga mos kitobni toping",
    images: [
      {
        url: "https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2021/10/Top-free-catalog-template-webiste.jpg",
        width: 1200,
        height: 630,
        alt: "Mutolaa kitoblar katalogi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog | Mutolaa",
    description: "Kitoblar katalogi — o'zingizga mos kitobni toping",
    images: ["/og-catalog.jpg"],
  },
}

const categories = ["Barchasi", "Roman", "Hikoya", "She'riyat", "Ilmiy", "Bolalar"]

const booksData = [
  { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy", category: "Roman", rating: 4.8, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80", price: "45,000" },
  { id: 2, title: "Mehrobdan chayon", author: "Abdulla Qodiriy", category: "Roman", rating: 4.6, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80", price: "42,000" },
  { id: 3, title: "Sarob", author: "Abdulla Qahhor", category: "Hikoya", rating: 4.5, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80", price: "38,000" },
  { id: 4, title: "Ufq", author: "Said Ahmad", category: "Roman", rating: 4.9, image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&q=80", price: "50,000" },
  { id: 5, title: "Dunyoning ishlari", author: "O'tkir Hoshimov", category: "Hikoya", rating: 4.4, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80", price: "35,000" },
  { id: 6, title: "Sinchalak", author: "O'tkir Hoshimov", category: "Roman", rating: 4.7, image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&q=80", price: "40,000" },
  { id: 7, title: "Dunyo bolalari", author: "N. Norqobilov", category: "Bolalar", rating: 4.3, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80", price: "28,000" },
  { id: 8, title: "Fizika asoslari", author: "R. Karimov", category: "Ilmiy", rating: 4.2, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80", price: "55,000" },
]

const Catalog = ({ searchParams }) => {
  const activeCategory = searchParams?.category || "Barchasi"
  const search = searchParams?.search || ""

  const filteredBooks = booksData.filter((book) => {
    const matchCategory = activeCategory === "Barchasi" || book.category === activeCategory
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <span className="catalog-eyebrow">Kutubxona</span>
        <h1>Kitoblar katalogi</h1>
        <p>{booksData.length} ta kitob orasidan o'zingizga mosini toping</p>
      </div>

      <div className="catalog-controls">
        <form className="catalog-search" method="GET">
          {activeCategory !== "Barchasi" && (
            <input type="hidden" name="category" value={activeCategory} />
          )}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            name="search"
            placeholder="Kitob yoki muallif qidirish..."
            defaultValue={search}
          />
          <button type="submit" className="search-submit">Qidirish</button>
        </form>

        <div className="catalog-filters">
          {categories.map((cat) => {
            const params = new URLSearchParams()
            if (cat !== "Barchasi") params.set("category", cat)
            if (search) params.set("search", search)
            const href = params.toString() ? `/catalog?${params.toString()}` : "/catalog"

            return (
              <Link
                key={cat}
                href={href}
                className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="catalog-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-card-image">
              <img src={book.image} alt={book.title} loading="lazy" />
              <span className="book-category">{book.category}</span>
            </div>
            <div className="book-card-content">
              <h3>{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="book-meta">
                <span className="book-rating">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {book.rating}
                </span>
                <span className="book-price">{book.price} so'm</span>
              </div>
              <button className="book-add-btn">Savatga qo'shish</button>
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <div className="catalog-empty">
            <p>Hech qanday kitob topilmadi</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalog
