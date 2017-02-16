/**
 * アルバム詳細用の共通コンポーネント
 */
import React from 'react';
import { Text, View } from 'react-native';

//コンポーネントの内容を定義する ※ FunctionalComponent
//参考：ES2015(ES6)新構文：アロー関数(Arrow function)
const AlbumDetail = () => {

  //表示する要素を返す
  return (
    <View>
      <Text>AlbumDetail</Text>
    </View>
  );
};

//インポート可能にする宣言
export default AlbumDetail;
