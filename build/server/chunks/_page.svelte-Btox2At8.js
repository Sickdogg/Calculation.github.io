import { c as create_ssr_component, v as validate_component, a as subscribe, b as each, e as escape } from './ssr-BJefhJRP.js';
import { w as writable } from './index-DktlxI0L.js';

const calculator = writable([
  {
    preValue: "",
    currentValue: "",
    operand: "",
    isClear: false
  },
  {
    preValue: "",
    currentValue: "",
    operand: "",
    isClear: false
  },
  {
    preValue: "",
    currentValue: "",
    operand: "",
    isClear: false
  }
]);
const Calculate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $calculator, $$unsubscribe_calculator;
  $$unsubscribe_calculator = subscribe(calculator, (value) => $calculator = value);
  let state = 0;
  $$unsubscribe_calculator();
  return `<div class="calculator min-[650px]:w-[30dvw] min-[650px]:min-w-[650px] max-[650px]:w-[100dvw] max-[650px]:min-w-[300px] mx-auto text-white bg-black"> <div class="h-[30dvh]">  ${each(Array(3), (item, index) => {
    return `<div class="${[
      "display border border-white text-right",
      (state != index ? "h-[20%]" : "") + " " + (state == index ? "h-[60%]" : "") + " " + (state == index ? "text-[2rem]" : "")
    ].join(" ").trim()}">${escape($calculator[index].currentValue || $calculator[index].preValue)} </div>`;
  })}</div>   <div class="mt-1 grid grid-cols-4 gap-4 max-[650px]:gap-3 max-[450px]:gap-2 max-[350px]:gap-1 h-[60dvh]"><button class="text-black bg-gray-400 rounded-[999px]" data-svelte-h="svelte-qyn6ek">AC</button> <button class="text-black bg-gray-400 rounded-[999px]" data-svelte-h="svelte-1azb0yv">%</button> <button class="text-white bg-yellow-500 rounded-[999px] focus:bg-white focus:text-black" data-svelte-h="svelte-9cb1rt">/</button> <button class="text-white bg-yellow-500 rounded-[999px]" data-svelte-h="svelte-1csveok"><div class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"></path></svg></div></button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-tybwoc">7</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-1gd1xa2">8</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-1b8pssg">9</button> <button class="text-white bg-yellow-500 rounded-[999px] focus:bg-white focus:text-black" data-svelte-h="svelte-ymjt5x">X</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-1c1hlgq">4</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-17dp8xs">5</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-1tsalte">6</button> <button class="text-white bg-yellow-500 rounded-[999px] focus:bg-white focus:text-black" data-svelte-h="svelte-1rkh7zp">-</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-jggcu8">1</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-v9m64i">2</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-15twxh0">3</button> <button class="text-white bg-yellow-500 rounded-[999px] focus:bg-white focus:text-black" data-svelte-h="svelte-1iy4c01">+</button> <button class="text-black bg-gray-400 rounded-[999px]" data-svelte-h="svelte-1qmhio1">±</button> <button class="text-white bg-gray-700 rounded-full" data-svelte-h="svelte-10go3lc">0</button> <button class="text-white bg-gray-700 rounded-[999px]" data-svelte-h="svelte-w08sg2">.</button> <button class="${[
    "text-white bg-yellow-500 rounded-[999px] focus:bg-white focus:text-black",
    $calculator[state].operand == "=" ? "bg-white" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1tftimv">=</button></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Calculate, "Calculate").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Btox2At8.js.map
