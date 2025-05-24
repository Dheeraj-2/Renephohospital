export const fadeIn = (direcion, delay) => {
    return {
        hidden: {
            y: direcion === 'up' ? 40 : direcion === 'down' ? -40 : 0,
            x: direcion === 'left' ? 40 : direcion === 'right' ? -40 : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}