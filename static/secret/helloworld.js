// YouTube IFrame API スクリプトタグを生成
const scriptTag = document.createElement('script');
scriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(scriptTag); // body終了前にタグを出力

// グローバルでプレイヤーを定義
let player;
let startButton; // 追加: スタートボタン参照

// iframe のセットアップ
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '1SCrd3Ho0Hw', // 動画ID
        height: '256',
        width: '256',
        playerVars: {
            loop: 1,
        },
        events: {
            onStateChange: onPlayerStateChange, // 再生状態の変化を検知
            onReady: onReady,
        }
    });
}

// startButton のセットアップ関数
function setupStartButton() {
    startButton = document.getElementById('startButton');
    if (!startButton) return;
    // クリックで再生し、ボタンを非表示にする
    startButton.addEventListener('click', function() {
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }
        startButton.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', setupStartButton);

// 再生位置を監視する関数
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        // 再生中はボタンを非表示
        if (startButton) startButton.style.display = 'none';
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.CUED) {
        // 停止や終了、キュー状態ではボタンを表示
        if (startButton) startButton.style.display = '';
    } else {
        // その他の状態ではボタンを表示しておく
        if (startButton) startButton.style.display = '';
    }
}

function onReady(event) {
    // ボタンがまだセットされていなければセットアップ
    setupStartButton();
    // 初期表示をプレーヤーの状態に合わせる
    if (startButton && player && typeof player.getPlayerState === 'function') {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) startButton.style.display = 'none';
        else startButton.style.display = '';
    }
}
