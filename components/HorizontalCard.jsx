import Image from "next/image";

function HorizontalCard(props) {
  const { title, img, format, desc, url, badge, target = "_blank" } = props;

  return (
    <div className="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]">
      <a href={url} target={target}>
        <div className="hero-content flex-col md:flex-row">
          {img && (
            <Image
              src={img}
              width={750}
              height={422}
              format={format}
              alt={title}
              className="max-w-full md:max-w-[13rem] rounded-lg"
            />
          )}
          <div className="grow w-full">
            <h1 className="text-xl font-bold">
              {title}
              {badge && (
                <div className="badge badge-secondary mx-2">{badge}</div>
              )}
            </h1>
            <p className="py-1 text-1xl">{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default HorizontalCard;
