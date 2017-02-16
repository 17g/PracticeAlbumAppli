/**
 * アルバム一覧用のコンポーネント
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//HTTP通信用のライブラリ'axios'のインポート宣言
import axios from 'axios';

//アルバム詳細用の共通コンポーネントのインポート宣言
import AlbumDetail from './AlbumDetail';

//コンポーネントの内容を定義する ※ ClassComponent
class AlbumList extends Component {

  //ステートの初期化を行う
  state = { albums: [] };

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {

    //iTunesStoreのAPIよりデータを取得する(axiosを利用) → レスポンスをステートに格納する
    axios.get('https://immense-journey-38002.herokuapp.com/articles.json')
    .then(response => this.setState({ albums: response.data }));
  }

  //アルバムデータのレンダリングを行う
  renderAlbums() {
    //TODO: 処理内容を記述する
  }

  //コンポーネントの内容をレンダリングする
  render() {

    //データ取得確認用のデバッグログ
    console.log(this.state);

    //表示する要素を返す
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

//インポート可能にする宣言
export default AlbumList;
