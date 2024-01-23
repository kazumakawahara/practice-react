import Header from "../header/index.js";

export default function Layout2({ children }) {
  return (
    <>
      <Header position="bottom" />
      <main className="layout2">
        {children}
      </main>
    </>
  );
}
