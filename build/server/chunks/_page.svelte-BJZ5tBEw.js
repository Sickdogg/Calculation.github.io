import { c as create_ssr_component, b as each, e as escape } from './ssr-BJefhJRP.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contents = [
    {
      title: "隱私權政策更新日期：2024年3月14日",
      content: "歡迎您光臨我們的網站，我們十分重視您的隱私權。本隱私權政策旨在明確說明當您使用我們的網站時，我們將如何收集、使用和保護您提供給我們的個人資訊。"
    },
    {
      title: "資訊收集與使用：",
      content: "我們會運用各種技術來收集與您互動相關的資訊。這包括使用 cookies和類似的追蹤技術來收集您訪問我們網站的資訊。我們也會使用分析服務來收集和分析一些一般性的資訊，例如網站訪問量和訪客的來源。這些資訊將幫助我們了解我們的訪客以及他們如何使用我們的服務，從而改進和客製化我們的服務。"
    },
    {
      title: "資訊保護：",
      content: "我們致力於保護您的個人資訊安全。我們採用各種安全技術和程序來保護您提供給我們的資訊，以防止未經授權的訪問、使用或泄露。"
    },
    {
      title: "資訊分享：",
      content: "我們不會出售、交換或租借您的個人資訊給第三方。我們僅在符合法律規定的情況下，以及為了提供我們的服務或保護我們的權益而分享您的資訊。"
    },
    {
      title: "隱私權政策的修改：",
      content: "我們保留隨時更新和修改本隱私權政策的權利。任何修改將在我們的網站上公佈，敬請定期查閱以獲取最新消息。"
    },
    {
      title: "聯絡我們：",
      content: "如果您對我們的隱私權政策有任何疑問或意見，請通過我們網站上提供的聯絡方式與我們聯繫。我們將竭誠為您解答任何疑問。"
    }
  ];
  return `<div class="text-white">${each(contents, (item) => {
    return `<h1 class="mt-5 text-[30px]">${escape(item.title)}</h1> <p>${escape(item.content)}</p>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BJZ5tBEw.js.map
