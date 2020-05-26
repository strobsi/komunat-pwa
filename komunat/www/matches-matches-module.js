(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["matches-matches-module"],{

/***/ "./node_modules/@angular/animations/@angular/animations.es5.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/animations/@angular/animations.es5.js ***!
  \*********************************************************************/
/*! exports provided: AnimationBuilder, AnimationFactory, AUTO_STYLE, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, NoopAnimationPlayer, ɵAnimationGroupPlayer, ɵPRE_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationBuilder", function() { return AnimationBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFactory", function() { return AnimationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_STYLE", function() { return AUTO_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateChild", function() { return animateChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopAnimationPlayer", function() { return NoopAnimationPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationGroupPlayer", function() { return AnimationGroupPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵPRE_STYLE", function() { return ɵPRE_STYLE; });
/**
 * @license Angular v4.4.7
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * AnimationBuilder is an injectable service that is available when the {\@link
 * BrowserAnimationsModule BrowserAnimationsModule} or {\@link NoopAnimationsModule
 * NoopAnimationsModule} modules are used within an application.
 *
 * The purpose if this service is to produce an animation sequence programmatically within an
 * angular component or directive.
 *
 * Programmatic animations are first built and then a player is created when the build animation is
 * attached to an element.
 *
 * ```ts
 * // remember to include the BrowserAnimationsModule module for this to work...
 * import {AnimationBuilder} from '\@angular/animations';
 *
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first build the animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // then create a player from it
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * When an animation is built an instance of {\@link AnimationFactory AnimationFactory} will be
 * returned. Using that an {\@link AnimationPlayer AnimationPlayer} can be created which can then be
 * used to start the animation.
 *
 * \@experimental Animation support is experimental.
 * @abstract
 */
var AnimationBuilder = (function () {
    function AnimationBuilder() {
    }
    /**
     * @abstract
     * @param {?} animation
     * @return {?}
     */
    AnimationBuilder.prototype.build = function (animation) { };
    return AnimationBuilder;
}());
/**
 * An instance of `AnimationFactory` is returned from {\@link AnimationBuilder#build
 * AnimationBuilder.build}.
 *
 * \@experimental Animation support is experimental.
 * @abstract
 */
var AnimationFactory = (function () {
    function AnimationFactory() {
    }
    /**
     * @abstract
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    AnimationFactory.prototype.create = function (element, options) { };
    return AnimationFactory;
}());
/**
 * \@experimental Animation support is experimental.
 */
var AUTO_STYLE = '*';
/**
 * `trigger` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the
 * {\@link Component#animations component animations metadata page} to gain a better
 * understanding of how animations in Angular are used.
 *
 * `trigger` Creates an animation trigger which will a list of {\@link state state} and
 * {\@link transition transition} entries that will be evaluated when the expression
 * bound to the trigger changes.
 *
 * Triggers are registered within the component annotation data under the
 * {\@link Component#animations animations section}. An animation trigger can be placed on an element
 * within a template by referencing the name of the trigger followed by the expression value that
 * the
 * trigger is bound to (in the form of `[\@triggerName]="expression"`.
 *
 * Animation trigger bindings strigify values and then match the previous and current values against
 * any linked transitions. If a boolean value is provided into the trigger binding then it will both
 * be represented as `1` or `true` and `0` or `false` for a true and false boolean values
 * respectively.
 *
 * ### Usage
 *
 * `trigger` will create an animation trigger reference based on the provided `name` value. The
 * provided `animation` value is expected to be an array consisting of {\@link state state} and
 * {\@link transition transition} declarations.
 *
 * ```typescript
 * \@Component({
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component will make use of the `myAnimationTrigger` animation
 * trigger by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [\@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ## Disable Animations
 * A special animation control binding called `\@.disabled` can be placed on an element which will
 * then disable animations for any inner animation triggers situated within the element as well as
 * any animations on the element itself.
 *
 * When true, the `\@.disabled` binding will prevent all animations from rendering. The example
 * below shows how to use this feature:
 *
 * ```ts
 * \@Component({
 *   selector: 'my-component',
 *   template: `
 *     <div [\@.disabled]="isDisabled">
 *       <div [\@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * The `\@childAnimation` trigger will not animate because `\@.disabled` prevents it from happening
 * (when true).
 *
 * Note that `\@.disbled` will only disable all animations (this means any animations running on
 * the same element will also be disabled).
 *
 * ### Disabling Animations Application-wide
 * When an area of the template is set to have animations disabled, **all** inner components will
 * also have their animations disabled as well. This means that all animations for an angular
 * application can be disabled by placing a host binding set on `\@.disabled` on the topmost Angular
 * component.
 *
 * ```ts
 * import {Component, HostBinding} from '\@angular/core';
 *
 * \@Component({
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 *   \@HostBinding('\@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### What about animations that us `query()` and `animateChild()`?
 * Despite inner animations being disabled, a parent animation can {\@link query query} for inner
 * elements located in disabled areas of the template and still animate them as it sees fit. This is
 * also the case for when a sub animation is queried by a parent and then later animated using {\@link
 * animateChild animateChild}.
 *
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} definitions
 * @return {?}
 */
function trigger(name, definitions) {
    return { type: 7 /* Trigger */, name: name, definitions: definitions, options: {} };
}
/**
 * `animate` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `animate` specifies an animation step that will apply the provided `styles` data for a given
 * amount of time based on the provided `timing` expression value. Calls to `animate` are expected
 * to be used within {\@link sequence an animation sequence}, {\@link group group}, or {\@link
 * transition transition}.
 *
 * ### Usage
 *
 * The `animate` function accepts two input parameters: `timing` and `styles`:
 *
 * - `timing` is a string based value that can be a combination of a duration with optional delay
 * and easing values. The format for the expression breaks down to `duration delay easing`
 * (therefore a value such as `1s 100ms ease-out` will be parse itself into `duration=1000,
 * delay=100, easing=ease-out`. If a numeric value is provided then that will be used as the
 * `duration` value in millisecond form.
 * - `styles` is the style input data which can either be a call to {\@link style style} or {\@link
 * keyframes keyframes}. If left empty then the styles from the destination state will be collected
 * and used (this is useful when describing an animation step that will complete an animation by
 * {\@link transition#the-final-animate-call animating to the final state}).
 *
 * ```typescript
 * // various functions for specifying timing data
 * animate(500, style(...))
 * animate("1s", style(...))
 * animate("100ms 0.5s", style(...))
 * animate("5s ease", style(...))
 * animate("5s 10ms cubic-bezier(.17,.67,.88,.1)", style(...))
 *
 * // either style() of keyframes() can be used
 * animate(500, style({ background: "red" }))
 * animate(500, keyframes([
 *   style({ background: "blue" })),
 *   style({ background: "red" }))
 * ])
 * ```
 *
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} timings
 * @param {?=} styles
 * @return {?}
 */
function animate(timings, styles) {
    if (styles === void 0) { styles = null; }
    return { type: 4 /* Animate */, styles: styles, timings: timings };
}
/**
 * `group` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `group` specifies a list of animation steps that are all run in parallel. Grouped animations are
 * useful when a series of styles must be animated/closed off at different starting/ending times.
 *
 * The `group` function can either be used within a {\@link sequence sequence} or a {\@link transition
 * transition} and it will only continue to the next instruction once all of the inner animation
 * steps have completed.
 *
 * ### Usage
 *
 * The `steps` data that is passed into the `group` animation function can either consist of {\@link
 * style style} or {\@link animate animate} function calls. Each call to `style()` or `animate()`
 * within a group will be executed instantly (use {\@link keyframes keyframes} or a {\@link
 * animate#usage animate() with a delay value} to offset styles to be applied at a later time).
 *
 * ```typescript
 * group([
 *   animate("1s", { background: "black" }))
 *   animate("2s", { color: "white" }))
 * ])
 * ```
 *
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} steps
 * @param {?=} options
 * @return {?}
 */
function group(steps, options) {
    if (options === void 0) { options = null; }
    return { type: 3 /* Group */, steps: steps, options: options };
}
/**
 * `sequence` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `sequence` Specifies a list of animation steps that are run one by one. (`sequence` is used by
 * default when an array is passed as animation data into {\@link transition transition}.)
 *
 * The `sequence` function can either be used within a {\@link group group} or a {\@link transition
 * transition} and it will only continue to the next instruction once each of the inner animation
 * steps have completed.
 *
 * To perform animation styling in parallel with other animation steps then have a look at the
 * {\@link group group} animation function.
 *
 * ### Usage
 *
 * The `steps` data that is passed into the `sequence` animation function can either consist of
 * {\@link style style} or {\@link animate animate} function calls. A call to `style()` will apply the
 * provided styling data immediately while a call to `animate()` will apply its styling data over a
 * given time depending on its timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 })),
 *   animate("1s", { opacity: 1 }))
 * ])
 * ```
 *
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} steps
 * @param {?=} options
 * @return {?}
 */
function sequence(steps, options) {
    if (options === void 0) { options = null; }
    return { type: 2 /* Sequence */, steps: steps, options: options };
}
/**
 * `style` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `style` declares a key/value object containing CSS properties/styles that can then be used for
 * {\@link state animation states}, within an {\@link sequence animation sequence}, or as styling data
 * for both {\@link animate animate} and {\@link keyframes keyframes}.
 *
 * ### Usage
 *
 * `style` takes in a key/value string map as data and expects one or more CSS property/value pairs
 * to be defined.
 *
 * ```typescript
 * // string values are used for css properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical (pixel) values are also supported
 * style({ width: 100, height: 0 })
 * ```
 *
 * #### Auto-styles (using `*`)
 *
 * When an asterix (`*`) character is used as a value then it will be detected from the element
 * being animated and applied as animation data when the animation starts.
 *
 * This feature proves useful for a state depending on layout and/or environment factors; in such
 * cases the styles are calculated just before the animation starts.
 *
 * ```typescript
 * // the steps below will animate from 0 to the
 * // actual height of the element
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} tokens
 * @return {?}
 */
function style(tokens) {
    return { type: 6 /* Style */, styles: tokens, offset: null };
}
/**
 * `state` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `state` declares an animation state within the given trigger. When a state is active within a
 * component then its associated styles will persist on the element that the trigger is attached to
 * (even when the animation ends).
 *
 * To animate between states, have a look at the animation {\@link transition transition} DSL
 * function. To register states to an animation trigger please have a look at the {\@link trigger
 * trigger} function.
 *
 * #### The `void` state
 *
 * The `void` state value is a reserved word that angular uses to determine when the element is not
 * apart of the application anymore (e.g. when an `ngIf` evaluates to false then the state of the
 * associated element is void).
 *
 * #### The `*` (default) state
 *
 * The `*` state (when styled) is a fallback state that will be used if the state that is being
 * animated is not declared within the trigger.
 *
 * ### Usage
 *
 * `state` will declare an animation state with its associated styles
 * within the given trigger.
 *
 * - `stateNameExpr` can be one or more state names separated by commas.
 * - `styles` refers to the {\@link style styling data} that will be persisted on the element once
 * the state has been reached.
 *
 * ```typescript
 * // "void" is a reserved name for a state and is used to represent
 * // the state in which an element is detached from from the application.
 * state("void", style({ height: 0 }))
 *
 * // user-defined states
 * state("closed", style({ height: 0 }))
 * state("open, visible", style({ height: "*" }))
 * ```
 *
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} styles
 * @param {?=} options
 * @return {?}
 */
function state(name, styles, options) {
    return { type: 0 /* State */, name: name, styles: styles, options: options };
}
/**
 * `keyframes` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `keyframes` specifies a collection of {\@link style style} entries each optionally characterized
 * by an `offset` value.
 *
 * ### Usage
 *
 * The `keyframes` animation function is designed to be used alongside the {\@link animate animate}
 * animation function. Instead of applying animations from where they are currently to their
 * destination, keyframes can describe how each style entry is applied and at what point within the
 * animation arc (much like CSS Keyframe Animations do).
 *
 * For each `style()` entry an `offset` value can be set. Doing so allows to specifiy at what
 * percentage of the animate time the styles will be applied.
 *
 * ```typescript
 * // the provided offset values describe when each backgroundColor value is applied.
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * Alternatively, if there are no `offset` values used within the style entries then the offsets
 * will be calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 * ```
 *
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} steps
 * @return {?}
 */
function keyframes(steps) {
    return { type: 5 /* Keyframes */, steps: steps };
}
/**
 * `transition` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. If this information is new, please navigate to the {\@link
 * Component#animations component animations metadata page} to gain a better understanding of
 * how animations in Angular are used.
 *
 * `transition` declares the {\@link sequence sequence of animation steps} that will be run when the
 * provided `stateChangeExpr` value is satisfied. The `stateChangeExpr` consists of a `state1 =>
 * state2` which consists of two known states (use an asterix (`*`) to refer to a dynamic starting
 * and/or ending state).
 *
 * A function can also be provided as the `stateChangeExpr` argument for a transition and this
 * function will be executed each time a state change occurs. If the value returned within the
 * function is true then the associated animation will be run.
 *
 * Animation transitions are placed within an {\@link trigger animation trigger}. For an transition
 * to animate to a state value and persist its styles then one or more {\@link state animation
 * states} is expected to be defined.
 *
 * ### Usage
 *
 * An animation transition is kicked off the `stateChangeExpr` predicate evaluates to true based on
 * what the previous state is and what the current state has become. In other words, if a transition
 * is defined that matches the old/current state criteria then the associated animation will be
 * triggered.
 *
 * ```typescript
 * // all transition/state changes are defined within an animation trigger
 * trigger("myAnimationTrigger", [
 *   // if a state is defined then its styles will be persisted when the
 *   // animation has fully completed itself
 *   state("on", style({ background: "green" })),
 *   state("off", style({ background: "grey" })),
 *
 *   // a transition animation that will be kicked off when the state value
 *   // bound to "myAnimationTrigger" changes from "on" to "off"
 *   transition("on => off", animate(500)),
 *
 *   // it is also possible to do run the same animation for both directions
 *   transition("on <=> off", animate(500)),
 *
 *   // or to define multiple states pairs separated by commas
 *   transition("on => off, off => void", animate(500)),
 *
 *   // this is a catch-all state change for when an element is inserted into
 *   // the page and the destination state is unknown
 *   transition("void => *", [
 *     style({ opacity: 0 }),
 *     animate(500)
 *   ]),
 *
 *   // this will capture a state change between any states
 *   transition("* => *", animate("1s 0s")),
 *
 *   // you can also go full out and include a function
 *   transition((fromState, toState) => {
 *     // when `true` then it will allow the animation below to be invoked
 *     return fromState == "off" && toState == "on";
 *   }, animate("1s 0s"))
 * ])
 * ```
 *
 * The template associated with this component will make use of the `myAnimationTrigger` animation
 * trigger by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [\@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * #### The final `animate` call
 *
 * If the final step within the transition steps is a call to `animate()` that **only** uses a
 * timing value with **no style data** then it will be automatically used as the final animation arc
 * for the element to animate itself to the final state. This involves an automatic mix of
 * adding/removing CSS styles so that the element will be in the exact state it should be for the
 * applied state to be presented correctly.
 *
 * ```
 * // start off by hiding the element, but make sure that it animates properly to whatever state
 * // is currently active for "myAnimationTrigger"
 * transition("void => *", [
 *   style({ opacity: 0 }),
 *   animate(500)
 * ])
 * ```
 *
 * ### Transition Aliases (`:enter` and `:leave`)
 *
 * Given that enter (insertion) and leave (removal) animations are so common, the `transition`
 * function accepts both `:enter` and `:leave` values which are aliases for the `void => *` and `*
 * => void` state changes.
 *
 * ```
 * transition(":enter", [
 *   style({ opacity: 0 }),
 *   animate(500, style({ opacity: 1 }))
 * ])
 * transition(":leave", [
 *   animate(500, style({ opacity: 0 }))
 * ])
 * ```
 *
 * ### Boolean values
 * if a trigger binding value is a boolean value then it can be matched using a transition
 * expression that compares `true` and `false` or `1` and `0`.
 *
 * ```
 * // in the template
 * <div [\@openClose]="open ? true : false">...</div>
 *
 * // in the component metadata
 * trigger('openClose', [
 *   state('true', style({ height: '*' })),
 *   state('false', style({ height: '0px' })),
 *   transition('false <=> true', animate(500))
 * ])
 * ```
 * {\@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * \@experimental Animation support is experimental.
 * @param {?} stateChangeExpr
 * @param {?} steps
 * @param {?=} options
 * @return {?}
 */
function transition(stateChangeExpr, steps, options) {
    if (options === void 0) { options = null; }
    return { type: 1 /* Transition */, expr: stateChangeExpr, animation: steps, options: options };
}
/**
 * `animation` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language.
 *
 * `var myAnimation = animation(...)` is designed to produce a reusable animation that can be later
 * invoked in another animation or sequence. Reusable animations are designed to make use of
 * animation parameters and the produced animation can be used via the `useAnimation` method.
 *
 * ```
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *     style({ opacity: '{{ end }}'}))
 * ], { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * If parameters are attached to an animation then they act as **default parameter values**. When an
 * animation is invoked via `useAnimation` then parameter values are allowed to be passed in
 * directly. If any of the passed in parameter values are missing then the default values will be
 * used.
 *
 * ```
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If one or more parameter values are missing before animated then an error will be thrown.
 *
 * \@experimental Animation support is experimental.
 * @param {?} steps
 * @param {?=} options
 * @return {?}
 */
function animation(steps, options) {
    if (options === void 0) { options = null; }
    return { type: 8 /* Reference */, animation: steps, options: options };
}
/**
 * `animateChild` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. It works by allowing a queried element to execute its own
 * animation within the animation sequence.
 *
 * Each time an animation is triggered in angular, the parent animation
 * will always get priority and any child animations will be blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations and then allow the animations to run using `animateChild`.
 *
 * The example HTML code below shows both parent and child elements that have animation
 * triggers that will execute at the same time.
 *
 * ```html
 * <!-- parent-child.component.html -->
 * <button (click)="exp =! exp">Toggle</button>
 * <hr>
 *
 * <div [\@parentAnimation]="exp">
 *   <header>Hello</header>
 *   <div [\@childAnimation]="exp">
 *       one
 *   </div>
 *   <div [\@childAnimation]="exp">
 *       two
 *   </div>
 *   <div [\@childAnimation]="exp">
 *       three
 *   </div>
 * </div>
 * ```
 *
 * Now when the `exp` value changes to true, only the `parentAnimation` animation will animate
 * because it has priority. However, using `query` and `animateChild` each of the inner animations
 * can also fire:
 *
 * ```ts
 * // parent-child.component.ts
 * import {trigger, transition, animate, style, query, animateChild} from '\@angular/animations';
 * \@Component({
 *   selector: 'parent-child-component',
 *   animations: [
 *     trigger('parentAnimation', [
 *       transition('false => true', [
 *         query('header', [
 *           style({ opacity: 0 }),
 *           animate(500, style({ opacity: 1 }))
 *         ]),
 *         query('\@childAnimation', [
 *           animateChild()
 *         ])
 *       ])
 *     ]),
 *     trigger('childAnimation', [
 *       transition('false => true', [
 *         style({ opacity: 0 }),
 *         animate(500, style({ opacity: 1 }))
 *       ])
 *     ])
 *   ]
 * })
 * class ParentChildCmp {
 *   exp: boolean = false;
 * }
 * ```
 *
 * In the animation code above, when the `parentAnimation` transition kicks off it first queries to
 * find the header element and fades it in. It then finds each of the sub elements that contain the
 * `\@childAnimation` trigger and then allows for their animations to fire.
 *
 * This example can be further extended by using stagger:
 *
 * ```ts
 * query('\@childAnimation', stagger(100, [
 *   animateChild()
 * ]))
 * ```
 *
 * Now each of the sub animations start off with respect to the `100ms` staggering step.
 *
 * ## The first frame of child animations
 * When sub animations are executed using `animateChild` the animation engine will always apply the
 * first frame of every sub animation immediately at the start of the animation sequence. This way
 * the parent animation does not need to set any initial styling data on the sub elements before the
 * sub animations kick off.
 *
 * In the example above the first frame of the `childAnimation`'s `false => true` transition
 * consists of a style of `opacity: 0`. This is applied immediately when the `parentAnimation`
 * animation transition sequence starts. Only then when the `\@childAnimation` is queried and called
 * with `animateChild` will it then animate to its destination of `opacity: 1`.
 *
 * Note that this feature designed to be used alongside {\@link query query()} and it will only work
 * with animations that are assigned using the Angular animation DSL (this means that CSS keyframes
 * and transitions are not handled by this API).
 *
 * \@experimental Animation support is experimental.
 * @param {?=} options
 * @return {?}
 */
function animateChild(options) {
    if (options === void 0) { options = null; }
    return { type: 9 /* AnimateChild */, options: options };
}
/**
 * `useAnimation` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. It is used to kick off a reusable animation that is created using {\@link
 * animation animation()}.
 *
 * \@experimental Animation support is experimental.
 * @param {?} animation
 * @param {?=} options
 * @return {?}
 */
function useAnimation(animation, options) {
    if (options === void 0) { options = null; }
    return { type: 10 /* AnimateRef */, animation: animation, options: options };
}
/**
 * `query` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language.
 *
 * query() is used to find one or more inner elements within the current element that is
 * being animated within the sequence. The provided animation steps are applied
 * to the queried element (by default, an array is provided, then this will be
 * treated as an animation sequence).
 *
 * ### Usage
 *
 * query() is designed to collect mutiple elements and works internally by using
 * `element.querySelectorAll`. An additional options object can be provided which
 * can be used to limit the total amount of items to be collected.
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * query(), by default, will throw an error when zero items are found. If a query
 * has the `optional` flag set to true then this error will be ignored.
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Special Selector Values
 *
 * The selector value within a query can collect elements that contain angular-specific
 * characteristics
 * using special pseudo-selectors tokens.
 *
 * These include:
 *
 *  - Querying for newly inserted/removed elements using `query(":enter")`/`query(":leave")`
 *  - Querying all currently animating elements using `query(":animating")`
 *  - Querying elements that contain an animation trigger using `query("\@triggerName")`
 *  - Querying all elements that contain an animation triggers using `query("\@*")`
 *  - Including the current element into the animation sequence using `query(":self")`
 *
 *
 *  Each of these pseudo-selector tokens can be merged together into a combined query selector
 * string:
 *
 *  ```
 *  query(':self, .record:enter, .record:leave, \@subTrigger', [...])
 *  ```
 *
 * ### Demo
 *
 * ```
 * \@Component({
 *   selector: 'inner',
 *   template: `
 *     <div [\@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 })),
 *        query('.content', animate(1000, style({ opacity: 1 })),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * \@experimental Animation support is experimental.
 * @param {?} selector
 * @param {?} animation
 * @param {?=} options
 * @return {?}
 */
function query(selector, animation, options) {
    if (options === void 0) { options = null; }
    return { type: 11 /* Query */, selector: selector, animation: animation, options: options };
}
/**
 * `stagger` is an animation-specific function that is designed to be used inside of Angular's
 * animation DSL language. It is designed to be used inside of an animation {\@link query query()}
 * and works by issuing a timing gap between after each queried item is animated.
 *
 * ### Usage
 *
 * In the example below there is a container element that wraps a list of items stamped out
 * by an ngFor. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [\@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * The component code for this looks as such:
 *
 * ```ts
 * import {trigger, transition, style, animate, query, stagger} from '\@angular/animations';
 * \@Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *        //...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *   }
 * }
 * ```
 *
 * And now for the animation trigger code:
 *
 * ```ts
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * Now each time the items are added/removed then either the opacity
 * fade-in animation will run or each removed item will be faded out.
 * When either of these animations occur then a stagger effect will be
 * applied after each item's animation is started.
 *
 * \@experimental Animation support is experimental.
 * @param {?} timings
 * @param {?} animation
 * @return {?}
 */
function stagger(timings, animation) {
    return { type: 12 /* Stagger */, timings: timings, animation: animation };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?} cb
 * @return {?}
 */
function scheduleMicroTask(cb) {
    Promise.resolve(null).then(cb);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 */
var NoopAnimationPlayer = (function () {
    function NoopAnimationPlayer() {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this.parentPlayer = null;
        this.totalTime = 0;
    }
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NoopAnimationPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    NoopAnimationPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    NoopAnimationPlayer.prototype.onDestroy = function (fn) { this._onDestroyFns.push(fn); };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.init = function () { };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.play = function () {
        if (!this.hasStarted()) {
            this.triggerMicrotask();
            this._onStart();
        }
        this._started = true;
    };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.triggerMicrotask = function () {
        var _this = this;
        scheduleMicroTask(function () { return _this._onFinish(); });
    };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype._onStart = function () {
        this._onStartFns.forEach(function (fn) { return fn(); });
        this._onStartFns = [];
    };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.pause = function () { };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.restart = function () { };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.finish = function () { this._onFinish(); };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._destroyed = true;
            if (!this.hasStarted()) {
                this._onStart();
            }
            this.finish();
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.reset = function () { };
    /**
     * @param {?} p
     * @return {?}
     */
    NoopAnimationPlayer.prototype.setPosition = function (p) { };
    /**
     * @return {?}
     */
    NoopAnimationPlayer.prototype.getPosition = function () { return 0; };
    return NoopAnimationPlayer;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationGroupPlayer = (function () {
    /**
     * @param {?} _players
     */
    function AnimationGroupPlayer(_players) {
        var _this = this;
        this._players = _players;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        var doneCount = 0;
        var destroyCount = 0;
        var startCount = 0;
        var total = this._players.length;
        if (total == 0) {
            scheduleMicroTask(function () { return _this._onFinish(); });
        }
        else {
            this._players.forEach(function (player) {
                player.parentPlayer = _this;
                player.onDone(function () {
                    if (++doneCount >= total) {
                        _this._onFinish();
                    }
                });
                player.onDestroy(function () {
                    if (++destroyCount >= total) {
                        _this._onDestroy();
                    }
                });
                player.onStart(function () {
                    if (++startCount >= total) {
                        _this._onStart();
                    }
                });
            });
        }
        this.totalTime = this._players.reduce(function (time, player) { return Math.max(time, player.totalTime); }, 0);
    }
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationGroupPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype._onStart = function () {
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationGroupPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    AnimationGroupPlayer.prototype.onDestroy = function (fn) { this._onDestroyFns.push(fn); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.play = function () {
        if (!this.parentPlayer) {
            this.init();
        }
        this._onStart();
        this._players.forEach(function (player) { return player.play(); });
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.pause = function () { this._players.forEach(function (player) { return player.pause(); }); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.restart = function () { this._players.forEach(function (player) { return player.restart(); }); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.finish = function () {
        this._onFinish();
        this._players.forEach(function (player) { return player.finish(); });
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.destroy = function () { this._onDestroy(); };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype._onDestroy = function () {
        if (!this._destroyed) {
            this._destroyed = true;
            this._onFinish();
            this._players.forEach(function (player) { return player.destroy(); });
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.reset = function () {
        this._players.forEach(function (player) { return player.reset(); });
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    AnimationGroupPlayer.prototype.setPosition = function (p) {
        var /** @type {?} */ timeAtPosition = p * this.totalTime;
        this._players.forEach(function (player) {
            var /** @type {?} */ position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
        });
    };
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.getPosition = function () {
        var /** @type {?} */ min = 0;
        this._players.forEach(function (player) {
            var /** @type {?} */ p = player.getPosition();
            min = Math.min(p, min);
        });
        return min;
    };
    Object.defineProperty(AnimationGroupPlayer.prototype, "players", {
        /**
         * @return {?}
         */
        get: function () { return this._players; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AnimationGroupPlayer.prototype.beforeDestroy = function () {
        this.players.forEach(function (player) {
            if (player.beforeDestroy) {
                player.beforeDestroy();
            }
        });
    };
    return AnimationGroupPlayer;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ɵPRE_STYLE = '!';
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation package.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the animation package.
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=animations.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/common/fesm5/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/http.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v7.2.16
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHeaders` class represents the header configuration options for an HTTP request.
 * Instances should be assumed immutable with lazy parsing.
 *
 * @publicApi
 */
var HttpHeaders = /** @class */ (function () {
    /**  Constructs a new HTTP header object with the given values.*/
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param name The header name to check for existence.
     *
     * @returns Whether the header exits.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns the first header value that matches a given name.
     *
     * @param name The header name to retrieve.
     *
     * @returns A string if the header exists, null otherwise
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers.
     *
     * @returns A list of header names.
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns a list of header values for a given header name.
     *
     * @param name The header name from which to retrieve the values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param name The header name for which to append the values.
     *
     * @returns A clone of the HTTP header object with the value appended.
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param name The header name.
     * @param value Provides the value to set or overide for a given name.
     *
     * @returns A clone of the HTTP header object with the newly set header value.
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * Deletes all header values for a given name.
     *
     * @param name The header name.
     * @param value The header values to delete for a given name.
     *
     * @returns A clone of the HTTP header object.
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A class that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values. If you pass URL query parameters
 * without encoding, the query parameters can get misinterpreted at the receiving end.
 * Use the `HttpParameterCodec` class to encode and decode the query-string values.
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map$$1 = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 *
 * @see [HTTP Guide](guide/http)
 *
 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
* ```
 *
 * @publicApi
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpHandler])
    ], HttpClient);
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * @publicApi
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * @publicApi
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpCallbackContext, Object])
    ], JsonpClientBackend);
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @publicApi
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpClientBackend])
    ], JsonpInterceptor);
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for @{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_COOKIE_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String])
    ], HttpXsrfCookieExtractor);
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_HEADER_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpXsrfTokenExtractor, String])
    ], HttpXsrfInterceptor);
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpBackend, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpInterceptingHandler);
    return HttpInterceptingHandler;
}());
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    HttpClientXsrfModule_1 = HttpClientXsrfModule;
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    var HttpClientXsrfModule_1;
    HttpClientXsrfModule = HttpClientXsrfModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                HttpXsrfInterceptor,
                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
            ],
        })
    ], HttpClientXsrfModule);
    return HttpClientXsrfModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [
                HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ],
            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [
                HttpClient,
                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                HttpXhrBackend,
                { provide: HttpBackend, useExisting: HttpXhrBackend },
                BrowserXhr,
                { provide: XhrFactory, useExisting: BrowserXhr },
            ],
        })
    ], HttpClientModule);
    return HttpClientModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                JsonpClientBackend,
                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
            ],
        })
    ], HttpClientJsonpModule);
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/app/matches/matches.module.ts":
/*!*******************************************!*\
  !*** ./src/app/matches/matches.module.ts ***!
  \*******************************************/
/*! exports provided: MatchesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPageModule", function() { return MatchesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matches.page */ "./src/app/matches/matches.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var routes = [
    {
        path: '',
        component: _matches_page__WEBPACK_IMPORTED_MODULE_6__["MatchesPage"]
    }
];
var MatchesPageModule = /** @class */ (function () {
    function MatchesPageModule() {
    }
    MatchesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_matches_page__WEBPACK_IMPORTED_MODULE_6__["MatchesPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MatchesPageModule);
    return MatchesPageModule;
}());



/***/ }),

/***/ "./src/app/matches/matches.page.html":
/*!*******************************************!*\
  !*** ./src/app/matches/matches.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n<div class=\"container\">\n  <ion-row class=\"titleBar\">\n      <ion-col size=\"10\">\n      <p class=\"mainLbl\">DEIN TEAM</p>\n      <p hidden class=\"backBtn\" name=\"filing\" (click) = \"backClicked()\">< DEIN TEAM</p>\n\n      </ion-col>\n      <ion-col size=\"2\">\n        <p text-center class=\"black\">\n        <ion-icon class=\"substitutesBtn\" name=\"filing\" (click) = \"showSubstitutes()\"></ion-icon>\n      </p>\n      </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"SHOW_STATE == 1\"  class=\"content\" id=\"teamList\">\n  <div *ngFor=\"let match of matches; let i = index\" class=\"animated fadeInRight delay-{{ i }}s match_{{ i }}\">\n    <ion-card *ngIf=\"i < 20\" class=\"candidateCard\">\n      <ion-row class=\"iconRow\">\n        <ion-col size=\"3\">\n          <div class=\"cCardLeft\">\n              <div class=\"percentage\">\n                {{match.show_distance}}\n              </div> \n            </div>\n        </ion-col>\n\n        <ion-col size=\"6\">\n\n        </ion-col>\n        <ion-col size=\"1\">\n            <div class=\"reject\" (click) =\"reject(i)\">\n                <ion-icon name=\"close-circle\"></ion-icon>\n            </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"nameRow\">\n          <p class=\"c_name\">{{match.name}}<span class=\"slim\">{{match.birthdate}}</span></p>\n      </ion-row>\n      <ion-row class=\"fullHeight\">\n        <ion-col class=\"fullHeight\" size=\"3\">\n          <div class=\"cCardLeft\">\n              <ion-avatar>\n                <img src=\"https://komunat.de/uploads/{{match.uuid}}.png\" onError=\"this.src='https://komunat.de/avatar.png'\"/>\n                </ion-avatar>\n          </div>\n        </ion-col>\n        <ion-col size=\"1\">\n\n        </ion-col>\n\n        <ion-col size=\"7\">\n\n          <div class=\"cCardRight\">\n            <div class=\"c_info\">\n              <p class=\"slim c_info_text\">Liste: \n                <span class=\"bold\" *ngIf=\"match.list == 1\">CDU</span>\n                <span class=\"bold\" *ngIf=\"match.list == 2\">GRÜNE</span>\n                <span class=\"bold\" *ngIf=\"match.list == 3\">SPD</span>\n                <span class=\"bold\" *ngIf=\"match.list == 4\">Freie Wähler</span>\n                <span class=\"bold\" *ngIf=\"match.list == 5\">FDP</span>\n                <span class=\"bold\" *ngIf=\"match.list == 6\">SÖS</span>\n                <span class=\"bold\" *ngIf=\"match.list == 7\">AfD</span>\n                <span class=\"bold\" *ngIf=\"match.list == 8\">DIE LINKE</span>\n                <span class=\"bold\" *ngIf=\"match.list == 9\">PIRATEN</span>\n                <span class=\"bold\" *ngIf=\"match.list == 10\">Stadtisten</span>\n                <span class=\"bold\" *ngIf=\"match.list == 11\">Junge Liste Stuttgart</span>\n                <span class=\"bold\" *ngIf=\"match.list == 12\">ÖDP</span>\n                <span class=\"bold\" *ngIf=\"match.list == 13\">DiB</span>\n                <span class=\"bold\" *ngIf=\"match.list == 14\">Tierschutzpartei</span>\n                <span class=\"bold\" *ngIf=\"match.list == 15\">Die PARTEI</span>\n                <span class=\"bold\" *ngIf=\"match.list == 16\">BIG</span>\n                <span class=\"bold\" *ngIf=\"match.list == 17\">SchUB</span>\n                <span class=\"bold\" *ngIf=\"match.list == 18\">BZS23</span>\n                <span class=\"bold\" *ngIf=\"match.list == 19\">Kein Fahrverbot in Stuttgart</span>\n                <span class=\"bold\" *ngIf=\"match.list == 20\">FeLi</span>\n              </p>\n              <p class=\"slim c_info_text\">Listenplatz: \n                <span class=\"bold\">{{match.list_number}}</span>\n              \n              </p>\n              <p class=\"slim c_info_text\">Stadtbezirk: \n                <span class=\"bold\" *ngIf=\"match.district == 1\">Mitte</span>\n                <span class=\"bold\" *ngIf=\"match.district == 2\">Nord</span>\n                <span class=\"bold\" *ngIf=\"match.district == 3\">Ost</span>\n                <span class=\"bold\" *ngIf=\"match.district == 4\">Süd</span>\n                <span class=\"bold\" *ngIf=\"match.district == 5\">West</span>\n                <span class=\"bold\" *ngIf=\"match.district == 6\">Bad Cannstatt</span>\n                <span class=\"bold\" *ngIf=\"match.district == 7\">Birkach</span>\n                <span class=\"bold\" *ngIf=\"match.district == 8\">Botnang</span>\n                <span class=\"bold\" *ngIf=\"match.district == 9\">Degerloch</span>\n                <span class=\"bold\" *ngIf=\"match.district == 10\">Feuerbach</span>\n                <span class=\"bold\" *ngIf=\"match.district == 11\">Hedelfingen</span>\n                <span class=\"bold\" *ngIf=\"match.district == 12\">Möhringen</span>\n                <span class=\"bold\" *ngIf=\"match.district == 13\">Mühlhausen</span>\n                <span class=\"bold\" *ngIf=\"match.district == 14\">Münster</span>\n                <span class=\"bold\" *ngIf=\"match.district == 15\">Obertürkheim</span>\n                <span class=\"bold\" *ngIf=\"match.district == 16\">Plieningen</span>\n                <span class=\"bold\" *ngIf=\"match.district == 17\">Sillenbuch</span>\n                <span class=\"bold\" *ngIf=\"match.district == 18\">Stammheim</span>\n                <span class=\"bold\" *ngIf=\"match.district == 19\">Untertürkheim</span>\n                <span class=\"bold\" *ngIf=\"match.district == 20\">Vaihingen</span>\n                <span class=\"bold\" *ngIf=\"match.district == 21\">Wangen</span>\n                <span class=\"bold\" *ngIf=\"match.district == 22\">Weilimdorf</span>\n                <span class=\"bold\" *ngIf=\"match.district == 23\">Zuffenhausen</span>\n\n              </p>     \n          </div>       \n          </div>\n          <div class=\"detailArrow\">\n              <ion-icon name=\"arrow-dropright\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <div class=\"lefttopclickable\" (click) =\"showDetails(i)\">\n        </div>\n      <div class=\"clickable\" (click) =\"showDetails(i)\">\n        </div>\n    </ion-card>\n  </div>\n</div>\n\n<h4 *ngIf=\"SHOW_STATE == 1\" class=\"divider\">Die folgenden KandidatInnen sind nicht mehr in deinem Team:</h4>\n\n<div *ngIf=\"SHOW_STATE == 1\"  class=\"content\">\n  <div *ngFor=\"let match of matches | slice:20; let i = index\" class=\"animated fadeInRight delay-{{ i }}s match_{{ i }}\">\n    <ion-card class=\"candidateCard grayed\">\n      <ion-row class=\"iconRow\">\n        <ion-col size=\"3\">\n          <div class=\"cCardLeft\">\n              <div class=\"percentage\">\n                {{match.show_distance}}\n              </div> \n            </div>\n        </ion-col>\n\n        <ion-col size=\"6\">\n\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"nameRow\">\n          <p class=\"c_name\">{{match.name}}, <span class=\"slim\">{{match.birthdate}}</span></p>\n      </ion-row>\n      <ion-row class=\"fullHeight\">\n        <ion-col class=\"fullHeight\" size=\"3\">\n          <div class=\"cCardLeft\">\n              <ion-avatar>\n                <img src=\"https://komunat.de/uploads/{{match.uuid}}.png\" onError=\"this.src='https://komunat.de/avatar.png'\"/>\n              </ion-avatar>\n          </div>\n        </ion-col>\n        <ion-col size=\"1\">\n\n        </ion-col>\n\n        <ion-col size=\"7\">\n\n          <div class=\"cCardRight\">\n            <div class=\"c_info\">\n                <p class=\"slim c_info_text\">Liste: \n                    <span class=\"bold\" *ngIf=\"match.list == 1\">CDU</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 2\">GRÜNE</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 3\">SPD</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 4\">Freie Wähler</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 5\">FDP</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 6\">SÖS</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 7\">AfD</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 8\">DIE LINKE</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 9\">PIRATEN</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 10\">Stadtisten</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 11\">Junge Liste Stuttgart</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 12\">ÖDP</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 13\">DiB</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 14\">Tierschutzpartei</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 15\">Die PARTEI</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 16\">BIG</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 17\">SchUB</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 18\">BZS23</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 19\">Kein Fahrverbot in Stuttgart</span>\n                    <span class=\"bold\" *ngIf=\"match.list == 20\">FeLi</span>\n                  </p>\n                  <p class=\"slim c_info_text\">Listenplatz: \n                    <span class=\"bold\">{{match.list_number}}</span>\n                  \n                  </p>\n                  <p class=\"slim c_info_text\">Stadtbezirk: \n                    <span class=\"bold\" *ngIf=\"match.district == 1\">Mitte</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 2\">Nord</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 3\">Ost</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 4\">Süd</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 5\">West</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 6\">Bad Cannstatt</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 7\">Birkach</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 8\">Botnang</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 9\">Degerloch</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 10\">Feuerbach</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 11\">Hedelfingen</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 12\">Möhringen</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 13\">Mühlhausen</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 14\">Münster</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 15\">Obertürkheim</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 16\">Plieningen</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 17\">Sillenbuch</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 18\">Stammheim</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 19\">Untertürkheim</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 20\">Vaihingen</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 21\">Wangen</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 22\">Weilimdorf</span>\n                    <span class=\"bold\" *ngIf=\"match.district == 23\">Zuffenhausen</span>\n    \n                  </p> \n          </div>       \n          </div>\n          <div class=\"detailArrow\">\n              <ion-icon name=\"arrow-dropright\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <div class=\"lefttopclickable\" (click) =\"showDetails(i+20)\">\n        </div>\n      <div class=\"clickable\" (click) =\"showDetails(i+20)\">\n        </div>\n    </ion-card>\n  </div>\n  <br>\n  <ion-card *ngIf=\"LAST == false\" class=\"loadBtn\">\n      <ion-button (click)=\"loadMore()\" expand=\"block\">Mehr laden...</ion-button>\n    </ion-card>\n    <br>\n</div>\n\n<!--START SUBSTITUTE-->\n\n<div *ngIf=\"SHOW_STATE == 2\"  class=\"content\">\n    <div *ngFor=\"let s of substitutes; let i = index\" class=\"animated fadeInRight delay-{{ i }}s match_{{ i }}\">\n      \n        <ion-card class=\"candidateCard\">\n            <ion-row class=\"iconRow\">\n              <ion-col size=\"3\">\n                <div class=\"cCardLeft\">\n                    <div class=\"percentage\">\n                        {{s.show_distance}}\n                    </div> \n                  </div>\n              </ion-col>\n      \n              <ion-col size=\"6\">\n              </ion-col>\n              <ion-col size=\"1\">\n                  <div class=\"readd\" (click)=\"backToMatches(0,i)\">\n                      <ion-icon name=\"git-compare\"></ion-icon>\n                  </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"nameRow\">\n                <p class=\"c_name\">{{s.name}}, <span class=\"slim\">30</span></p>\n            </ion-row>\n            <ion-row class=\"fullHeight\">\n              <ion-col class=\"fullHeight\" size=\"3\">\n                <div class=\"cCardLeft\">\n                    <ion-avatar>\n                        <img src=\"https://komunat.de/uploads/{{s.uuid}}.png\" onError=\"this.src='https://komunat.de/avatar.png'\"/>\n                      </ion-avatar>\n                </div>\n              </ion-col>\n              <ion-col size=\"1\">\n      \n              </ion-col>\n      \n              <ion-col size=\"7\">\n      \n                <div class=\"cCardRight\">\n                  <div class=\"c_info\">\n                      <p class=\"slim c_info_text\">Liste: \n                          <span class=\"bold\" *ngIf=\"s.list == 1\">CDU</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 2\">GRÜNE</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 3\">SPD</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 4\">Freie Wähler</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 5\">FDP</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 6\">SÖS</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 7\">AfD</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 8\">DIE LINKE</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 9\">PIRATEN</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 10\">Stadtisten</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 11\">Junge Liste Stuttgart</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 12\">ÖDP</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 13\">DiB</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 14\">Tierschutzpartei</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 15\">Die PARTEI</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 16\">BIG</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 17\">SchUB</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 18\">BZS23</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 19\">Kein Fahrverbot in Stuttgart</span>\n                          <span class=\"bold\" *ngIf=\"s.list == 20\">FeLi</span>\n                        </p>\n                        <p class=\"slim c_info_text\">Listenplatz: \n                          <span class=\"bold\">{{s.list_number}}</span>\n                        \n                        </p>\n                        <p class=\"slim c_info_text\">Stadtbezirk: \n                          <span class=\"bold\" *ngIf=\"s.district == 1\">Mitte</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 2\">Nord</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 3\">Ost</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 4\">Süd</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 5\">West</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 6\">Bad Cannstatt</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 7\">Birkach</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 8\">Botnang</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 9\">Degerloch</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 10\">Feuerbach</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 11\">Hedelfingen</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 12\">Möhringen</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 13\">Mühlhausen</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 14\">Münster</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 15\">Obertürkheim</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 16\">Plieningen</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 17\">Sillenbuch</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 18\">Stammheim</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 19\">Untertürkheim</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 20\">Vaihingen</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 21\">Wangen</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 22\">Weilimdorf</span>\n                          <span class=\"bold\" *ngIf=\"s.district == 23\">Zuffenhausen</span>\n          \n                        </p> \n                </div>       \n                </div>\n                <div class=\"detailArrow\">\n                    <ion-icon name=\"arrow-dropright\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n            <div class=\"lefttopclickable\" (click) =\"showDetails(i)\">\n              </div>\n            <div class=\"clickable\" (click) =\"showDetails(i)\">\n              </div>\n          </ion-card>\n\n\n    </div>\n  </div>\n  <div class=\"tutorial\" *ngIf=\"NO_TUTORIAL==false\">\n    <ion-slides zoom=\"false\" pager=\"true\">\n        <ion-slide>\n          <div class=\"tutorialContent\">\n            <h5 class=\"left blue bold\">Nur noch kurz</h5>\n            <div class=\"tutorialText\">\n                <h5 class=\"white\">\n                    Klicke auf <ion-icon class=\"red rejectIcon\" name=\"close-circle\"></ion-icon> \n                    <br>\n                    <br>\n                    um KandidatInnen aus deinem Team zu entfernen\n                    <br>\n                    <br>\n                    Es rutschen dann automatisch KandidatInnen von unten nach.\n                    <br>\n                    <br>\n                </h5>\n              </div>\n              <ion-row class=\"tutBtn\">\n                  <ion-col size=12>\n                   <ion-button (click) =\"tutorialBtnClicked(0)\" color=\"light\" fill=\"outline\" expand=\"block\">Weiter</ion-button>\n                  </ion-col>\n              </ion-row>\n          </div>\n      </ion-slide>\n\n\n      <ion-slide>\n          <div class=\"tutorialContent\">\n              <h5 class=\"left blue bold\">Nur noch kurz</h5>\n              <br>\n                  <h5 class=\"white\">\n                    Die entfernten KandidatInnen findest du nach dem Aussortieren auf der Ersatzbank wieder.<br>\n                    Du kannst sie jederzeit mit <ion-icon class=\"blue rejectIcon\" name=\"git-compare\"></ion-icon>  \n                    <br><br>\n                    wieder hinzufügen. Dabei rutschen die unteren KandidatInnen wieder aus deiner Liste.\n                  </h5>\n                <ion-row class=\"tutBtn\">\n                    <ion-col size=12>\n                     <ion-button (click) =\"tutorialBtnClicked(1)\" color=\"light\" fill=\"outline\" expand=\"block\">Alles klar!</ion-button>\n                    </ion-col>\n                </ion-row>\n            </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>\n\n<ion-footer padding *ngIf=\"NO_TUTORIAL==true\">\n    <h1 (click)=\"showEmailSend()\" class=\"footer\">Fertig! </h1>\n</ion-footer>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/matches/matches.page.scss":
/*!*******************************************!*\
  !*** ./src/app/matches/matches.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  margin-top: 5vh; }\n\n.titleBar {\n  margin-left: 10px;\n  font-size: 7vw; }\n\n.subsIcon {\n  margin: 0px;\n  padding: 0px;\n  font-size: 12px; }\n\n.candidateCard {\n  height: 180px; }\n\n.grayed {\n  background-color: var(--komunat-gray-light); }\n\n.clickable {\n  position: absolute;\n  top: 25%;\n  left: 0px;\n  width: 100%;\n  height: 80%; }\n\n.lefttopclickable {\n  position: absolute;\n  top: 0%;\n  left: 0px;\n  width: 80%;\n  height: 25%; }\n\n.fullHeight {\n  height: 100%; }\n\n.black {\n  color: var(--komunat-gray-dark); }\n\n.nameRow {\n  margin-top: 5px;\n  margin-left: 10px;\n  margin-bottom: 5px; }\n\n.iconRow {\n  margin-left: -10px;\n  margin-top: 0px; }\n\n.cCardLeft {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center; }\n\n.cCardLeft ion-avatar {\n  width: 25vw;\n  height: 25vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n  margin-left: 10px;\n  position: absolute;\n  top: 30%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%; }\n\n.percentage {\n  background-color: #59BCED;\n  border-radius: 0px 10px 10px 0px;\n  height: 5vw;\n  line-height: 5vw;\n  vertical-align: middle;\n  width: 15vw;\n  position: absolute;\n  color: white;\n  font-weight: bold;\n  padding: 2px; }\n\n/* iPhone 5 \nYou can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .percentage {\n    background-color: #59BCED;\n    border-radius: 0px 10px 10px 0px;\n    height: 5vw;\n    line-height: 5vw;\n    vertical-align: middle;\n    width: 15vw;\n    position: absolute;\n    color: white;\n    font-weight: bold;\n    font-size: 10px;\n    padding: 2px; } }\n\n.cCardRight {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px; }\n\nh2 {\n  color: #4C4D4F;\n  font-size: 8vw;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\nh4 {\n  height: 5vh;\n  font-size: 6vw;\n  margin: 1em;\n  color: #4C4D4F;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\nh5 {\n  margin-top: 20px;\n  font-size: 5vw;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: var(--komunat-blue);\n  margin-bottom: 0px; }\n\n.c_name {\n  color: var(--komunat-gray-dark);\n  font-weight: bold;\n  font-size: 5vw; }\n\n.c_info {\n  margin-top: 10px; }\n\n.bold {\n  font-weight: bold; }\n\n.c_info_text {\n  margin-bottom: 4px;\n  margin-top: 4px;\n  color: var(--komunat-gray-dark); }\n\n.slim {\n  font-weight: lighter; }\n\n.blue {\n  color: var(--komunat-blue); }\n\n.white {\n  color: white; }\n\n.red {\n  color: var(--komunat-red); }\n\n.left {\n  text-align: left; }\n\n.reject {\n  position: absolute;\n  top: 0px;\n  right: -35px;\n  width: 8vw;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 12vw;\n  color: var(--komunat-red); }\n\n.rejectIcon {\n  transform: translate(0%, 35%);\n  font-size: 12vw; }\n\n.readd {\n  position: absolute;\n  top: 0px;\n  right: -10px;\n  width: 8vw;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 12vw;\n  color: var(--ion-color-success); }\n\n.detailArrow {\n  position: absolute;\n  right: -10px;\n  top: 20%;\n  left: 100%;\n  transform: translate(-50%, -50%);\n  font-size: 5vw; }\n\n.content {\n  margin-bottom: 100px; }\n\n.loadBtn {\n  margin-bottom: 100px; }\n\n.divider {\n  border-color: var(--komunat-gray-dark);\n  margin-top: -60px;\n  margin-bottom: 80px; }\n\n.footer {\n  background-color: var(--komunat-blue);\n  margin: 0px;\n  padding: 0px;\n  height: 60px;\n  line-height: 60px;\n  color: white;\n  font-weight: bold;\n  font-size: 5vw;\n  font-family: 'Source Sans Pro', sans-serif;\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px; }\n\n.tutorial {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8); }\n\n.tutorialContent {\n  width: 100vw;\n  height: 93vh;\n  margin-top: 8vh;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.exampleBox {\n  position: absolute;\n  height: 23vh;\n  width: 90%;\n  border-radius: 5px;\n  border: 2px solid;\n  border-color: white; }\n\n.tutorialText {\n  margin-top: 5vh;\n  text-align: left;\n  width: 90%; }\n\n.platform-android .tutBtn {\n  position: absolute;\n  bottom: 20%;\n  width: 90vw; }\n\n.platform-ios .tutBtn {\n  position: absolute;\n  bottom: 10%;\n  width: 90vw; }\n\n.finishIcon {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 40px; }\n\n.finishText {\n  display: inline-block;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL3RlYW10b21vcnJvdy9rb211bmF0LXB3YS9rb211bmF0L3NyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFBRSxnRUFBQTtFQUNmLGtDQUFrQztFQUNsQyxlQUFjLEVBQUE7O0FBSWxCO0VBQ0UsaUJBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDSSxXQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFZLEVBQUE7O0FBSWhCO0VBQ0UsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFRO0VBQ1IsV0FBVTtFQUNWLFdBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBR1o7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksK0JBQThCLEVBQUE7O0FBR2xDO0VBQ0UsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBaUI7RUFDakIsZUFBYyxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxZQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztFQUNoQyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLFdBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBR2Y7Z0RDZmdEOztBRGlCaEQ7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsV0FBVTtJQUNWLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWM7SUFDZCxZQUFXLEVBQUEsRUFDWjs7QUFHSDtFQUNJLFdBQVc7RUFDWCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFlO0VBQ2YsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwwQ0FBMEM7RUFDMUMsMEJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFjO0VBQ2QsK0JBQThCLEVBQUE7O0FBR2xDO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsMEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsWUFBVyxFQUFBOztBQUdiO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxZQUFXO0VBQ1gsVUFBUztFQUNULGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUc3QjtFQUVFLDZCQUE2QjtFQUM3QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxZQUFXO0VBQ1gsVUFBUztFQUNULGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLCtCQUErQixFQUFBOztBQUduQztFQUNJLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsUUFBTztFQUNQLFVBQVU7RUFFVixnQ0FBZ0M7RUFDaEMsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0kscUNBQXFDO0VBQ3JDLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFVO0VBQ1YsU0FBUTtFQUNSLFVBQVMsRUFBQTs7QUFHYjtFQUNFLGVBQWM7RUFDZCxPQUFNO0VBQ04sTUFBSztFQUNMLFdBQVU7RUFDVixZQUFXO0VBQ1gsOEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsWUFBVztFQUNYLFlBQVc7RUFDWCxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsVUFBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBYztFQUNkLGdCQUFnQjtFQUNoQixVQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUliO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR2hCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBGYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllcyAqL1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gICAgbWFyZ2luLXRvcDo1dmg7XG59XG5cblxuLnRpdGxlQmFyIHtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgZm9udC1zaXplOiA3dnc7XG59XG5cbi5zdWJzSWNvbiB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOjEycHg7XG59XG5cbi5jYW5kaWRhdGVDYXJkIHtcbiAgICBoZWlnaHQ6MTgwcHg7XG4gICAgXG59XG5cbi5ncmF5ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktbGlnaHQpO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MjUlO1xuICBsZWZ0OjBweDtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjgwJTtcbn1cblxuLmxlZnR0b3BjbGlja2FibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowJTtcbiAgbGVmdDowcHg7XG4gIHdpZHRoOjgwJTtcbiAgaGVpZ2h0OjI1JTtcbn1cblxuLmZ1bGxIZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJsYWNrIHtcbiAgICBjb2xvcjp2YXIoLS1rb211bmF0LWdyYXktZGFyaylcbn1cblxuLm5hbWVSb3cge1xuICBtYXJnaW4tdG9wOjVweDtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbi5pY29uUm93IHtcbiAgbWFyZ2luLWxlZnQ6LTEwcHg7XG4gIG1hcmdpbi10b3A6MHB4O1xufVxuXG4uY0NhcmRMZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNDYXJkTGVmdCBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMjV2dztcbiAgICBoZWlnaHQ6IDI1dnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDU1JTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucGVyY2VudGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5QkNFRDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgICBoZWlnaHQ6NXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDoxNXZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjJweDtcbn1cblxuLyogaVBob25lIDUgXG5Zb3UgY2FuIGFsc28gdGFyZ2V0IGRldmljZXMgd2l0aCBhc3BlY3QgcmF0aW8uICovICAgICAgICAgICAgICAgICAgICAgICBcbkBtZWRpYSBzY3JlZW4gYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAucGVyY2VudGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5QkNFRDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgICBoZWlnaHQ6NXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDoxNXZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MTBweDtcbiAgICBwYWRkaW5nOjJweDtcbiAgfSAgICAgICAgICAgICAgICBcbn1cblxuLmNDYXJkUmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xufVxuICBoMiB7XG4gICAgY29sb3I6ICM0QzRENEY7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIGg0IHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgICBtYXJnaW46IDFlbTtcbiAgICBjb2xvcjogIzRDNEQ0RjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGg1IHtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnZhcigtLWtvbXVuYXQtYmx1ZSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmNfbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDV2dztcbiAgfVxuXG4gIC5jX2luZm8ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuYm9sZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5jX2luZm9fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOjRweDtcbiAgICAgIGNvbG9yOnZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKVxuICB9XG5cbiAgLnNsaW0ge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG5cbiAgLmJsdWUge1xuICAgIGNvbG9yOnZhcigtLWtvbXVuYXQtYmx1ZSlcbiAgfVxuXG4gIC53aGl0ZSB7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cblxuICAucmVkIHtcbiAgICBjb2xvcjogdmFyKC0ta29tdW5hdC1yZWQpXG4gIH1cblxuICAubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5yZWplY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MHB4O1xuICAgIHJpZ2h0Oi0zNXB4O1xuICAgIHdpZHRoOjh2dztcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnZ3O1xuICAgIGNvbG9yOiB2YXIoLS1rb211bmF0LXJlZClcbn1cblxuLnJlamVjdEljb24ge1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDM1JSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAzNSUpO1xuICBmb250LXNpemU6IDEydnc7XG59XG5cbi5yZWFkZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowcHg7XG4gICAgcmlnaHQ6LTEwcHg7XG4gICAgd2lkdGg6OHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEydnc7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKVxufVxuXG4uZGV0YWlsQXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDotMTBweDtcbiAgICB0b3A6MjAlO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5sb2FkQnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktZGFyayk7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpO1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOjBweDtcbiAgICBsZWZ0OjBweDtcbiAgICByaWdodDowcHg7XG59XG5cbi50dXRvcmlhbCB7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICBsZWZ0OjA7XG4gIHRvcDowO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7IFxufVxuXG4udHV0b3JpYWxDb250ZW50IHtcbiAgd2lkdGg6MTAwdnc7XG4gIGhlaWdodDo5M3ZoO1xuICBtYXJnaW4tdG9wOjh2aDtcbiAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG5cbi5leGFtcGxlQm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6MjN2aDtcbiAgd2lkdGg6OTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4udHV0b3JpYWxUZXh0IHtcbiAgbWFyZ2luLXRvcDo1dmg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOjkwJTtcbn1cblxuLnBsYXRmb3JtLWFuZHJvaWQgLnR1dEJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwJTtcbiAgd2lkdGg6IDkwdnc7XG59XG5cbi5wbGF0Zm9ybS1pb3MgLnR1dEJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgd2lkdGg6IDkwdnc7XG59XG5cblxuLmZpbmlzaEljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiB9XG4gXG4gLmZpbmlzaFRleHR7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cblxuXG4iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgQ3VzdG9tIFByb3BlcnRpZXMgKi9cbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgbWFyZ2luLXRvcDogNXZoOyB9XG5cbi50aXRsZUJhciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDd2dzsgfVxuXG4uc3Vic0ljb24ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLmNhbmRpZGF0ZUNhcmQge1xuICBoZWlnaHQ6IDE4MHB4OyB9XG5cbi5ncmF5ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktbGlnaHQpOyB9XG5cbi5jbGlja2FibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTsgfVxuXG4ubGVmdHRvcGNsaWNrYWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDI1JTsgfVxuXG4uZnVsbEhlaWdodCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uYmxhY2sge1xuICBjb2xvcjogdmFyKC0ta29tdW5hdC1ncmF5LWRhcmspOyB9XG5cbi5uYW1lUm93IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG5cbi5pY29uUm93IHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7IH1cblxuLmNDYXJkTGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY0NhcmRMZWZ0IGlvbi1hdmF0YXIge1xuICB3aWR0aDogMjV2dztcbiAgaGVpZ2h0OiAyNXZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1NSU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuXG4ucGVyY2VudGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OUJDRUQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuICBoZWlnaHQ6IDV2dztcbiAgbGluZS1oZWlnaHQ6IDV2dztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDE1dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMnB4OyB9XG5cbi8qIGlQaG9uZSA1IFxuWW91IGNhbiBhbHNvIHRhcmdldCBkZXZpY2VzIHdpdGggYXNwZWN0IHJhdGlvLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpIHtcbiAgLnBlcmNlbnRhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OUJDRUQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgaGVpZ2h0OiA1dnc7XG4gICAgbGluZS1oZWlnaHQ6IDV2dztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweDsgfSB9XG5cbi5jQ2FyZFJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbmgyIHtcbiAgY29sb3I6ICM0QzRENEY7XG4gIGZvbnQtc2l6ZTogOHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuaDQge1xuICBoZWlnaHQ6IDV2aDtcbiAgZm9udC1zaXplOiA2dnc7XG4gIG1hcmdpbjogMWVtO1xuICBjb2xvcjogIzRDNEQ0RjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbmg1IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtYmx1ZSk7XG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxuXG4uY19uYW1lIHtcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNXZ3OyB9XG5cbi5jX2luZm8ge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLmNfaW5mb190ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktZGFyayk7IH1cblxuLnNsaW0ge1xuICBmb250LXdlaWdodDogbGlnaHRlcjsgfVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpOyB9XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ucmVkIHtcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtcmVkKTsgfVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnJlamVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMzVweDtcbiAgd2lkdGg6IDh2dztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJ2dztcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtcmVkKTsgfVxuXG4ucmVqZWN0SWNvbiB7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMzUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDM1JSk7XG4gIGZvbnQtc2l6ZTogMTJ2dzsgfVxuXG4ucmVhZGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTEwcHg7XG4gIHdpZHRoOiA4dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEydnc7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7IH1cblxuLmRldGFpbEFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAxMDAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDV2dzsgfVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4OyB9XG5cbi5sb2FkQnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7IH1cblxuLmRpdmlkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKTtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7IH1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtvbXVuYXQtYmx1ZSk7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4OyB9XG5cbi50dXRvcmlhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7IH1cblxuLnR1dG9yaWFsQ29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA5M3ZoO1xuICBtYXJnaW4tdG9wOiA4dmg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuLmV4YW1wbGVCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjN2aDtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuXG4udHV0b3JpYWxUZXh0IHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlOyB9XG5cbi5wbGF0Zm9ybS1hbmRyb2lkIC50dXRCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjAlO1xuICB3aWR0aDogOTB2dzsgfVxuXG4ucGxhdGZvcm0taW9zIC50dXRCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICB3aWR0aDogOTB2dzsgfVxuXG4uZmluaXNoSWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiA0MHB4OyB9XG5cbi5maW5pc2hUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/matches/matches.page.ts":
/*!*****************************************!*\
  !*** ./src/app/matches/matches.page.ts ***!
  \*****************************************/
/*! exports provided: MatchesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPage", function() { return MatchesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_pstate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/pstate */ "./src/app/utils/pstate.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "./node_modules/@ionic-native/google-analytics/ngx/index.js");










var MatchesPage = /** @class */ (function () {
    function MatchesPage(navCtrl, storage, ga, platform) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.ga = ga;
        this.platform = platform;
        this.matches = [];
        this.result = { values: [], contents: [] };
        this.page = 1;
        this.LAST = false;
        this.pdfObj = null;
        this.substitutes = [];
        this.present_title = "DEIN ERGEBNIS";
    }
    MatchesPage.prototype.swipedRight = function (e, i) {
        this.accept(i);
    };
    MatchesPage.prototype.swipedLeft = function (e, i) {
        this.reject(i);
    };
    MatchesPage.prototype.backToMatches = function (t, i) {
        if (t == 0) {
            // Coming from subs
            var element = document.querySelector('.match_' + i);
            this.matches.push(this.substitutes[i]);
            this.substitutes.splice(i, 1);
            this.pulseTeam();
            Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
                targets: element,
                translateX: "150vw",
                rotate: 40,
                easing: 'easeInOutQuad',
                duration: 400
            });
        }
    };
    MatchesPage.prototype.loadResults = function (a) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        var url = "https://komunat.de/result";
        a.page = this.page;
        var data = JSON.stringify(a);
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var data = JSON.parse(xhr.responseText);
                if (_this.page == 1) {
                    _this.matches = data;
                }
                else {
                    if (data.length < 30) {
                        _this.LAST = true;
                    }
                    for (var i = 0; i < data.length; i++) {
                        console.log("Appending to existing");
                        _this.matches.push(data[i]);
                    }
                }
                _this.sortMatches();
            }
            else if (xhr.readyState === 0) {
                xhr.send(data);
            }
        };
        xhr.send(data);
    };
    MatchesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.ga.trackView('matches')
                .then(function () {
                _this.ga.trackEvent('userflow', 'Reached Matches')
                    .then(function () {
                });
            })
                .catch(function (e) { return console.log(e); });
        });
        this.setState(_utils_pstate__WEBPACK_IMPORTED_MODULE_6__["PSTATE"].MATCHES);
        this.storage.get("matches").then(function (result) {
            if (!result) {
            }
            else {
                var a = JSON.parse(result);
                _this.NO_TUTORIAL = false;
                _this.result = a;
                _this.page = 1;
                _this.loadResults(a);
            }
        });
    };
    MatchesPage.prototype.reject = function (i) {
        var element = document.querySelector('.match_' + i);
        this.swipeOutLeft(element, i);
    };
    MatchesPage.prototype.accept = function (i) {
        var element = document.querySelector('.match_' + i);
        this.swipeOutRight(element, i);
    };
    MatchesPage.prototype.swipeOutLeft = function (elem, i) {
        this.pulseSubstitute();
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: elem,
            translateX: "-150vw",
            rotate: -40,
            easing: 'easeInOutQuad',
            duration: 400
        });
        var m = this.matches;
        var s = this.substitutes;
        setTimeout((function () {
            s.push(m[i]);
            m.splice(i, 1);
        }), 220);
    };
    MatchesPage.prototype.swipeOutRight = function (elem, i) {
        this.pulseTeam();
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: elem,
            translateX: "150vw",
            rotate: 40,
            easing: 'easeInOutQuad',
            duration: 400
        });
        var m = this.matches;
        setTimeout((function () {
            m.splice(i, 1);
        }), 220);
    };
    MatchesPage.prototype.backClicked = function () {
        this.setState(_utils_pstate__WEBPACK_IMPORTED_MODULE_6__["PSTATE"].MATCHES);
        var subs = document.querySelector(".substitutesBtn");
        var lbl = document.querySelector(".mainLbl");
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: [subs],
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: 200,
            complete: function () {
                var back = document.querySelector(".backBtn");
                var subs = document.querySelector(".substitutesBtn");
                lbl.removeAttribute("hidden");
                subs.removeAttribute("hidden");
                back.setAttribute("hidden", "false");
            }
        });
        // TODO hide subs and show matches
    };
    MatchesPage.prototype.showSubstitutes = function () {
        this.setState(_utils_pstate__WEBPACK_IMPORTED_MODULE_6__["PSTATE"].SUBS);
        var subs = document.querySelector(".substitutesBtn");
        var lbl = document.querySelector(".mainLbl");
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: [subs],
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: 200,
            complete: function () {
                var back = document.querySelector(".backBtn");
                var subs = document.querySelector(".substitutesBtn");
                subs.setAttribute("hidden", "true");
                lbl.setAttribute("hidden", "true");
                back.removeAttribute("hidden");
            }
        });
        // TODO: show subs and hide matches
    };
    MatchesPage.prototype.showTeam = function () {
        this.setState(_utils_pstate__WEBPACK_IMPORTED_MODULE_6__["PSTATE"].TEAM);
        var subs = document.querySelector(".substitutesBtn");
        var team = document.querySelector(".teamBtn");
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: [subs, team],
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: 200,
            complete: function () {
                var back = document.querySelector(".backBtn");
                var subs = document.querySelector(".substitutesBtn");
                subs.setAttribute("hidden", "true");
                back.removeAttribute("hidden");
            }
        });
        // TODO: show subs and hide matches
    };
    MatchesPage.prototype.showDetails = function (i) {
        // Show details of selected candidate
        var c;
        if (this.SHOW_STATE == 1) {
            c = this.matches[i];
        }
        else if (this.SHOW_STATE == 2) {
            c = this.substitutes[i];
        }
        var navigationExtras = {
            queryParams: {
                candidate: JSON.stringify(c)
            }
        };
        this.navCtrl.navigateForward(['cdetail'], navigationExtras);
    };
    MatchesPage.prototype.pulseTeam = function () {
        var elem = document.querySelector(".teamBtn");
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: elem,
            scale: 1.1,
            color: "#59BCED",
            easing: 'easeInOutQuad',
            translateY: "-1vh",
            duration: 200,
            direction: 'alternate',
        });
    };
    MatchesPage.prototype.pulseSubstitute = function () {
        var elem = document.querySelector(".substitutesBtn");
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: elem,
            scale: 1.1,
            color: "#59BCED",
            translateY: "-1vh",
            easing: 'easeInOutQuad',
            duration: 200,
            direction: 'alternate',
        });
    };
    MatchesPage.prototype.setState = function (s) {
        this.SHOW_STATE = s;
        if (s == _utils_pstate__WEBPACK_IMPORTED_MODULE_6__["PSTATE"].MATCHES) {
            this.present_title = "DEIN ERGEBNIS";
            this.sortMatches();
        }
        else if (s == _utils_pstate__WEBPACK_IMPORTED_MODULE_6__["PSTATE"].SUBS) {
            this.present_title = "DEINE ERSATZBANK";
        }
        else {
            this.present_title = "DEIN TEAM";
        }
    };
    MatchesPage.prototype.sortMatches = function () {
        this.matches.sort(function (a, b) {
            a.distance = a.distance;
            b.distance = b.distance;
            if (a.distance > b.distance) {
                return 1;
            }
            if (a.distance < b.distance) {
                return -1;
            }
            return 0;
        });
    };
    MatchesPage.prototype.tutorialBtnClicked = function (i) {
        if (i == 0) {
            this.slides.slideNext();
        }
        else {
            this.NO_TUTORIAL = true;
        }
    };
    MatchesPage.prototype.loadMore = function () {
        this.page = this.page + 1;
        this.loadResults(this.result);
    };
    MatchesPage.prototype.showEmailSend = function () {
        var _this = this;
        var team = this.matches.slice(0, 20);
        console.log(team);
        this.storage.ready().then(function () {
            _this.storage.set("team", JSON.stringify(team));
            _this.storage.set("result", JSON.stringify(_this.result));
            var navigationExtras = {
                queryParams: {
                //team: JSON.stringify(team)
                }
            };
            _this.navCtrl.navigateForward(['share'], navigationExtras);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], MatchesPage.prototype, "slides", void 0);
    MatchesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matches',
            template: __webpack_require__(/*! ./matches.page.html */ "./src/app/matches/matches.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('items', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.6s cubic-bezier(.4, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1)', opacity: 1 })) // final
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-10in)', opacity: 0, height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.4s cubic-bezier(.4, -0.6, 0.2, 0.6)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'scale(0.5)', opacity: 0,
                            height: '0px', margin: '0px'
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./matches.page.scss */ "./src/app/matches/matches.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__["GoogleAnalytics"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MatchesPage);
    return MatchesPage;
}());



/***/ }),

/***/ "./src/app/utils/pstate.ts":
/*!*********************************!*\
  !*** ./src/app/utils/pstate.ts ***!
  \*********************************/
/*! exports provided: PSTATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PSTATE", function() { return PSTATE; });
var PSTATE;
(function (PSTATE) {
    PSTATE[PSTATE["MATCHES"] = 1] = "MATCHES";
    PSTATE[PSTATE["SUBS"] = 2] = "SUBS";
    PSTATE[PSTATE["TEAM"] = 3] = "TEAM";
})(PSTATE || (PSTATE = {}));


/***/ })

}]);
//# sourceMappingURL=matches-matches-module.js.map