const buildApp = (port = 0) => {
  return Bun.serve({ port: port,
    fetch (request) {
      const { searchParams } = new URL(request.url)
      const name = searchParams.get('name') ?? 'stranger'

      return new Response(`Hello ${name}!`)
    }
  })
}

export default buildApp
