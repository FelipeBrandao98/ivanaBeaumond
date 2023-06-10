import RedirectLanguageComponent from "@/components/RedirectLanguageComponent";
import LanguageHook from "@/hooks/LanguageContext";

export default function Page() {

  return (
    <LanguageHook>
      <RedirectLanguageComponent />
    </LanguageHook>
  )
}
