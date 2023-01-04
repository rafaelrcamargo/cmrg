export default function Head() {
  const url = "https://cmrg.dev/"
  const title = "Cmrg | Full Stack Developer"
  const description = "Sharing about tech, basically everything nowadays."
  const author = "Rafael R. Camargo"

  return (
    <>
      {/* Recommended Meta Tags */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      {/* Authorship Meta Tags */}
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <meta
        name="keywords"
        content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
      />
      <meta name="distribution" content="web" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content={description} />

      {/* Open Graph meta tags */}
      <meta name="og:url" content={url} />
      <meta name="og:type" content="site" />
      <meta name="og:title" content={title} />
      <meta name="og:image" content={"/og.png"} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Twitter Summary card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@rafaelrcamargo" />
    </>
  )
}
