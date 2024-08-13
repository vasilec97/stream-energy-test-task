export const createFetchInterceptors = () => {
  const { fetch: originalFetch } = window
  window.fetch = async (...args) => {
    // eslint-disable-next-line prefer-const
    let [resource, config] = args
    resource = `${import.meta.env.VITE_API}${resource}`

    const headers = {
      ...config?.headers,
      "Content-Type": "application/json",
    }

    const response = await originalFetch(resource, {
      ...config,
      headers,
    })

    return response
  }
}
