import Link from "next/link";
import UtilityPage from "@/components/UtilityPage";

export const metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found. Return to Codeylon or start a project enquiry.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <UtilityPage
      code="404"
      title="This page is not in the build."
      headerAction={{ label: "Start a project", href: "/#contact" }}
      actions={
        <>
          <Link className="button button-primary" href="/">Return home</Link>
          <Link className="button button-secondary" href="/#contact">Send a project brief</Link>
        </>
      }
    >
      <p>The address may be old, mistyped, or moved. The main website is working normally.</p>
    </UtilityPage>
  );
}
