/**
 * アルバム一覧用のコンポーネント
 */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

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
    //補足：APIは下記のURLで使用しているのものと同じになります。
    //※参考URL http://qiita.com/fumiyasac@github/items/04c66743a3c829d39b1f
    axios.get('https://immense-journey-38002.herokuapp.com/articles.json')
    .then(response => this.setState({ albums: response.data.article.contents }));
  }

  //アルバムデータのレンダリングを行う
  renderAlbums() {

    //stateに格納されたalbumの個数ぶん<AlbumDetail />の要素を作成する
    //取得データ：response.data.article.contentsは下記のような形でalbumsオブジェクト内に入る
    //→ 形式としては、[Object, Object, ...]
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  //コンポーネントの内容をレンダリングする
  render() {

    //データ取得確認用のデバッグログ
    //console.log(this.state.albums);

    //表示する要素を返す
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

//インポート可能にする宣言
export default AlbumList;
