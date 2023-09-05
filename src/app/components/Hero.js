import Section from "./Section";

export default function Hero({title, description, children}) {
    return (
        <Section>
        <div>
        <div>
        <h1 className="text-xl">{title}</h1>
        <p>{description}</p>
        {children}
        </div>
        </div>
      </Section>
    )
  }
  