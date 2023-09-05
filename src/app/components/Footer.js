import Container from "./Container";

export default function Footer() {
    return ( 
        <div className="bg-blue-300 p-8">
          <Container>
        
        <h1 className="mb-3">Coding Club</h1>
        <div className="flex justify-between">
            <div>
                <h2>Join</h2>
                <ul className="list-none">
                    <li>
                        <a href="https://discord.gg/N7D7c3tnc7">Discord</a>
                    </li>
                    <li>
                        <a href="https://github.com/cchs-code">Github</a>
                    </li>
                </ul>
            </div>

        </div>
        </Container>
      </div>
    )
  }
  