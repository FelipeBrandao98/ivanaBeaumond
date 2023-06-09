import LanguageHook from "@/hooks/LanguageContext";

export default function Page({ children }) {

  return (
    <LanguageHook>
      {children}
    </LanguageHook>
  )
}
