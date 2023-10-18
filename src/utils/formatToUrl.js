export default function formatToUrl(string) {
  let specialChar = string

  specialChar = specialChar.replace(/[áàãâä]/iu, 'a')
  specialChar = specialChar.replace(/[éèêë]/iu, 'e')
  specialChar = specialChar.replace(/[íìîï]/iu, 'i')
  specialChar = specialChar.replace(/[óòõôö]/iu, 'o')
  specialChar = specialChar.replace(/[úùûü]/iu, 'u')
  specialChar = specialChar.replace(/[ç]/iu, 'c')
  specialChar = specialChar.replace(/[^a-z0-9]/i, '-')
  specialChar = specialChar.replace(/_+/, '-')
  specialChar = specialChar.replace(/ /g, '-')
  specialChar = specialChar.replace(/[!@#$%&*]/g, '')
  specialChar = specialChar.toLowerCase()

  return specialChar
}
