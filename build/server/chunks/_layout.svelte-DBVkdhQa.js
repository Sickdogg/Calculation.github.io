import { c as create_ssr_component, v as validate_component } from './ssr-BJefhJRP.js';

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="border border-white text-white flex justify-between w-[100dvw]"><div data-svelte-h="svelte-1vuafkp">logo</div>   <div class="cursor-pointer" data-svelte-h="svelte-ri5lbn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></div></div> ${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><header>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</header> <main>${slots.default ? slots.default({}) : ``}</main> <footer></footer></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DBVkdhQa.js.map
