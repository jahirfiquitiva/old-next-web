const apiKey = process.env.WEBMASTER_API_KEY || '';

export const getWebsiteFavicon = async (website: string) => {
  try {
    const response = await fetch('https://api.webmasterapi.com/v1/favicon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey,
        url: website,
      }),
    });

    return response.json();
  } catch (e) {}
  return {};
};
