const HeroSectionDesktop = () => {
    return (
        <svg
            width={767}
            height={829}
            viewBox="0 0 767 829"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <mask
                id="a"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={69}
                y={68}
                width={606}
                height={692}
            >
                <path
                    d="M80.255 377.576C124.182 216.602 293.981 31.091 454.954 75.018c160.974 43.927 252.165 300.658 208.238 461.631-43.926 160.974-210.031 255.859-371.005 211.932C131.214 704.654 36.328 538.55 80.255 377.576z"
                    fill="url(#paint0_radial_1009_93)"
                />
            </mask>
            <g mask="url(#a)">
                <circle
                    cx={371.724}
                    cy={457.113}
                    r={302.126}
                    transform="rotate(-164.737 371.724 457.113)"
                    fill="url(#paint1_radial_1009_93)"
                />
                <rect
                    x={81.8145}
                    y={-4.198}
                    width={572}
                    height={764}
                    rx={5}
                    transform="rotate(.263 81.814 -4.198)"
                    fill="url(#pattern0)"
                />
            </g>
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#image0_1009_93"
                        transform="matrix(.00144 0 0 .00108 -.215 .014)"
                    />
                </pattern>
                <radialGradient
                    id="paint0_radial_1009_93"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(-30.074 1191.884 262.122) scale(704.019 709.457)"
                >
                    <stop stopColor="#E67F21" />
                    <stop offset={0.53146} stopColor="#B90707" />
                    <stop offset={1} stopColor="#B90778" />
                </radialGradient>
                <radialGradient
                    id="paint1_radial_1009_93"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(138.565 291.69 220.174) scale(660.095)"
                >
                    <stop stopColor="#E67F21" />
                    <stop offset={0.53146} stopColor="#B90707" />
                    <stop offset={1} stopColor="#B90778" />
                </radialGradient>
                <image
                    id="image0_1009_93"
                    width={1066}
                    height={1600}
                />
            </defs>
        </svg>
    )
}

export default HeroSectionDesktop