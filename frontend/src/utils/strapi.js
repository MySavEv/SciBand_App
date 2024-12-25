export function getStrapiApi(resourcePath) {
    const baseUrl = import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337"; // Fallback to localhost:1337 if BASE_URL is not defined
    const apiPrefix = "/api"; // Prefix for Strapi API
    
    if (!resourcePath.startsWith("/")) {
    resourcePath = `/${resourcePath}`;
    }

    return `http://${baseUrl}${apiPrefix}${resourcePath}`;
    }


