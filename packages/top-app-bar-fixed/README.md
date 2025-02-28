# `<mwc-top-app-bar-fixed>` [![Published on npm](https://img.shields.io/npm/v/@material/mwc-top-app-bar-fixed.svg)](https://www.npmjs.com/package/@material/mwc-top-app-bar-fixed)

> IMPORTANT: The Material Web Components are a work in progress and subject to
> major changes until 1.0 release.

Fixed Top App Bars are a container for items such as application title, navigation icon, and action items that are always visible.

![](images/fixed.gif)

For a version of this component that scrolls, see [`<mwc-top-app-bar>`](https://github.com/material-components/material-components-web-components/tree/master/packages/top-app-bar)

[Material Design Guidelines: App Bars: Top](https://material.io/design/components/app-bars-top.html)

[Demo](https://material-components.github.io/material-web/demos/top-app-bar-fixed/)

## Installation

```sh
npm install @material/mwc-top-app-bar-fixed
```

> NOTE: The Material Web Components are distributed as ES2017 JavaScript
> Modules, and use the Custom Elements API. They are compatible with all modern
> browsers including Chrome, Firefox, Safari, Edge, and IE11, but an additional
> tooling step is required to resolve *bare module specifiers*, as well as
> transpilation and polyfills for IE11. See
> [here](https://github.com/material-components/material-components-web-components#quick-start)
> for detailed instructions.

## Example Usage

### Standard

<img src="images/standard.png" height="56px">

```html
<mwc-top-app-bar-fixed>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">Title</div>
    <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar-fixed>
```

### Center Title

<img src="images/center_title.png" height="56px">

```html
<mwc-top-app-bar-fixed centerTitle>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">Title</div>
    <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar-fixed>
```

### Dense

<img src="images/dense.png" height="48px">

```html
<mwc-top-app-bar-fixed dense>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">Title</div>
    <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar-fixed>
```

### Prominent

<img src="images/prominent.png" height="128px">

```html
<mwc-top-app-bar-fixed prominent>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">Title</div>
    <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar-fixed>
```

### Prominent and Dense

<img src="images/prominent_and_dense.png" height="96px">

```html
<mwc-top-app-bar-fixed prominent dense>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">Title</div>
    <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
    <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar-fixed>
```

### Customize Colors

<img src="images/custom_colors.png" height="56px">

```css
mwc-top-app-bar-fixed {
  --mdc-theme-primary: orange;
  --mdc-theme-on-primary: black;
}
```

## API

### Slots
| Name | Description
| ---- | -----------
| `actionItems` | A number of `<mwc-icon-button>` elements to use for action icons on the right side. _NOTE:_ If using with `mwc-drawer`, please read note under [`Standard` drawer example](https://github.com/material-components/material-components-web-components/tree/master/packages/top-app-bar).
| `navigationIcon` | One `<mwc-icon-button>` element to use for the left icon.
| `title` | A `<div>` or `<span>` that will be used as the title text.
| _default_ | Scrollable content to display under the bar. This may be the entire application.

### Properties/Attributes
| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `centerTitle` | `boolean` | `false` | Centers the title horizontally. Only meant to be used with 0 or 1 `actionItems`.
| `dense` | `boolean` | `false` | Makes the bar a little smaller for higher density applications.
| `prominent` | `boolean` | `false` | Makes the bar much taller, can be combined with `dense`.
| `scrollTarget` | `HTMLElement` \| `Window` | `window` | Element used to listen for `scroll` events.

### Methods
*None*

### Events

| Name | Detail | Description
| ---- | ------ | -----------
| `MDCTopAppBar:nav` | `{}` | Fired when the `navigationIcon` is clicked.

### CSS Custom Properties

| Name | Default | Description
| ------------------------------------ | --------------- | ---
| `--mdc-top-app-bar-fixed-box-shadow` | mdc elevation 4 | Sets the box shadow of the fixed top app bar when scrolling.
| `--mdc-top-app-bar-width`            | `100%`          | Width of the `top-app-bar` in relation to the Window.

#### Elevation values

| Elevation Level | CSS Value
| --- | ---
| `4` | `0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`

#### Global Custom Properties

This component exposes the following global [theming](https://github.com/material-components/material-components-web-components/blob/master/docs/theming.md)
custom properties.

| Name | Default | Description
| ---- | ------- | -----------
| `--mdc-theme-primary` | Background color of the bar.
| `--mdc-theme-on-primary` | Text color of the title, and icon colors.
| `--mdc-typography-headline6-<PROPERTY>` | Styles the typography of the top-app-bar title.

## Additional references

- [MDC Web: Top App Bar](https://material.io/develop/web/components/top-app-bar/)
