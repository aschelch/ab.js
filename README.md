# ab.js

A simple AB testing JS script to hide/show HTML element depending on variant.

You can use it to add A/B testing on No-code tools like Carrd.co

## Example

- [Example with data attribute](demo/with-data-attribute.html)
- [Example with element ID](demo/with-id.html)

## Usage

First of all, import lib in `<head>` from CDN 

```html
<script src="https://cdn.jsdelivr.net/gh/aschelch/ab.js@master/dist/ab.min.js"></script>
```

### Using data attributes

Add `data-ab-variant` attribute on every HTML element you want to hide/show depending on your A/B testing 

For example:

```html
<h1 data-ab-variant="variantA">This is my variant A title</h1>
<h1 data-ab-variant="variantB">This is my variant B title</h1>
```

Call `ab()` function

```html
<script>
    ab();
</script>
```

### Using element ID

For example: 

```html
<h1 id="titleA">This is my variant A title</h1>
<h1 id="titleB">This is my variant B title</h1>
```

Call `ab(options)` function with, for each variant, the list of HTML element ID like :

```html
<script>
    ab({
        variants: {
            variantA: ['titleA'],
            variantB: ['titleB'],
        }
    });
</script>
```


## Test a variant

If you want to test a specific variant, you can test it by adding in URL `?ab-variant={variantName}`

Example: [demo/with-id.html?ab-variant=variantA](demo/with-id.html?ab-variant=variantA)

