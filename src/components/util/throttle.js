/**
const handleKeydown = throttle((e) => {
  console.log(e.target.value)
}, 300)
input.addEventListener('keydown', handleKeydown)
*/
export default function throttle (callback, wait, context = this) {
  let timeout = null
  let callbackArgs = null

  const later = () => {
    callback.apply(context, callbackArgs)
    timeout = null
  }

  return function () {
    if (!timeout) {
      callbackArgs = arguments
      timeout = setTimeout(later, wait)
    }
  }
}

/**
 * Normal event
 * event      | |      |
 * time     ----------------
 * callback   | |      |
 *
 * Call search at most once per 300ms while keydown
 * keydown     | |     |  |
 * time     -----------------
 * search          |       |
 *             |300|   |300|
 */
