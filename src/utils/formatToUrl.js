export default function formatToUrl(string) {
  let specialChar = string

  specialChar = specialChar.replace(/[áàãâä]/ui, 'a')
  specialChar = specialChar.replace(/[éèêë]/ui, 'e')
  specialChar = specialChar.replace(/[íìîï]/ui, 'i')
  specialChar = specialChar.replace(/[óòõôö]/ui, 'o')
  specialChar = specialChar.replace(/[úùûü]/ui, 'u')
  specialChar = specialChar.replace(/[ç]/ui, 'c')
  specialChar = specialChar.replace(/[^a-z0-9]/i, '-')
  specialChar = specialChar.replace(/_+/, '-')
  specialChar = specialChar.replace(/ /g, '-')
  specialChar = specialChar.replace(/[!@#$%&*]/g, '')
  specialChar = specialChar.toLowerCase()

  return specialChar
}