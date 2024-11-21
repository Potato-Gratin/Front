# ロジックまとめ

1. home > NewArticles > `articles`内に記事情報を代入
   - id、タイトル、ユーザー名、投稿日、本文、お気に入り数、コメント数
2. home > TrendArticles > `articles`、searchResult > ArticlesResult > `articles`も同様に代入
   - ArticlesResultは検索結果の記事を表示する
3. components > Search.jsx内で検索ロジック作成
   - 入力内容の`search`への代入処理は実装済み
   - /result遷移時にgetで入力内容を渡している（暫定）
4. searchResult > UserResult > `users`内にユーザー情報を代入
   - uid、id、ユーザー名、プロフィール、記事数
   - /user遷移時にgetでuidを渡している（暫定）
5. UserProfileForm > アイコン画像のセッティング
6. Editor
   - バリデーション
   - 値の入れ込み
     - markdownValue, titleValue, radioValue
