
import { Animated } from "react-native"



const clampedScroll = ({CONTAINER_HEIGHT}) =>{

    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            offsetAnim,
        ),
        0,
        CONTAINER_HEIGHT
    )


    const headerTranslate = clampedScroll.interpolate({
        inputRange: [0, CONTAINER_HEIGHT],
        outputRange: [0, -CONTAINER_HEIGHT - 130],
        extrapolate: 'clamp',
    })
    
    const tabTranslate = clampedScroll.interpolate({
        inputRange: [0, CONTAINER_HEIGHT],
        outputRange: [0, CONTAINER_HEIGHT],
        extrapolate: 'clamp'
    
    })

}


