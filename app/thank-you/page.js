import Link from "next/link";
import UtilityPage from "@/components/UtilityPage";

export const metadata = {
  title: "Brief Received",
  description: "Codeylon has received your project brief.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <UtilityPage
      code="SENT"
      codeClassName="utility-status"
      title="Your brief is on its way."
      headerAction={{ label: "Back to home", href: "/" }}
      actions={
        <>
          <Link className="button button-primary" href="/">Return home</Link>
          <a className="button button-secondary" href="https://www.instagram.com/codeylon/" target="_blank" rel="noopener noreferrer">Visit Instagram</a>
        </>
      }
    >
      <p>Thank you. Codeylon will review the scope before replying. If you need to add an important detail, email <a className="text-link" href="mailto:hello@codeylon.com">hello@codeylon.com</a>.</p>
    </UtilityPage>
  );
}
