export default function Card({ item: props }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="">
        <img
          className="rounded-xl object-center object-cover h-full max-w-xs"
          src={`./src/imgs/${props.img}`}
          alt="img"
          aria-hidden="true"
        />
      </div>
      <div className="">
        <div className="flex items-center">
          <i className="fa-solid fa-location-dot text-primary mr-1"></i>
          <div className="uppercase tracking-widest mr-1">{props.country}</div>
          <a href={props.url} className="text-light">
            View on Google Maps
          </a>
        </div>
        <h1 className="text-4xl font-bold mt-2 mb-4">{props.location}</h1>
        <h3 className="text-xl font-semibold">{props.date}</h3>
        <p className="text-base mt-1">{props.description}</p>
      </div>
    </div>
  );
}
