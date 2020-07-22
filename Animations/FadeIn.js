import React from 'react'
import {Animated, Dimensions } from 'react-native'
class FadeIn extends React.Component {
    //FadeIn est un component parent, et il doit retourner ses enfants

  constructor(props){
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').width)
    }
  }

    //quand le component est monté
    componentDidMount() {
        Animated.spring(
          this.state.positionLeft,
          {
            toValue: 0
          }
        ).start()
    }

    render () {
        return (
            <Animated.View style= {{left: this.state.positionLeft} }>
                {this.props.children}
            </Animated.View>
            //le style doit etre applique au meme attribu : ici a left
        )
    }
}

export default FadeIn