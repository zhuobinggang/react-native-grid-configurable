## Yet another grid for react native

### Usage

`yarn add react-native-grid-configurable`

then

```js
<Grid 
  cols={1} 
  height={70}  
  imgSrcs={[src1, src2, s3, s4, s5]} 
  titles={['A loo oo ooo ooo ooo ooo ooo ong book name','bb','bb','bb','bb']} 
  paddingBetweenRows={16}>
```

### Options
1. cols: How many grids a row have
2. height: The height(pixels) of the picture row, and the width & height of the `<img>` tag
3. imgSrcs: `['url1', 'url2', 'url3']`
4. titles: `['title1', 'title2', 'title3']`
5. paddingBetweenRows: Padding(pixels) between rows, default is 0

### Examples

Plese check the sample folder to run the examples.

`cols: 3, height: 90, paddingBetweenRows: 16, imgSrcs: [...], titles: [...]`

[sample1](docs/01.PNG)

`cols: 4, height: 70, paddingBetweenRows: 16`

[sample2](docs/02.PNG)

`cols: 1, height: 70, paddingBetweenRows: 16`

[sample3](docs/03.PNG)
