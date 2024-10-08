const { fetch: originalFetch } = window
window.fetch = async (...args) => {
  // eslint-disable-next-line prefer-const
  let [resource, config] = args
  resource = !resource.toString().includes("/locales/")
    ? `${import.meta.env.VITE_API}${resource}`
    : resource

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

export const $fetch = window.fetch
