// app/information/page.tsx
import { Suspense } from "react";
import InformationPage from "./InformationPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <InformationPage />
    </Suspense>
  );
}
