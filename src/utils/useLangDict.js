import dictionaryDe from '@/messages/de'
import dictionaryPt from '@/messages/pt-BR'
import dictionaryFr from '@/messages/fr'
import dictionaryEn from '@/messages/en'

export default function useLangDict(lang) {
  if (lang === 'de') {
    return dictionaryDe
  }
  if (lang === 'pt-BR') {
    return dictionaryPt
  }
  if (lang === 'fr') {
    return dictionaryFr
  }
  if (lang === 'en') {
    return dictionaryEn
  }
}
