import {useState} from 'react'

export const useAnimator = (delay) => {
    const [animated, setAnimated] = useState(false)
    const [intervalId, setIntervalId] = useState(-1)
    return {
        start(cb) {
            if (!animated) {
                setAnimated(true)
                setIntervalId(setInterval(cb, delay))
            }
        },

        stop() {
            if (animated) {
                setAnimated(false)
                clearInterval(intervalId)
                setIntervalId(-1)
            }
        },

        isAnimating() {
            return this.animated
        }
    }
}
