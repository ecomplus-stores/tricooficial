(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{247:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return r}));var o=c(25),n=c(20),a=c(33);const i=o.$ecomConfig.get("currency")||"BRL",r=e=>{const t={name:Object(n.a)(e).replace(/\s\/\s.*/,""),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t}},262:function(e,t,c){"use strict";c(4);var o=c(8),n=c(247);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let c,a,i;const r=()=>{const e=[];return o.a.data&&Array.isArray(o.a.data.items)&&o.a.data.items.forEach((t=>{e.push(Object(n.b)(t))})),e},s=t=>{e.push({ecommerce:null}),e.push({event:"eec.checkout_option",ecommerce:{currencyCode:n.a,checkout_option:{actionField:t}}})},u=(t,o)=>{const i={step:t,option:o};1===t&&c||2===t&&a||(e.push({ecommerce:null}),e.push({event:"eec.checkout",ecommerce:{currencyCode:n.a,checkout:{actionField:i,products:r()}}}),e.push({event:"checkout"}),1===t?c=!0:a=!0)},d=(t,c)=>{if(!i){if(window.localStorage.getItem("gtm.orderIdSent")!==t){let a;if(c)try{a=JSON.parse(c)}catch(e){}const{amount:i}=a||window.storefrontApp,u={id:t,revenue:(i&&i.total||o.a.data&&o.a.data.subtotal||0).toFixed(2)};i&&(void 0!==i.freight&&(u.shipping=i.freight.toFixed(2)),void 0!==i.tax&&(u.tax=i.tax.toFixed(2))),a&&(["shipping_method_label","payment_method_label"].forEach(((e,t)=>{a[e]&&s({step:3+t,option:a[e]})})),a.extra_discount&&a.extra_discount.discount_coupon&&(u.coupon=a.extra_discount.discount_coupon)),e.push({ecommerce:null}),e.push({event:"eec.purchase",ecommerce:{currencyCode:n.a,purchase:{actionField:u,products:r()}}}),window.localStorage.setItem("gtm.orderIdSent",t)}i=!0}};let p;const m=e=>{let{name:t,params:c}=e;switch(t){case"cart":u(1,"Review Cart");break;case"checkout":c.step&&a||u(2,"Login / Signup"),1===Number(c.step)?u(3,"Shipping Method"):2===Number(c.step)&&u(4,"Payment Method");break;case"confirmation":clearTimeout(p),c.json?d(c.id,decodeURIComponent(c.json)):p=setTimeout((()=>{d(c.id)}),1500)}};t.currentRoute&&m(t.currentRoute),t.afterEach(m)}}},263:function(e,t,c){"use strict";c(4);var o=c(8),n=c(247);t.a=e=>{const t={};setTimeout((()=>{o.a.data.items.forEach((e=>{t[e.sku]=Object(n.b)(e)}))}),10);const c=c=>{const o=Object(n.b)(c);e.push({ecommerce:null}),e.push({event:"eec.add",ecommerce:{currencyCode:n.a,add:{products:[o]}}}),e.push({event:"addToCart"}),t[c.sku]=o},a=c=>{const o=t[c.sku];e.push({ecommerce:null}),e.push({event:"eec.remove",ecommerce:{currencyCode:n.a,remove:{products:[o?Object.assign({},o):Object(n.b)(c)]}}}),e.push({event:"removeFromCart"}),delete t[c.sku]};o.a.on("addItem",(e=>{let{item:t}=e;return c(t)})),o.a.on("increaseItemQnt",(e=>{let{item:o}=e;const n=t[o.sku];if(n){const e=o.quantity-n.quantity;e>0?c({...o,quantity:e}):a({...o,quantity:-e})}else c(o)})),o.a.on("removeItem",(e=>{let{item:t}=e;return a(t)})),o.a.on("clear",(()=>{for(const e in t)t[e]&&a(t[e])}))}},392:function(e,t,c){"use strict";c.r(t);var o=c(262);const{location:n,$:a}=window;var i=(e,t,c)=>{const i=()=>setTimeout((()=>{e("event","page_view",{page_title:document.title||"Checkout",page_path:`/${n.hash.split("/")[1]}`,send_to:t})}),300);let r=!1;Object(o.a)({push:t=>{let o,s,{event:u,ecommerce:d}=t;if(u)switch(u){case"eec.checkout":case"eec.checkout_option":o=d&&d.checkout,o&&(r||(e("event","begin_checkout",{items:o.products}),r=!0),s=o.actionField&&o.actionField.step),e("event","set_checkout_option",{checkout_step:s||(n.hash.startsWith("#/cart")?1:2)});break;case"eec.purchase":i(),o=d&&d.purchase,o&&o.actionField&&(e("event","purchase",{transaction_id:o.actionField.id,affiliation:a('meta[name="author"]').attr("content")||"Shop",value:Number(o.actionField.revenue),currency:d.currencyCode,tax:o.actionField.tax?Number(o.actionField.tax):0,shipping:o.actionField.shipping?Number(o.actionField.shipping):0,items:o.products}),c&&e("event","conversion",{send_to:c,value:Number(o.actionField.revenue),currency:d.currencyCode,transaction_id:o.actionField.id}));break;default:i()}}})},r=c(263),s=e=>{Object(r.a)({push:t=>{let{event:c,ecommerce:o}=t;if(o&&("eec.add"===c||"eec.remove"===c)){const t=o[c.slice(4)];t&&t.products&&e("event","eec.add"===c?"add_to_cart":"remove_from_cart",{items:t.products})}}})};t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{gaTrackingId:t,googleAdsId:c}=e,{gtag:o}=window;"function"==typeof o&&(i(o,t,c),s(o,t))}}}]);