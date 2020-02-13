const React = require('react')
const { View } = require('react-native')

module.exports = ({size = 8}) => {
  return <View style={{height: size}}></View>
}