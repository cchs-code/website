import Card from "../components/Card";
import Hero from "../components/Hero";
import Section from "../components/Section"; 

export default function Projects() {
    return (
        <main>

        <Hero title="Projects" description="Want to submit a cool project? Fill out this form below.">
            <a href="https://forms.gle/9ZJCULRLgiBq3TaKA">Click me</a>
        </Hero>

        <Section>
            <div className="grid grid-cols-3 gap-4">

            <Card title="Movie App" author="Risley Le" description="A basic web app where you can find info about movies. Uses the The Movie Database API." link="https://github.com/bitstorms/movie-app" image="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"/>
            </div>
        </Section>
        </main>
    )
  }
  