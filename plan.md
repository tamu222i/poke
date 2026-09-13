# ポケモン図鑑 (Pokédex) 実装計画書 (plan.md)

## 1. 概要・目標
スキーマ駆動開発（Schema-Driven Development）と簡易ドメイン駆動設計（DDD）、BDD/TDD（振る舞い・テスト駆動開発）を採用した、堅牢で高品質なポケモン図鑑Webアプリケーションを構築する。

---

## 2. アーキテクチャ構成 (簡易DDD)

```
src/
├── domain/                      # 【ドメイン層】業務ロジック・仕様・値オブジェクト・エンティティ
│   ├── schemas/                 # スキーマ定義 (Zod)
│   │   └── pokemon.schema.ts    # ポケモンデータ、ステータス、タイプ等のバリデーション定義
│   ├── value-objects/           # 値オブジェクト (イミュータブル・不変条件検証)
│   │   ├── pokemon-id.vo.ts
│   │   ├── pokemon-type.vo.ts   # タイプ定義・相性倍率計算 (18タイプ)
│   │   └── base-stats.vo.ts     # 種族値・合計値・レーダーチャート比率
│   ├── entities/                # エンティティ
│   │   └── pokemon.entity.ts    # ポケモン集約 (属性計算、相性計算、フォーマット)
│   └── repositories/            # リポジトリインターフェース
│       └── pokemon.repository.ts
├── application/                 # 【ユースケース層】入出力の調整、アプリケーション協調
│   ├── use-cases/
│   │   ├── get-pokemon-list.usecase.ts
│   │   ├── get-pokemon-detail.usecase.ts
│   │   ├── toggle-favorite.usecase.ts
│   │   └── compare-pokemon.usecase.ts
├── infrastructure/              # 【インフラ層】外部通信・データ保持・リポジトリ具象
│   ├── data/
│   │   └── pokemon-dataset.ts   # 厳選された詳細データ (特性・種族値・進化・鳴き声URL・日英名称)
│   ├── repositories/
│   │   └── in-memory-pokemon.repository.ts
│   └── storage/
│       └── local-storage-favorite.service.ts
└── presentation/                # 【UI/プレゼンテーション層】Reactコンポーネント・UI状態
    ├── components/
    │   ├── PokedexHeader.tsx    # 検索バー、世代フィルター、ソート、お気に入り切替
    │   ├── TypeFilterBar.tsx    # 18タイプ選択フィルター
    │   ├── PokemonCard.tsx      # ポケモンカード (タイプ色、番号、鳴き声再生、お気に入り)
    │   ├── PokemonDetailModal.tsx # 詳細モーダル (種族値、タイプ相性、進化ツリー、鳴き声、色違い)
    │   ├── PokemonCompareModal.tsx # 2匹のステータス比較モーダル
    │   └── PokedexStatsBar.tsx  # ステータスバー表示
    ├── hooks/
    │   └── usePokedex.ts        # UIステート管理とユースケースの接続
    └── styles/
        └── type-colors.ts       # タイプ別デザイントークン
```

---

## 3. TDD / BDD 開発フェーズ (Red -> Green -> Refactor)

### フェーズ 1: ドメイン層の構築とBDDテスト
- **Red**:
  - `pokemon-type.vo.test.ts`: タイプ相性倍率（抜群2x/4x、今ひとつ0.5x/0.25x、無効0x）のBDDシナリオテスト作成
  - `base-stats.vo.test.ts`: 種族値合計・ランク評価のテスト作成
  - `pokemon.entity.test.ts`: ポケモンエンティティ生成とビジネスルールのテスト作成
- **Green**:
  - Zodスキーマ、Value Objects、Entityを実装しテストをパスさせる
- **Refactor**:
  - 型安全性の強化、純粋関数の抽出、計算処理の最適化

### フェーズ 2: ユースケース層・リポジトリ層
- **Red**:
  - `in-memory-pokemon.repository.test.ts`: 検索・複合フィルター（世代・タイプ・キーワード・並び替え）テスト作成
  - `use-cases.test.ts`: リスト取得、お気に入りトグル、ポケモン比較テスト作成
- **Green**:
  - リポジトリ実装、実データセット（第1世代〜各世代の人気ポケモン）の定義、ユースケース実装
- **Refactor**:
  - フィルター処理の仕様パターン化、例外処理・不変条件の整備

### フェーズ 3: プレゼンテーション層 (UI & UX)
- 図鑑の赤とダークスレートを基調としたハイテク・ポータブルデバイスデザイン
- 検索、世代タブ、18タイプバッジフィルター、お気に入り機能
- 詳細モーダル：
  - 公式高解像度アートワーク & ドット絵/色違い（Shiny）切り替え
  - 実音声鳴き声（PokeAPI Cries audio）再生機能
  - タイプ弱点・耐性マトリクス（自動計算）
  - 種族値グラフ＆レーダー
  - 進化系統ツリー（進化レベル・条件）
  - 高さ・重さ（人間対比スケール）
- 2体のポケモン比較モード（ステータス比較）

---

## 4. 品質基準
- 全てのユニット・BDDテストがパスすること (`npm run test`)
- TypeScript型チェックエラーが0件であること (`npm run lint`)
- 本番ビルドが正常に完了すること (`npm run build`)
