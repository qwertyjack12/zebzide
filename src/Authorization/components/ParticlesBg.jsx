import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function ParticlesBg() {
    const particlesInit = useCallback(async main => {
        console.log(main);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(main);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                background: {
                    color: {
                        value: "#040d21",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "repluse",
                        },
                        onHover: {
                            enable: false,
                            mode: "grap",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            opacity: 0,
                            duration: 2,
                        },
                        grap: {
                            distance: 400,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        out_mode: "out",
                        random: true,
                        speed: 1,
                        straight: false,
                        attract: 600,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 160,
                    },
                    opacity: {
                        value: 1,
                        random: true,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        random: true,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}