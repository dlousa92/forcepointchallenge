// sort by default
export function sortDefault () {
  return {
    type: 'SORT_BY_DEFAULT'
  }
}

// alphabetically sort
export function sortAlphabetical () {
  return {
    type: 'SORT_ALPHABETICALLY'
  }
}

// priority sort
export function sortPriority () {
  return {
    type: 'SORT_BY_PRIORITY'
  }
}

// filter items by category
export function filterByCategory (item) {
  return {
    type: 'FILTER_BY_CATEGORY',
    item
  }
}
