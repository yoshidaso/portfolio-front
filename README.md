Sota's portofolio

# Portfolio Frontend

## 環境変数の設定

### Vercel での設定

1. Vercel のダッシュボードでプロジェクトを選択
2. "Settings" > "Environment Variables" に移動
3. 以下の環境変数を追加：
   - `QIITA_ACCESS_TOKEN`: Qiita のアクセストークン

### Qiita アクセストークンの取得方法

1. [Qiita](https://qiita.com/)にログイン
2. 設定ページ（https://qiita.com/settings/applications）に移動
3. "個人用アクセストークン"セクションで新しいトークンを作成
4. 必要なスコープを選択（`read_qiita`が必須）
5. 生成されたトークンをコピー

### ローカル開発

`.env.local`ファイルを作成して以下を追加：

```
QIITA_ACCESS_TOKEN=your_qiita_access_token_here
```

## 本番環境のトラブルシューティング

### 401 エラーの対処法

1. Vercel の環境変数に QIITA_ACCESS_TOKEN が正しく設定されているか確認
2. トークンが有効で、適切なスコープが設定されているか確認
3. Vercel で再デプロイを実行
