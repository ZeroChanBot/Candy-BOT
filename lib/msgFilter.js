const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 1000) // 1sec is delay before processing next command
}

module.exports = {
    isFiltered,
    addFilter
}