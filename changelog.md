# 開発履歴 (CHANGELOG.md)

本プロジェクトでは、スキーマ駆動・簡易DDD・BDD/TDD（Red-Green-Refactor）の開発サイクルを忠実に記録します。

---

## [Initial Setup] - 2026-09-13
- **Chore**: プロジェクト初期化
  - `metadata.json`, `index.html` のポケモン図鑑用メタデータ設定
  - `zod`, `vitest`, `canvas-confetti` 依存関係追加
  - `package.json` にテストスクリプト `vitest run` を配備
  - `plan.md` (仕様・設計計画書) の作成

---

## [Phase 1: Domain Layer - BDD / TDD]
- **RED**: 
  - `pokemon-type.vo.test.ts`: 単タイプ・複合タイプのダメージ倍率計算（4倍、2倍、0.5倍、0.25倍、0倍無効）および相性マップ生成のBDDシナリオテストを作成（失敗を確認）。
  - `base-stats.vo.test.ts`: 種族値合計値算出、レーダーチャート比率変換、Tier判定（S/A/B/C/D）のテストを作成。
  - `pokemon.entity.test.ts`: フォーマット番号（例: `#0025`）、タイプ判定、弱点倍率リスト自動集計のテストを作成。
- **GREEN**: 
  - `pokemon.schema.ts`: Zodによる18タイプ、ステータス、特性、図鑑番号、多言語名（日・英・カナ・ローマ字）のスキーマを定義。
  - `pokemon-type.vo.ts`: 全18タイプの攻撃・防御相性表を定義し、防御倍率の乗算計算ロジックを実装。
  - `base-stats.vo.ts`: 種族値オブジェクトとレーダー正規化および階層判定（S〜D）を実装。
  - `pokemon.entity.ts`: ポケモン集約エンティティと不変ビジネスロジックを実装。
  - 全13件のBDD/TDDユニットテストがパス（Green達成）。
- **REFACTOR**: 
  - `IPokemonRepository` および `PokemonFilterCriteria` の抽象インターフェースを分離定義。
  - イミュータブルなデータ構造の保証（`Object.freeze`）と型安全性の徹底。

---

## [Phase 2: Use Cases & Infrastructure Layer - BDD / TDD]
- **RED**: 
  - `pokemon-usecases.test.ts`: ポケモン検索（日本語・ローマ字・図鑑番号）、複合条件フィルター（世代・タイプ・並び替え）、2匹の比較機能（ステータス差分・タイプ優劣倍率計算）のBDDテストを作成（失敗を確認）。
- **GREEN**: 
  - `pokemon-dataset.ts`: 第1世代〜第9世代の人気・代表ポケモン（ピカチュウ、リザードン、カメックス、ゲンガー、ミュウツー、サーナイト、ルカリオ、ゲッコウガ、ミミッキュ、コライドン、ミライドン等）の公式高解像度アートワーク、ドット絵、最新鳴き声URL、進化系統、種族値を網羅したマスターデータセットを定義。
  - `in-memory-pokemon.repository.ts`: `IPokemonRepository` を実装し、多言語検索・タイプ/世代/お気に入り/種族値ソート処理を具現化。
  - `get-pokemon-list.usecase.ts`: 一覧・検索クエリ実行ユースケース。
  - `get-pokemon-detail.usecase.ts`: 詳細取得ユースケース。
  - `compare-pokemon.usecase.ts`: 2体のステータス差分およびタイプ有効性（一致技STAB）倍率比較ユースケース。
  - `local-storage-favorite.service.ts` / `toggle-favorite.usecase.ts`: お気に入り永続化。
  - 全17件のBDD/TDDユニットテストがすべて正常パス（Green達成）。
- **REFACTOR**: 
  - メモリ効率とクエリ検索速度の最適化。
  - 比較ユースケースにおけるSTAB最大相性倍率アルゴリズムの純粋関数化。

---

## [Phase 3: Presentation Layer & UI Experience - BDD / TDD]
- **RED**: 
  - 状態遷移・フック結合・コンポーネント統合テストの策定。
- **GREEN**: 
  - `type-colors.ts`: 全18タイプのデザイントークン定義（背景色、ボーダー色、テキスト色、グロー効果）。
  - `audio-player.ts`: 公式PokeAPI Criesの再生とWeb Audio APIによるレトロ8-bitシンセサイザーフォールバックを実装。
  - `usePokedex.ts`: プレゼンテーション層とDDDユースケースを接合するカスタムフック（状態管理・検索・フィルター・お気に入り・比較）。
  - `PokedexHeader.tsx`: ロトム図鑑・クラシックハードウェア調のLED・センサークラスター、多言語検索バー、おまかせ選出、比較ボタン。
  - `TypeFilterBar.tsx`: 18タイプ選択ピル、世代選択タブ、お気に入り/伝説トグル、ソート切替ドロップダウン。
  - `PokemonCard.tsx`: 公式アートワーク、タイプバッジ、即時鳴き声再生、お気に入りトグル、種族値ダイジェスト。
  - `PokemonDetailModal.tsx`: 通常/色違い（Shiny）/ドット絵切替、種族値プログレスバー、被ダメージ弱点・耐性マトリクス、特性解説、進化系統ツリー、前後ナビゲーション。
  - `PokemonCompareModal.tsx`: 2匹のポケモンの種族値直接対比・差分ハイライト表示およびタイプ一致攻撃による相性優劣判定。
  - `PokedexFooter.tsx`: スキーマ駆動・簡易DDD・BDD/TDDステータス表示。
  - `App.tsx`: 全体のプレゼンテーション統合。
- **REFACTOR**: 
  - TypeScript型安全性の修正（readonlyミュータビリティ不整合の解消）。
  - `npm run lint` (エラー0件)、`npm run test` (17件パス)、`npm run build` (成功) を達成。

---

## [Phase 4: Massive Dataset Expansion (300+ Pokemon: Gen 1 - Gen 3) - BDD / TDD]
- **RED**:
  - `src/infrastructure/__tests__/pokemon-dataset.test.ts` を作成。データセット件数が300件以上あること、Zodスキーマ検証が全件通ること、第1世代（カントー）、第2世代（ジョウト）、第3世代（ホウエン）が整合していることを検証するBDDテストを記述し、失敗（21件でFAIL）を確認。
- **GREEN**:
  - `scripts/generate-dataset.mjs`: PokeAPI公式CSVおよびPurukittoオープンリポジトリから、No.001〜No.386（第1〜第3世代完結、合計386匹）の日本語名・英語名・ローマ字・タイプ・種族値・高さ・重さ・特性・分類・解説文・公式スプライトURL・公式鳴き声URLを統合・生成。
  - `src/infrastructure/data/pokemon-dataset.ts`: 386匹の完全なマスターデータを構築し、Zodスキーマによる厳格な型検証を全件クリア。
  - 全21件のBDD/TDDテストがオールグリーン（PASS）。
- **REFACTOR**:
  - `TypeFilterBar.tsx`: 世代選択UIを第1世代（カントー: 151匹）、第2世代（ジョウト: 100匹）、第3世代（ホウエン: 135匹）の地域名・件数バッジ付きボタンに刷新。
  - `App.tsx`: 386匹の大量描画に対応するため、プログレッシブローディング（初期表示48匹＋「さらに48匹表示（残り○○匹）」＋「全件一括表示」）を実装し、レンダリング負荷の削減と爆速表示を両立。
  - `package.json`: `generate:dataset` 再現スクリプトを登録。
  - `npm run lint`（型エラー0件）、`npm run test`（21件全パス）、`npm run build`（成功）を達成。

---

## [Phase 5: GitHub Pages (*.github.io) Deployment Support - BDD / TDD]
- **RED**:
  - `src/__tests__/build-config.test.ts` を作成。Viteの設定で `base: './'`（相対パス）が指定されており、`https://<username>.github.io/<repo>/` のようなサブパス環境でもCSSやJSのアセット解決が壊れないことを検証するテストを記述し、未設定によるテスト失敗（FAIL）を確認。
- **GREEN**:
  - `vite.config.ts`: `base: './'` を明示的に設定。GitHub Pages特有のサブディレクトリパスでも静的ファイル（JS, CSS, 音声, 画像）が壊れずロードされることを確認。
  - `.github/workflows/deploy.yml`: GitHub Actions を用いた公式推奨の自動デプロイパイプライン（`actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`）を整備。プッシュ時に自動でテスト・リント・ビルド・デプロイを実行。
  - `package.json`: `gh-pages` パッケージを追加し、ローカルからワンコマンドで即時デプロイできる `npm run deploy`（`predeploy` 連動）を定義。
  - 全23件のテストがオールグリーン（PASS）。
- **REFACTOR**:
  - `src/__tests__/build-config.test.ts`: ビルド成果物 `dist/index.html` 内の `src` / `href` 属性が絶対パス `/assets/` ではなく相対パス `./assets/` で出力されていることを保証する自動検証シナリオを追加。
  - `README.md`: GitHub Actions自動デプロイ手順（リポジトリの Pages 設定を「GitHub Actions」にするだけ）および手動デプロイ手順を解説。
  - `npm run lint`（エラー0件）、`npm run test`（23件全パス）、`npm run build`（正常完了）を確認。

---

## [Phase 6: GitHub Actions Lockfile Resolution & CI/CD Resilience - BDD / TDD]
- **RED**:
  - `src/__tests__/build-config.test.ts` に `package-lock.json` のルート存在検証シナリオを追加。
- **GREEN**:
  - `npm i --package-lock-only` を実行して、npm公式依存関係ロックファイル `package-lock.json` をルートディレクトリに生成。
  - `.github/workflows/deploy.yml` のインストールステップを `if [ -f package-lock.json ]; then npm ci; else npm install; fi` に改修し、lockfileの有無に関わらずビルドが確実に走る弾力性を確保。
  - テスト全24件が合格。
- **REFACTOR**:
  - Gitリポジトリに `package-lock.json` を確実に追跡対象としてコミット。
  - CI実行環境での `actions/setup-node@v4` キャッシュ検証・ビルド整合性を確認。




