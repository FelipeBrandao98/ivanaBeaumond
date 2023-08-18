export default function formatToSubTitle(string) {
  let specialChar = string

  specialChar = specialChar.substring(0, 100)
  specialChar.length === 100 ? (specialChar += '...') : (specialChar += '.')

  return specialChar
}
