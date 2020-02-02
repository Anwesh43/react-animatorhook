import {useAnimator} from './Animator'
import React, {useState} from 'react'

const Counter = (props) => {
    const [time, setTime] = useState(0)
    const animator = useAnimator(1000)
    return (<div>
                <button onClick = {() => {
                    var currTime = time
                    animator.start(() => {
                        currTime++
                        setTime(currTime)
                    })
                }}>
                    Start
                </button>
                <button onClick = {() => {animator.stop()}}>
                    Stop
                </button>
                <div>
                    {time}
                </div>
          </div>)
}
export default Counter
