import "./SvgIcon.scss";

// https://simpleicons.org

export function SvgIcon({ title, path, color, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="item-svg"
                style={{ color }}
            >
                <title>{title}</title>
                <path d={path} />
            </svg>
        </a>
    );
}
