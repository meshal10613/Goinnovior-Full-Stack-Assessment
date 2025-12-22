import { TbLocation } from "react-icons/tb";

const LocationLink = ({ location }) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
    )}`;

    return (
        <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 flex items-center gap-1 group"
        >
            <TbLocation size={20} />
            <span className="font-light text-[14px] group-hover:underline">
                {location}
            </span>
        </a>
    );
};

export default LocationLink;