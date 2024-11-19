# クローン～起動
1. リポジトリをクローンする
2. コンソールを開き、`Front/techPad-frontend` に移動する
```
cd Front/techPad-frontend
```
3. ライブラリをインストールする
```
npm clean-install
```
4. `.env.local.example` をコピーし、`.env.local` にリネームする
- 中身を [これ](https://discord.com/channels/1282863319505698856/1301376093395222619/1308224525363838986) に置き換えてください
5. ビルド、起動する
```
npm run build
npm start
```
