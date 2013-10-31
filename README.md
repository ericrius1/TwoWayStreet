> Classes and attributes that determine Martini look and feel.

# Forms

![Recommended form styles.](https://github.docusignhq.com/martini/styleguide/raw/master/img/taggingmodals.jpg)

## Classes

* `.field-row`: space between rows (`<div class="field-row"></div>`)

## Misc

* `<label></label><input></input>`: labels before or after inputs with IDs, not wrapped around them

# Validation

## Numbers

* `data-restrict="number"`: allow only numbers
* `data-restrict-number-min="NNN"`: min range boundary (reverts to previous value)
* `data-restrict-number-max="MMM"`: max range boundary (reverts to previous value)

Example:

```jade
input.expire-after(type='text', data-restrict='number',  data-restrict-number-original=expireAfter, data-restrict-number-min='1', data-restrict-number-max='365', data-key='expireAfter', value=expireAfter)
```

## CoffeeScript

* use short line without `\` when possible, e.g.,
  
  ```
  if b and
      c
        g()
  ```
* use `is` instead of `==` (both convert to `===`)


## Jade
