# ポケモン図鑑 (Pokédex OS) - GitHub Pages デプロイガイド

スキーマ駆動（Schema-Driven）と簡易DDD（ドメイン駆動設計）、BDD/TDD（テスト駆動開発）で構築されたポケモン図鑑Webアプリケーションです。

---

## 🚀 GitHub Pages (`*.github.io`) へのデプロイ方法

本プロジェクトは **GitHub Pages のサブディレクトリパス（`https://<ユーザー名>.github.io/<リポジトリ名>/`）に完全対応** しています（`vite.config.ts` で相対ベースパス `./` に設定済み）。

デプロイ方法は **「方法A: GitHub Actions による自動デプロイ（推奨）」** と **「方法B: `gh-pages` コマンドによる手動デプロイ」** の2種類が用意されています。

---

### 方法 A: GitHub Actions による自動デプロイ（推奨・設定1回のみ）

`.github/workflows/deploy.yml` が既にリポジトリ内に配置されているため、GitHub 側の設定を1箇所切り替えるだけで、コードをプッシュするたびに自動テスト・ビルド・デプロイが完了します。

1. **GitHub リポジトリを作成してプッシュ**:
   ```bash
   git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
   git branch -M main
   git push -u origin main
   ```

2. **GitHub Pages のデプロイ元（Source）を設定**:
   - GitHubのリポジトリページを開きます。
   - 上部メニューの **[Settings]**（設定）をクリック。
   - 左側サイドバーの **[Pages]** をクリック。
   - **Build and deployment** の **[Source]** ドロップダウンを **「GitHub Actions」** に変更します。

3. **自動デプロイ完了**:
   - `main` (または `master`) ブランチへの push を検知して GitHub Actions が自動で起動します。
   - 約1〜2分で `https://<あなたのユーザー名>.github.io/<リポジトリ名>/` に公開されます。

---

### 方法 B: `npm run deploy` コマンドによる手動デプロイ

ターミナルからワンコマンドで即時デプロイしたい場合の手順です。

1. **GitHub リポジトリに push 済みの状態で以下を実行**:
   ```bash
   npm run deploy
   ```
   ※ このコマンドを実行すると、自動的に `npm run build` が走った後、`dist/` フォルダが `gh-pages` ブランチにプッシュされます。

2. **GitHub Pages のデプロイ元を設定**:
   - GitHubリポジトリの **[Settings]** > **[Pages]** を開く。
   - **[Source]** を **「Deploy from a branch」** に設定。
   - **Branch** を **「gh-pages」** / **「/ (root)」** を選択して **[Save]** をクリック。
   - 数分後に `https://<あなたのユーザー名>.github.io/<リポジトリ名>/` に公開されます。

---

## 🛠️ ローカル開発・テスト

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動 (http://localhost:3000)
npm run dev

# BDD / TDD テスト実行 (Vitest)
npm run test

# 型チェック (TypeScript)
npm run lint

# 本番ビルド検証
npm run build
```
