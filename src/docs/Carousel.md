# Carousel

<!-- STORY -->

### Usage

```js
import Carousel from 'respectre-carousel';
```

### Properties

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| slides   | array   | -            | yes         |

### Roadmap

#### Default

```js
import Carousel from 'Carousel';

render() {
  const slides = [
    {
      img: 'https://loremflickr.com/640/360',
      label: 'the cat1',
    },
    {
      img: 'https://loremflickr.com/640/360',
      label: 'the cat2',
    },
    {
      img: 'https://loremflickr.com/640/360',
      label: 'the cat3',
    },
  ];
  return (
    <Carousel slides={slides} />
  );
}
```
