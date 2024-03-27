import { c as create_ssr_component, b as each, e as escape } from './ssr-BJefhJRP.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contents = [
    {
      title: "使用條款",
      content: "歡迎使用本計算機服務。本服務的提供者保留隨時修改或更新本使用條款的權利，請定期查看以獲取最新版本。您使用本服務即表示您同意遵守並受本使用條款約束。"
    },
    {
      title: "服務內容",
      content: "本服務允許您使用計算機工具進行數學運算、統計分析等操作。我們將盡力確保服務的準確性和可靠性，但不對計算結果的準確性負責。"
    },
    {
      title: "用戶責任",
      content: "您使用本服務時，需遵守所有適用的法律法規。您應保護您的帳戶信息和密碼安全，並對您在本服務下的所有活動負責。"
    },
    {
      title: "服務變更與終止",
      content: "本服務提供者保留隨時修改、暫停或終止本服務（或其任何部分）的權利，恕不另行通知。我們將不對任何修改、暫停或終止本服務所帶來的任何損失負責。"
    },
    {
      title: "免責聲明",
      content: "本服務僅按“現狀”和“現有”的基礎提供，不提供任何形式的明示或暗示保證，包括但不限於適銷性、特定目的的適用性等。"
    },
    {
      title: "隱私保護",
      content: "我們尊重並保護所有用戶的個人隱私。我們將僅收集必要的個人信息，並遵守相關的隱私政策和法律法規。"
    },
    {
      title: "準據法與管轄權",
      content: "本使用條款將受中華人民共和國法律管轄。如因本使用條款所引起的任何爭議，均應提交至中華人民共和國有管轄權的法院解決。"
    },
    {
      title: "聯絡我們",
      content: "如您對本服務條款有任何疑問或意見，請通過本服務提供者提供的聯絡方式與我們聯繫。"
    }
  ];
  return `<div class="text-white">${each(contents, (item) => {
    return `<h1 class="mt-5 text-[30px]">${escape(item.title)}</h1> <p>${escape(item.content)}</p>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BPK62x23.js.map
