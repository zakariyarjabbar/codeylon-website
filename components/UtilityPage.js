import { UtilityFooter } from "./Footer";
import Header from "./Header";

export default function UtilityPage({ code, codeClassName = "", title, children, actions, headerAction }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header compact actionLabel={headerAction.label} actionHref={headerAction.href} />
      <main className="not-found" id="main-content">
        <div className="not-found-inner">
          <div className={`not-found-code${codeClassName ? ` ${codeClassName}` : ""}`} aria-hidden="true">{code}</div>
          <div>
            <h1>{title}</h1>
            {children}
            <div className="button-row">{actions}</div>
          </div>
        </div>
      </main>
      <UtilityFooter />
    </>
  );
}
