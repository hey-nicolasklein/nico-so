interface Props {
    href: string;
    children?: any;
    rotateAmmount?: "string";
}

const Link: React.FC<Props> = ({ href, children, rotateAmmount }) => {
    return (
        <a className="group" href={href} target="_blank" rel="noreferrer">
            <span
                className="relative inline-block cursor-pointer 
            select-none bg-gradient-to-br from-emerald-500 to-green-300 
            bg-clip-text font-mono font-semibold leading-tight text-transparent 
            drop-shadow-xl transition group-hover:-translate-y-0.5 
            group-hover:-rotate-6 group-hover:scale-90"
            >
                {children}
            </span>
        </a>
    );
};

export default Link;
