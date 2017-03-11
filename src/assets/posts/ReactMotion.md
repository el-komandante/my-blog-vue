[React-motion](https://github.com/chenglou/react-motion) is an excellent library for adding flair and polish to UI interactions in your React apps. It excels in creating smooth, natural looking animations and gives you the opportunity to integrate your animation logic into the state of your application. Its API, however, is quite terse and can be confusing at times (it took me a while to figure it out). The purpose of this tutorial is to go over some basic usage of react-motion's Motion and StaggeredMotion components as well as its spring() helper function. This tutorial is by no means exhaustive and intentionally stays away from more advanced usage of the library for the sake of simplicity. So, let's get started.

## spring(val: number, config: {stiffness: number, damping: number}) ##

The spring handles all the [**interpolation**](https://en.wikipedia.org/wiki/Interpolation) that goes on in react-motion. It animates any number from a starting value to its end value.

<!-- ![React-motion images](https://i1.wp.com/reactscript.com/wp-content/uploads/2016/05/React-Motion-Carousel.gif) -->

spring() also accepts a configuration object that defines the stiffness and damping of the interpolation - think of an actual spring. Low damping and high stiffness causes a more wobbly effect (the value will rapidly fluctuate between just below and just above the end value). A high damping value will create a steadier, more restrained effect - the example below uses a high damping value to emphasize the purpose of spring(). There are presets available for your use as well. You can animate **any** numerical value this way! The below example shows how the spring moves from a value of zero to a value of 1.

### spring() Example ###
<!-- <div style="width: 100%; max-height: 400px; display: flex; justify-content: center; align-items: center;">
  <video autoplay loop style="max-height: 400px;">
    <source src="https://s3.us-east-2.amazonaws.com/blog-assets-000001/spring-example-clipped.webm" type="video/webm">
  <video>
</div> -->

## Motion ##

The `Motion` component is what you want if you're trying to animate a single element, or a group of elements at the same time. Motion takes two props: `defaultStyle` and `style`. The `defaultStyle` object should contain the initial values for the properties that you'd like to animate. The `style` object is where your `spring()`s go and it should map the same properties as the `defaultStyle` object to `spring()`s containing your end values. This may seem a bit confusing at the moment but some examples should make things clearer.

## Example 1: Animate on Page Load ##
By default react-motion will trigger your animations on page load. Take this simple application, which renders a div within another div:





## Example 2: Toggle ##
A popular way to trigger an animation is when a user interacts with an element on the page e.g. a button. You can use the ternary operator to

## Example 3: Looping ##
Looping is fairly straightforward: pass in a callback function as Motion's `onRest` prop and it will be called when the animation finishes.

## StaggeredMotion ##
`StaggeredMotion` is very similar to Motion with a few key differences. As you may have guessed, you can use it to chain animations as if they were connected by real springs.


```js
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

export default class MotionExample extends Component {
  render() {
    return (
      <div className="bg">
        <div className="square" style={ {display: "flex"} }>
        </div>
      </div>
    )
  }
}
```
