import Container from "./Container";

export default function Navbar() {
    return (
        <nav className="bg-blue-600">
            <Container>
                <div className="flex items-center justify-between">

            <div>
                <a href="/">Coding Club</a>
            </div>
            <div className="flex">
                 <a href="/join">
                    Join
                </a>
                <a href="/projects">
                    Projects
                </a>

                <a href="/gallery">
                    Gallery
                </a>

                <a href="/about">
                    About
                </a>
                </div>
                </div>
        </Container>
        </nav>
    )
  }
  