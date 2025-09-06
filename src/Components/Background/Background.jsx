import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export function Background() {

    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 90,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    grab: {
                        distance: 125,
                    },
                },
            },
            particles: {
                color: {
                    value: "#7132b9",
                },
                links: {
                    color: "#7132b9",
                    distance: 160,
                    enable: true,
                    opacity: 0.75,
                    width: 1.75,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1.5,
                    straight: true,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 250,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );


    return <Particles id="background" init={particlesLoaded} options={options} />;
};
