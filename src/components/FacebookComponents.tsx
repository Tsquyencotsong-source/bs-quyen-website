"use client";

import { useEffect } from "react";

// ─── CÀI ĐẶT FACEBOOK ─────────────────────────────────────────
const FB_APP_ID = "1295239782726990";
const FB_PAGE_URL = "https://www.facebook.com/share/1UdXLcnnLR/";

// Khai báo để TypeScript không báo lỗi
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

// ─── HOOK TẢI FACEBOOK SDK ────────────────────────────────────
export function useFacebookSDK() {
  useEffect(() => {
    // Tránh tải trùng
    if (document.getElementById("facebook-jssdk")) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FB_APP_ID,
        xfbml: true,
        version: "v19.0",
      });
    };

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/vi_VN/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
}

// ─── 1. NÚT THEO DÕI FACEBOOK ────────────────────────────────
export function FacebookFollowButton() {
  useFacebookSDK();
  return (
    <div id="fb-root">
      <div
        className="fb-like"
        data-href={FB_PAGE_URL}
        data-width=""
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-share="true"
      />
    </div>
  );
}

// ─── 2. FEED BÀI ĐĂNG FACEBOOK ───────────────────────────────
export function FacebookPageFeed() {
  useFacebookSDK();
  return (
    <div id="fb-root">
      <div
        className="fb-page"
        data-href={FB_PAGE_URL}
        data-tabs="timeline"
        data-width="400"
        data-height="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote cite={FB_PAGE_URL} className="fb-xfbml-parse-ignore">
          <a href={FB_PAGE_URL}>Facebook</a>
        </blockquote>
      </div>
    </div>
  );
}

// ─── 3. NÚT CHIA SẺ BÀI VIẾT ─────────────────────────────────
export function FacebookShareButton({ url }: { url: string }) {
  useFacebookSDK();
  return (
    <div id="fb-root">
      <div
        className="fb-share-button"
        data-href={url}
        data-layout="button"
        data-size="large"
      >
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          className="fb-xfbml-parse-ignore"
          rel="noopener noreferrer"
        >
          Chia sẻ
        </a>
      </div>
    </div>
  );
}

// ─── 4. CHAT MESSENGER NỔI ────────────────────────────────────
export function MessengerChat() {
  useFacebookSDK();
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        data-attribution="setup_tool"
        data-page_id="61576562018406"
        data-theme_color="#003580"
        data-logged_in_greeting="Xin chào! Tôi có thể giúp gì cho bạn?"
        data-logged_out_greeting="Xin chào! Để lại tin nhắn, chúng tôi sẽ phản hồi sớm nhất."
      />
    </>
  );
}
