export default function PostItem({ imgSrc, alt, text, title, type }: any) {
  return (
    <article className={`flex ${type === "blog" && "flex-col w-1/2"}`}>
      <img className="object-cover h-80 w-full" src={imgSrc} alt={alt} />
      <div className={`${type === "New of the day" && "ml-4"} p-2`}>
        <h3 className="mb-2 font-semibold">
          {type === "New of the day" ? "New of the day" : title}
        </h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
