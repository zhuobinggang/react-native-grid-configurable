const React = require('react')
const { Text, View, Image, TouchableHighlight, ScrollView } = require('react-native')
const Blank = require('./Blank')

function isRemoteSrc(src){
  return /^http/.test(src)
}

function gridImg(widthPercent, imgHeight, imgSrc, cb, index){
  return <View style={{height: imgHeight, width: widthPercent + '%', flex:1, alignItems: 'center', justifyContent: 'center'}}  key={index}>
    {
      imgSrc == null ? null : 
      <TouchableHighlight onPress={() => {return cb!=null ? cb() : null}} >
        <Image
          style={{width: imgHeight, height: imgHeight, resizeMode: 'contain'}}
          source={isRemoteSrc(imgSrc) ? {uri: imgSrc} : imgSrc} /> 
      </TouchableHighlight>

    }
  </View>
}

function gridSubTitle(widthPercent, title, cb, index){
  return <View style={{width: widthPercent+'%', flex:1, alignItems: 'center', justifyContent: 'center',}}  key={index}>
    {title == null ? null : <Text>{title}</Text>}
  </View>
}

function imgRow(imgSrcsSlice, widthPercent, imgHeight, cols, callbackSlice){
  const result = []
  for(let i = 0 ;i< cols; i++){
    result.push(gridImg(widthPercent, imgHeight, imgSrcsSlice[i], callbackSlice[i], i))
  }
  return result
}

function subtitleRow(titlesSlice, widthPercent, cols, callbackSlice){
  const result = []
  for(let i = 0 ;i< cols; i++){
    result.push(gridSubTitle(widthPercent, titlesSlice[i], callbackSlice[i], i))
  }
  return result
}


function gridRows(cols, imgHeight, titles, imgSrcs, paddingBetweenRows, callbacks){
  const rows = []
  const widthPercent = Math.floor(100 / cols);
  const gridNum = Math.max(titles.length, imgSrcs.length);
  const rowNum = gridNum / cols + 1;

  for(let i=1; i<rowNum; i++){
    const offset = (i - 1) * cols;
    const imgSrcsSlice = imgSrcs.slice(offset, offset + cols);
    const titlesSlice = titles.slice(offset, offset + cols);
    const callbackSlice = callbacks.slice(offset, offset + cols);
    rows.push((
	  <View key={i}>
        <View style={{flexDirection:'row', height: imgHeight}}>
          {imgRow(imgSrcsSlice, widthPercent, imgHeight, cols, callbackSlice)}
        </View>
        <View style={{flexDirection:'row'}}>
          {subtitleRow(titlesSlice, widthPercent, cols, callbackSlice)}
        </View>
		<Blank size={paddingBetweenRows} />
      </View>
    ))
  }

  return rows
}

function arrayEqual(array1, array2){
  return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

export default class Grid extends React.Component{
  constructor(props){
    super(props)
  }
  shouldComponentUpdate = (nextProps, _) => {
    if(arrayEqual(nextProps.imgSrcs, this.props.imgSrcs)){
      return false;
    }else{
      return true;
    }
  }
  render(){
    const {cols = 3, height = 100, titles = [], imgSrcs = [], paddingBetweenRows = 0, callbacks= []} = this.props;
    return (
      <ScrollView style={{width: '100%', }}>
        {gridRows(cols, height, titles, imgSrcs, paddingBetweenRows, callbacks)}
      </ScrollView>
    )
  }
}