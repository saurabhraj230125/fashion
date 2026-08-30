import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag">О БУТИКЕ</span>
              <h2 className="section-title">Высокая мода на каждый день</h2>
              <p>Добро пожаловать в <strong>Fashion Boutique Sat</strong> — пространство, где стиль встречается с исключительным комфортом. Мы тщательно отбираем лучшие модели одежды производства Турции, чтобы вы могли наслаждаться премиальным качеством и актуальными трендами.</p>
              <ul className="features-list">
                <li>
                  <span className="feature-icon">🇹🇷</span>
                  <strong>Made in Turkey:</strong> Только проверенные фабрики.
                </li>
                <li>
                  <span className="feature-icon">✨</span>
                  <strong>Цена | Качество:</strong> Идеальный баланс.
                </li>
                <li>
                  <span className="feature-icon">💳</span>
                  <strong>Удобная оплата:</strong> Принимаем KASPI QR и RED.
                </li>
              </ul>
            </div>
            <div className="about-image-wrapper">
              <div 
                className="about-image glass-panel"
                style={{ backgroundImage: "url('/assets/about_fabric.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="collection">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag light">НОВИНКИ</span>
            <h2 className="section-title light">Осенняя коллекция</h2>
            <p className="light-text">Откройте для себя новые текстуры, теплые оттенки и элегантные силуэты.</p>
          </div>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-img" style={{ backgroundImage: "url('/assets/hero_bg.jpg')" }}></div>
              <div className="gallery-info">
                <h3>Элегантные Пальто</h3>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-img" style={{ backgroundImage: "url('/assets/knitwear_display.jpg')" }}></div>
              <div className="gallery-info">
                <h3>Базовый Трикотаж</h3>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-img" style={{ backgroundImage: "url('/assets/about_fabric.jpg')" }}></div>
              <div className="gallery-info">
                <h3>Стильные Костюмы</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <a href="https://www.instagram.com/fashion_boutique_sat" target="_blank" rel="noopener noreferrer" className="btn-outline-light">Больше в Instagram</a>
          </div>
        </div>
      </section>

      <section className="section" id="location">
        <div className="container">
          <div className="location-container glass-panel">
            <div className="location-info">
              <span className="section-tag">ЖДЕМ ВАС</span>
              <h2 className="section-title">Наш Адрес</h2>
              <p className="address-text">
                📍 <strong>ТРЦ «Ulytau Mall»</strong>, 2 этаж, 45 бутик<br/>
                <em>Вход со стороны &quot;Мечты&quot;, г. Сатпаев</em>
              </p>
              <div className="schedule">
                <p><strong>🕒 График работы:</strong></p>
                <p>Работаем без выходных: 11:00 – 19:00</p>
              </div>
              <div className="contact-links mt-4">
                <a href="https://wa.me/77712832333" target="_blank" rel="noopener noreferrer" className="btn-primary">Написать в WhatsApp</a>
              </div>
            </div>
            <div className="payment-info">
              <h3>Способы оплаты</h3>
              <div className="payment-methods">
                <div className="payment-badge">KASPI QR</div>
                <div className="payment-badge red">KASPI RED</div>
                <div className="payment-badge">Наличные</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text light">FASHION BOUTIQUE</span>
              <span className="logo-subtext">SAT</span>
            </div>
            <p>Ваш путеводитель в мир стиля и премиального качества.</p>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/fashion_boutique_sat" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://wa.me/77712832333" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Fashion Boutique Sat. Все права защищены.</p>
        </div>
      </footer>
    </main>
  );
}
