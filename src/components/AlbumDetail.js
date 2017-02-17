/**
 * アルバム詳細用の共通コンポーネント
 */
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

//分割したコンポーネント要素をインポートしてこの中で利用可能にする
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//コンポーネントの内容を定義する ※ FunctionalComponent
//参考：ES2015(ES6)新構文：アロー関数(Arrow function)
const AlbumDetail = ({ album }) => {

  //取得した引数（オブジェクト：{ album }）を分割する
  const { id, title, category, image_url } = album;

  //各スタイルの適用のために分割する
  const {
    headerContentStyle,
    headerNumberTextStyle,
    headerTitleTextStyle,
    imageStyle
  } = styles;

  //表示する要素を返す
  return (
    <Card>
      {/* 1段目：写真番号と写真のタイトル名等を表示するセクション */}
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerNumberTextStyle}>写真番号：No.{id} ({category})</Text>
          <Text style={headerTitleTextStyle}>{title}</Text>
        </View>
      </CardSection>
      {/* 2段目：写真の内容を表示するセクション */}
      <CardSection>
        <Image style={imageStyle} source={{ uri: image_url }} />
      </CardSection>
      {/* 3段目：メモを登録できるボタン */}
      <CardSection>
        {/*
          渡す際はコールバックのメソッドをそのまま渡す形
          (参考)リンクの場合は、Linking.openUrl(url)でできる
          TODO: 1つのCard要素に対してメモができるようにする → 画面遷移＆Realm使ってみる
        */}
        <Button onPress={() => void(0)}>
          メモを登録する
        </Button>
      </CardSection>
    </Card>
  );
};

//このコンポーネントのStyle定義
const styles = {
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  headerNumberTextStyle: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
  headerTitleTextStyle: {
    fontSize: 12
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

//インポート可能にする宣言
export default AlbumDetail;
