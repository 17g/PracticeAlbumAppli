/**
 * ヘッダー用の共通コンポーネント
 */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//コンポーネントの内容を定義する ※ FunctionalComponent
//参考：ES2015(ES6)新構文：アロー関数(Arrow function)
//引数propsでタイトル名を表示するように定義する
const Header = (props) => {

  //それぞれのStyle属性を分割して表示する
  const { textStyle, viewStyle } = styles;

  //表示する要素を返す
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//StyleSheet属性を使用せずに書くことも可能
const styles = {
  viewStyle: {
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 18
  }
};

//インポート可能にする宣言
export default Header;
