# バックにやってもらいたいロジックまとめ

1. home > NewArticles > `articles`内に記事情報を代入
   - id、タイトル、ユーザー名、投稿日、本文、お気に入り数、コメント数
2. home > TrendArticles > `articles`、result > ArticlesResult > `articles`も同様に代入
   - ArticlesResultは検索結果の記事を表示する
3. components > Search.jsx内で検索ロジック作成
   - 入力内容の`search`への代入処理は実装済み