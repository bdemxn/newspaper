export const getNews = async (apikey, q) => {

  const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apikey}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const { articles } = await data;

  const newspaper = articles.map(articles => ({
    author: articles.author,
    title: articles.title,
    img: articles.urlToImage,
    contentUrl: articles.url,
    desc: articles.description
  }));

  return newspaper;
}