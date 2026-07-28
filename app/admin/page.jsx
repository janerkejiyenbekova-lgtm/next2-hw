"use client"

import React, { useState } from 'react'


const statsData = [
  { id: 1, label: "Jami kitoblar", value: "1,248", change: "+12%", icon: "book" },
  { id: 2, label: "Faol foydalanuvchilar", value: "8,432", change: "+8%", icon: "users" },
  { id: 3, label: "Bugungi yuklamalar", value: "342", change: "+24%", icon: "download" },
  { id: 4, label: "Yangi mualliflar", value: "56", change: "+3%", icon: "author" },
]

const initialBooks = [
  { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy", category: "Roman", status: "Faol", views: 3421 },
  { id: 2, title: "Mehrobdan chayon", author: "Abdulla Qodiriy", category: "Roman", status: "Faol", views: 2156 },
  { id: 3, title: "Sarob", author: "Abdulla Qahhor", category: "Hikoya", status: "Kutilmoqda", views: 1890 },
  { id: 4, title: "Ufq", author: "Said Ahmad", category: "Roman", status: "Faol", views: 4210 },
  { id: 5, title: "Dunyoning ishlari", author: "O'tkir Hoshimov", category: "Hikoya", status: "Nofaol", views: 987 },
]

const icons = {
  book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />,
  users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
  download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
  author: <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />,
}

const statusStyles = {
  "Faol": { 
    bg: "rgba(201, 162, 39, 0.15)", 
    color: "#f0d878", 
    border: "rgba(201, 162, 39, 0.5)",
    icon: "●" 
  },
  "Kutilmoqda": { 
    bg: "rgba(201, 162, 39, 0.08)", 
    color: "#c9a227", 
    border: "rgba(201, 162, 39, 0.3)",
    icon: "◐" 
  },
  "Nofaol": { 
    bg: "rgba(255, 255, 255, 0.03)", 
    color: "#7a766e", 
    border: "rgba(255, 255, 255, 0.08)",
    icon: "○" 
  },
}

const Admin = () => {
  const [books, setBooks] = useState(initialBooks)
  const [search, setSearch] = useState("")

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id))
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <span className="admin-eyebrow">Boshqaruv paneli</span>
          <h1>Admin</h1>
        </div>
        <button className="admin-add-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Yangi kitob
        </button>
      </div>

      <div className="admin-stats">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {icons[stat.icon]}
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <div className="stat-value-row">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-change">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-table-wrap">
        <div className="table-header">
          <h2>Kitoblar ro'yxati</h2>
          <div className="table-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Nomi</th>
                <th>Muallif</th>
                <th>Kategoriya</th>
                <th>Status</th>
                <th>Ko'rishlar</th>
                <th>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td className="book-title">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>
                    <span
  className="status-badge"
  style={{
    background: statusStyles[book.status].bg,
    color: statusStyles[book.status].color,
    borderColor: statusStyles[book.status].border,
  }}
>
  <span className="status-dot">{statusStyles[book.status].icon}</span>
  {book.status}
</span>
                  </td>
                  <td>{book.views.toLocaleString()}</td>
                  <td>
                    <div className="table-actions">
                      <button className="icon-btn edit">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
                        </svg>
                      </button>
                      <button className="icon-btn delete" onClick={() => handleDelete(book.id)}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredBooks.length === 0 && (
                <tr>
                  <td colSpan={6} className="empty-row">
                    Hech narsa topilmadi
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin