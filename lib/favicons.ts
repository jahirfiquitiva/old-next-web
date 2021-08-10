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

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      console.log(`Couldn't get favicon for website: "${website}"`);
    }
    return {};
  } catch (e) {
    return {};
  }
};
