export default function Card({title, description, author, image, link}) {
    return (
      <div className="bg-slate-200 border-b-8 border-b-gray-400 p-3 hover:bg-slate-300 ">
        <a className="no-underline text-black" href={link} target="_blank">
      <h2 className="text-xl">{title}</h2>
      <img className="w-full object-cover mb-2" src={image} />
      <p className="text-lg">{author}</p>
      <p>{description}</p>
        </a>
      </div>
    )
  }
  