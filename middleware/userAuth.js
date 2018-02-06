export default function ({ store, redirect, req }) {
  let token = getCookie(req, 'token')
  store.commit('SET_TOKEN', token)
  if (!store.state.token) {
    redirect('/user/login')
  }
}

function getCookie (req, cname) {
  let name = cname + '='
  if (req.headers.cookie) {
    let ca = req.headers.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
    }
  }
  return null
}
