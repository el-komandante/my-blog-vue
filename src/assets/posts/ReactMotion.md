React-motion is an excellent library for adding flair and polish to UI interactions in your React apps. Its API, however, is quite terse and can be confusing at times (it took me a while to figure it out). The purpose of this tutorial is to go over some basic usage of react-motion's Motion and StaggeredMotion components as well as its spring() helper function. This tutorial is by no means exhaustive and intentionally stays away from more advanced usage of the library for the sake of simplicity. So, let's get started.

## Spring ##

The spring handles all the [**interpolation**](.) that goes on in react-motion. It animates any number from a starting value to its end value (as seen in the example below).

<!-- ![React-motion images](https://i1.wp.com/reactscript.com/wp-content/uploads/2016/05/React-Motion-Carousel.gif) -->

spring() also accepts a configuration object that defines the stiffness and damping of the interpolation - think of an actual spring. Low damping and high stiffness causes a more wobbly effect (the value will rapidly fluctuate between just below and just above the end value). A high damping value will create a steadier, more restrained effect. There are presets available for your use as well. You can animate **any** numerical value this way!

## Motion ##

The Motion component is what you want if you're trying to animate a single element, or a group of elements at the same time. The Motion component takes two props: defaultStyle and style. The defaultStyle object should contain the initial values for the properties that you'd like to animate. The style object is where your spring()s go - it should map the same properties as the defaultStyle object to spring()s containing the end values. This may seem a bit confusing at the moment but some examples should make things clearer.

## Example 1: Animate on Page Load ##
By default react-motion will trigger your animations on page load. Take a simple application, which renders a div within another div:





## Example 2: Toggle Animations ##
A popular way to trigger an animation is when a user interacts with an element on the page e.g. a button.

## Example 3: Looping ##


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
