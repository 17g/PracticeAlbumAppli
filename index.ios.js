/**
 * アルバムアプリの作成プラクティス
 * ※ Udemyの教材を使用して進めたサンプル + 自分で機能追加
 */

//必要なクラスのインポート宣言をする
import React from 'react';
import { AppRegistry, View } from 'react-native';

//Headerコンポーネントの部品を定義する
import Header from './src/components/header';

//アプリ本体の見た目を定義する
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
  </View>
 );

//アプリのView全体を表示する
AppRegistry.registerComponent('PracticeAlbumAppli', () => App);
