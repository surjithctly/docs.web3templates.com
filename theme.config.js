export default {
  repository: "https://github.com/surjithctly/docs.web3templates.com", // project repo
  docsRepository: "https://github.com/surjithctly/docs.web3templates.com", // docs repo
  branch: "main", // branch of docs
  path: "/", // path of docs
  titleSuffix: " – Web3Templates Docs",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `© Web3Templates`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="36"
        viewBox="0 0 90 36"
        fill="none">
        <rect
          y="0.553833"
          width="89.1692"
          height="35.4462"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M16.8369 28H19.7446L24.1754 14.4862L28.6062 28H31.5138L37.2461 8.69846H34.1446L29.9077 23.4862L25.4492 9.77846H22.9015L18.4708 23.4862L14.2061 8.69846H11.1046L16.8369 28ZM49.8829 28.2769C53.6491 28.2769 56.8891 26.2 56.8891 22.3785C56.8891 20.0523 55.6429 18.1969 53.3999 17.5877C54.9783 16.84 55.8645 15.3723 55.8645 13.6C55.8645 10.3323 53.0122 8.42154 49.8552 8.42154C46.5045 8.42154 43.7629 10.4985 43.7629 14.0431L46.5599 14.2369C46.5875 12.2708 47.9168 11.1631 49.9106 11.1631C51.6275 11.1631 53.0122 12.0492 53.0122 13.9323C53.0122 15.7323 51.7106 16.7292 48.9968 16.7292V19.0277C51.2122 19.0277 54.0368 19.2215 54.0368 22.1015C54.0368 24.4554 52.1537 25.5354 49.9383 25.5354C47.446 25.5354 45.646 24.2338 45.646 21.8523L42.8214 22.0185C42.8214 26.1723 46.0337 28.2769 49.8829 28.2769ZM68.9097 28H71.9005V11.44H78.1589V8.69846H62.6789V11.44H68.9097V28Z"
          fill="#F7FAFC"
        />
      </svg>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Web3Templates Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@web3templates" />
      <meta property="og:title" content="Docs — Web3Templates" />
      <meta property="og:description" content="Web3Templates Documentation" />
      <meta name="apple-mobile-web-app-title" content="Web3Templates Docs" />
    </>
  ),
};
