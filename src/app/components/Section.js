import Container from "./Container";

export default function Section({children}) {
    return (
      <section className="py-20">
        <Container>
      {children}
        </Container>
      </section>
    )
  }
  