import Footer from "./Footer";
import Header from "./Header";

export default function LegalPage({ title, lede, meta, tocLabel, toc, current, children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <header className="page-hero">
          <div className="narrow">
            <h1>{title}</h1>
            <p className="lede">{lede}</p>
            <div className="page-meta">{meta.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </header>
        <div className="section">
          <div className="container legal-layout">
            <nav className="legal-toc" aria-label={tocLabel}>
              <p>On this page</p>
              <ul>{toc.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </nav>
            <article className="legal-content">{children}</article>
          </div>
        </div>
      </main>
      <Footer current={current} />
    </>
  );
}
