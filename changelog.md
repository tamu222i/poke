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

