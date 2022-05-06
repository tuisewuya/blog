import "../styles/globals.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="m-auto p-8 pt-0 box-content" style={{ maxWidth: 720 }}>
      <div
        className="text-2xl font-bold hover:underline cursor-pointer"
        style={{ height: 64, lineHeight: "64px" }}
      >
        望霄
      </div>
      <div style={{ padding: "64px 0" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
