//tealium universal tag - utag.109 ut4.0.201802141651, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var _uxa=_uxa||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.scriptrequested=false;u.map={};u.extend=[function(a,b){if(utag.cond[43]==1)b["_ctotal"]=tealiumiq_currency.convert(b["_ctotal"],"USD","EUR");if(utag.cond[241]==1)b["_ctotal"]=tealiumiq_currency.convert(b["_ctotal"],"GBP","EUR");if(utag.cond[55]==1)b["_ctotal"]=tealiumiq_currency.convert(b["_ctotal"],"JPY","EUR");if(utag.cond[43]==1)b["product_price"]=tealiumiq_currency.convert(b["product_price"],"USD","EUR");if(utag.cond[241]==1)b["product_price"]=tealiumiq_currency.convert(b["product_price"],"GBP","EUR");if(utag.cond[55]==1)b["product_price"]=tealiumiq_currency.convert(b["product_price"],"JPY","EUR");if(utag.cond[43]==1)b["_ctax"]=tealiumiq_currency.convert(b["_ctax"],"USD","EUR");if(utag.cond[43]==1)b["_cship"]=tealiumiq_currency.convert(b["_cship"],"USD","EUR");if(utag.cond[55]==1)b["_ctax"]=tealiumiq_currency.convert(b["_ctax"],"JPY","EUR");if(utag.cond[55]==1)b["_cship"]=tealiumiq_currency.convert(b["_cship"],"JPY","EUR");if(utag.cond[241]==1)b["_ctax"]=tealiumiq_currency.convert(b["_ctax"],"GBP","EUR");if(utag.cond[241]==1)b["_cship"]=tealiumiq_currency.convert(b["_cship"],"GBP","EUR");}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"base_url":"//tp.louisvuitton.com/cs/uxa/XXXX.js","id_project":"b11a035712540","custom":{},"path":"","product_id":[],"product_name":[],"product_sku":[],"product_category":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("custom.")===0){u.data.custom[[e[f].substr(7)]]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.base_url=u.data.base_url.replace(/XXXX/,u.data.id_project);u.data.path=u.data.path||location.pathname;if(typeof utag_data!="undefined"){window._uxa=window._uxa||[];window._uxa.push(['setCustomVariable',1,'online_sellable',utag_data["online_sellable"]]);window._uxa.push(['setCustomVariable',2,'logged_state',utag_data["logged_state"]]);window._uxa.push(['setCustomVariable',3,'product_category',utag_data["product_category"]]);window._uxa.push(['setCustomVariable',4,'display_grid',utag_data["display_grid"]]);window._uxa.push(['setCustomVariable',5,'page_type',utag_data["meta.page_type"]]);}
if(u.data.order_id){_uxa.push(["ecommerce:addTransaction",{"id":u.data.order_id,"revenue":u.data.order_total,"shipping":u.data.order_shipping,"tax":u.data.order_tax}]);for(f=0;f<u.data.product_id.length;f++){_uxa.push(["ecommerce:addItem",{"id":u.data.order_id,"name":u.data.product_name[f],"sku":u.data.product_sku[f],"category":u.data.product_category[f],"price":u.data.product_unit_price[f],"quantity":u.data.product_quantity[f]}]);}
_uxa.push(["ecommerce:send"]);}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":'utag_109'});}else{if(a==="view"){_uxa.push(["trackPageview",u.data.path]);}}
}};utag.o[loader].loader.LOAD(id);}("109","louisvuitton.convergence"));}catch(error){utag.DB(error);}
