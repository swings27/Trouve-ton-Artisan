import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

export default function Layout({ hero, children }) {
  return (
    <>
      <Header />
      {hero && (
        <section className="home-header d-flex align-items-center">
          <Container fluid="lg">
            <SearchBar />
          </Container>
        </section>
      )}

      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </>
  );
}