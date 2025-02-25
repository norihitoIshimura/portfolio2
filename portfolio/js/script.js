window.addEventListener("load", function () {
  //プラグインを定義
  //ScrollTriggerプラグインを登録します。
  // このプラグインを使うことで、スクロールに応じたアニメーションを簡単に制御できます。
  gsap.registerPlugin(ScrollTrigger);

  //.js-area, .js-wrap, .js-itemをそれぞれ取得します。
  //numには.js-itemの総数を格納します。
  const area = document.querySelector(".js-area");
  const wrap = document.querySelector(".js-wrap"); //横並びのアイテムを包含する要素。
  const items = document.querySelectorAll(".js-item"); //スライドする個々の要素。
  const num = items.length;
  //横幅を指定
  //全体を囲む領域。スクロールトリガーの対象。
  // .js-wrapの横幅をアイテム数（num）に応じて全体の100%を掛けた値に設定します。
  //   例: アイテム数が3個なら width: 300% になります。
  gsap.set(wrap, { width: num * 100 + "%" });
  gsap.set(items, { width: 100 / num + "%" });
  //横幅を指定
  // .js-itemの横幅を 100 / num に設定して、各アイテムが均等に配置されるようにします。
  // 例: アイテム数が3個なら width: 33.33% になります。
  gsap.to(items, {
    //x方向に移動させる
    //     xPercentは、要素を水平方向（X軸）に移動させるプロパティ。
    // アイテム数に応じてスライド量を計算します。
    // 例: アイテム数が3個の場合、-200%まで移動（2個分進む）。
    xPercent: -100 * (num - 1),
    // アニメーションに加速や減速を適用しない（一定速度）。
    ease: "none",
    scrollTrigger: {
      // アニメーションをトリガーする要素として.js-areaを指定。
      trigger: area, //トリガー
      // トリガーが開始される位置。
      start: "top top", //開始位置
      // トリガーの終了位置。
      // スクロール量を「1000px」に設定（数値を増減するとアニメーションの距離が変わる）。
      end: "+=20000", //終了位置 スクロール量の幅調整
      // トリガーエリアがスクロール中に固定され、背景が動くような演出。
      pin: true, //ピン留め
      // スクロール量に応じてアニメーションが進む（スムーズな連動）
      scrub: true, //スクロール量に応じて動かす
    },
  });
});
// 4. 動作の流れ
//     ロード時に、wrapとitemsの幅を設定。
//     ページをスクロールすると、xPercentによって.js-itemが横方向にスライド。
//     アニメーションは、スクロール量に基づいてリアルタイムで動く
