(self.webpackChunkklimacamp_ulm_neu_ulm=self.webpackChunkklimacamp_ulm_neu_ulm||[]).push([[136],{4713:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(7294),l=t(9756);function i(e,n){if(null==e)return{};var t,r,i=(0,l.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=t(2961);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,l=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){l=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(l)throw i}}return t}}(e,n)||(0,a.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=(0,r.createContext)(null),o=s.Provider;function c(){var e=(0,r.useContext)(s);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var m=t(4118);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=t(6156),h=t(3935);function p(e,n){return null==n?function(n,t){return(0,r.useRef)(e(n,t))}:function(t,l){var i=(0,r.useRef)(e(t,l)),a=(0,r.useRef)(t),u=i.current.instance;return(0,r.useEffect)((function(){a.current!==t&&(n(u,t,a.current),a.current=t)}),[u,t,l]),i}}function g(e,n){var t=(0,r.useRef)(n);(0,r.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function b(e,n){var t=(0,r.useRef)();(0,r.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n){var t,r=null!==(t=e.pane)&&void 0!==t?t:n.pane;return r?E(E({},e),{},{pane:r}):e}function y(e){return function(n){var t=c(),l=e(v(n,t),t);return g(t.map,n.attribution),b(l.current,n.eventHandlers),function(e,n){(0,r.useEffect)((function(){var t;return(null!==(t=n.layerContainer)&&void 0!==t?t:n.map).addLayer(e.instance),function(){var t;null==(t=n.layersControl)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}(l.current,t),l}}function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){function n(n,t){var l=e(n).current,i=l.instance,a=l.context;return(0,r.useImperativeHandle)(t,(function(){return i})),null==n.children?null:r.createElement(o,{value:a},n.children)}return(0,r.forwardRef)(n)}(y(p((function(e,n){var t=e.position,r=i(e,["position"]),l=new m.Marker(t,r);return{instance:l,context:U(U({},n),{},{overlayContainer:l})}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})))),z=function(e,n){return function(e){function n(n,t){var l=u((0,r.useState)(!1),2),i=l[0],a=l[1],s=e(n,a).current.instance;(0,r.useImperativeHandle)(t,(function(){return s})),(0,r.useEffect)((function(){i&&s.update()}),[s,i,n.children]);var o=s._contentNode;return o?(0,h.createPortal)(n.children,o):null}return(0,r.forwardRef)(n)}(function(e,n){return function(t,r){var l=c(),i=e(v(t,l),l);return g(l.map,t.attribution),b(i.current,t.eventHandlers),n(i.current,l,t,r),i}}(p(e),n))}((function(e,n){return{instance:new m.Popup(e,n.overlayContainer),context:n}}),(function(e,n,t,l){var i=t.onClose,a=t.onOpen,u=t.position;(0,r.useEffect)((function(){var t=e.instance;function r(e){e.popup===t&&(t.update(),l(!0),null==a||a())}function s(e){e.popup===t&&(l(!1),null==i||i())}return n.map.on({popupopen:r,popupclose:s}),null==n.overlayContainer?(null!=u&&t.setLatLng(u),t.openOn(n.map)):n.overlayContainer.bindPopup(t),function(){n.map.off({popupopen:r,popupclose:s}),n.map.removeLayer(t)}}),[e,n,l,i,a,u])}));var x=function(e,n){return function(e){function n(n,t){var l=e(n).current.instance;return(0,r.useImperativeHandle)(t,(function(){return l})),null}return(0,r.forwardRef)(n)}(y(p(e,n)))}((function(e,n){var t=e.url,r=i(e,["url"]);return{instance:new m.TileLayer(t,v(r,n)),context:n}}),(function(e,n,t){var r=n.opacity,l=n.zIndex;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=l&&l!==t.zIndex&&e.setZIndex(l)})),P=t(9925),S=t(2860),j=t(9388),C=t.p+"static/Klimastadtplan_Neu_Ulm-a3b3d87b6147b08bbb4ad9668e7a9ea5.pdf",A=t.p+"static/Klimastadtplan_Ulm-19c4319354ed4a54541d0882169ffdfb.pdf",D=t.p+"static/Unterschriftenliste_Neu-Ulm-a2390e7d90fee8a38a60bec6d23d245f.pdf",N=t.p+"static/Unterschriftenliste_Ulm-38286a4b926e048ab556f0a70704f6a6.pdf",B=P.ZP.table.withConfig({displayName:"germanzero__Table",componentId:"sc-78dmjp-0"})(["width:100%;"]),I=P.ZP.a.attrs({target:"_blank",rel:"noreferrer"}).withConfig({displayName:"germanzero__DownloadLink",componentId:"sc-78dmjp-1"})([""]),K=(0,P.ZP)(S.Z).withConfig({displayName:"germanzero__IconButton",componentId:"sc-78dmjp-2"})(["margin:0 1rem 1rem 1rem;"]),M=[undefined,"unterschreiben","abgeben"],_=[["Gutes von hier","Münsterplatz 16","89073 Ulm",1,48.39919278697667,9.992284339842683,"x"],["Biolandhof Fink","Memminger Str. 179","89231 Neu-Ulm",1,48.367416804607764,10.009428227967497],["Ora d'Oro","Unter der Metzig 22","89073 Ulm",1,48.39638944182343,9.993053219106612,"x"],["Verschwörhaus","Weinhof 9","89073 Ulm",1,48.39667380182477,9.99045219366275,"x"],["Fischerins Kleid","Fischergasse 6","89073 Ulm",1,48.39633397961533,9.988691835557688,"x"],["Rabe","Rabengasse 8","89073 Ulm",1,48.39949536033915,9.992525449002452,"x"],["Infoladen ADFC","Radgasse 8","89073 Ulm",1,48.40008430846102,9.997570263997261,"x"],["Ulmer Weltladen","Pfauengasse 28","89073 Ulm",1,48.400198524621985,9.99094435583464,"x"],["Erdapfel","Schlößlesgasse 10","89077 Ulm",1,48.3964931302726,9.955890882431493],["KornMühle","Herrenkellergasse 8","89073 Ulm",1,48.400371219404875,9.992304809844416,"x"],["RADWEG","Industriestraße 12","89231 Neu-Ulm",1,48.39572353526351,10.011716556886448,"x"],["Zweiradschmid´e","Turmstraße 40","89231 Neu-Ulm",1,48.39136109647055,10.00404963623593,"x"],["Denns","Bahnhofstraße 1","89231 Neu-Ulm",1,48.393237492656624,10.00396597337687,"x"],["Animo","Syrlinstraße 17","89073 Ulm",1,48.404112937027264,9.990636621976874,"x"],["Jastram","Schuhhausgasse 8","89073 Ulm",1,48.39838890874331,9.995940581426735,"x"],["Vabene","Turmstraße 38","89231 Neu-Ulm",1,48.392549652855514,10.010026730286018],["Gärtnerei Gairing","Illerstraße 196","89079 Ulm",1,48.37613076303419,9.956453861114838],["Fruchtrausch","Hafengasse 1","89073 Ulm",1,48.399404740720364,9.994472375454988,"x"],["Aegis Buchhandlung","Breite Gasse 2","89073 Ulm",1,48.3993281383018,9.996127364741605,"x"],["Duft und Wärme","Frauenstraße 19","89073 Ulm",1,48.399260759055814,9.99702416178214,"x"],["Nick Ott","Kelternweg 173","89075 Ulm",2,48.412978669191524,9.953495694174562,"x"],["Merit Willemer","Weickmannstr. 14","89077 Ulm",2,48.3885782078872,9.975985937943507,"x"],["Sérgio Alves, Lisa Heinle","Pionierstraße 3","89073 Ulm",2,48.40248523345232,10.00618723914301,"x"]].filter((function(e){return null!=e[6]})),R=(0,P.ZP)((function(e){var n=e.children,t=e.className,l=e.id,a=e.placeholder,s=e.style,c=e.whenCreated,f=i(e,["children","className","id","placeholder","style","whenCreated"]),h=(0,r.useRef)(null),p=function(e,n){var t=u((0,r.useState)(null),2),l=t[0],i=t[1];return(0,r.useEffect)((function(){if(null!==e.current&&null===l){var t=new m.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),i(t)}}),[e,l,n]),l}(h,f),g=(0,r.useRef)(!1);(0,r.useEffect)((function(){null!=p&&!1===g.current&&null!=c&&(g.current=!0,c(p))}),[p,c]);var b=u((0,r.useState)({className:t,id:l,style:s}),1)[0],w=(0,r.useMemo)((function(){return p?{__version:1,map:p}:null}),[p]),E=w?r.createElement(o,{value:w},n):null!=a?a:null;return r.createElement("div",d({},b,{ref:h}),E)})).withConfig({displayName:"germanzero__StyledMap",componentId:"sc-78dmjp-3"})(["height:50vh;"]),Z=function(e){var n=e.attributes,t=n[0],l=n[1],i=n[2],a=n[3],u=n[4],s=n[5];return r.createElement(k,{position:[u,s]},r.createElement(z,null,r.createElement("p",null,t,r.createElement("br",null),l,r.createElement("br",null),i,r.createElement("br",null)),M[a]))},W=function(e){var n=e.locations;if("undefined"!=typeof window)return r.createElement(R,{center:[48.39667380182477,9.99045219366275],zoom:13,scrollWheelZoom:!1},r.createElement(x,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map((function(e,n){return r.createElement(Z,{key:n,attributes:e})})))},L=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return r.createElement(j.Z,{title:"GermanZero Klimaentscheid"},r.createElement("h2",null,"GermanZero Klimaentscheid"),r.createElement("p",null,"Wir werden sowohl in Ulm als auch Neu-Ulm einen"," ",r.createElement("a",{href:"https://www.germanzero.de/"},"GermanZero Klimaentscheid")," ","durchführen und haben darüber am 12.01.2021 in einer"," ",r.createElement("a",{href:"https://youtu.be/-HAgdbEQFaY"},"Online Pressekonferenz")," ","informiert."),r.createElement("h3",null,"Was ist ein Klimaentscheid?"),r.createElement("p",null,"Ein Klimaentscheid ist ein Bürger:innenbegehren. Mit einer konkreten Abstimmungsfrage werden Unterschriften gesammelt. Ist eine gewisse Menge an Unterschriften gesammelt worden, muss der Stadtrat sich für oder gegen die Abstimmungsfrage entscheiden. Wird eine Entscheidung gegen die Abstimmungsfrage getroffen, kommt es zum direkten Bürger:innentscheid. Ob dieser erfolgreich ist, hängt einerseits von der Anzahl an Bürger:innen ab, die beim Bürger:innenentscheid insgesamt abgestimmt haben und andererseits von dem Anteil der Bürger:innen, die für die Abstimmungsfrage gestimmt haben."),r.createElement("h3",null,"Mit dem Bürger:innenbegehren wollen wir Ulm und Neu-Ulm bis 2030 klimaneutral machen."),r.createElement("p",null,"Unsere Abstimmungsfragen sind:"),r.createElement("blockquote",null,"Sind Sie dafür, dass Neu-Ulm unverzüglich einen gelosten Bürgerrat einberuft, welcher in 6-12 Monaten einen Klimaaktionsplan zur Klimaneutralität bis 2030 in Neu-Ulm erarbeitet?"),r.createElement("blockquote",null,"Sind Sie dafür, dass Ulm unverzüglich ein Planungsbüro beauftragt, welches innerhalb von 6-12 Monaten einen Klimaaktionsplan zur Klimaneutralität bis 2030 in Ulm erstellt?"),r.createElement("p",null,"GermanZero hat für beide Städte einen Klimastadtplan erstellt, der als Leitfaden für notwendige Massnahmen dient, um in beiden Städten Klimaneutralität bis 2030 zu erreichen. Die Details sollen nach dem Sammeln der benötigten Unterschriften in Ulm durch ein Planungsbüro, in Neu-Ulm durch einen gelosten Bürger:innenrat ausgearbeitet werden. Die Wahl, in welcher Stadt welches Verfahren angewendet wird, haben wir ebenfalls gelost. Ausführliches dazu in der Online Pressekonferenz."),r.createElement("p",null,"Weitere Informationen zum Verfahren, Bürger:innenrat und Klimaneutralität findet ihr entweder in der Pressekonferenz oder im Dokument “Klimaentscheid Ulm/Neu-Ulm” bei den Downloadlinks."),r.createElement("h3",null,"Wie kann ich unterschreiben?"),r.createElement("p",null,"Mittlerweile sind beide Unterschriftenlisten fertig und wir können für Ulm und Neu-Ulm Unterschriften sammeln. Das ist im Moment wegen Corona leider nicht so einfach, deswegen findet ihr die Unterschriftenliste unten verlinkt. Druckt sie gerne aus und animiert Bekannte oder Arbeitskolleg:innen zu unterschreiben, sofern das im Moment möglich ist."),r.createElement("p",null,"Bitte achtet hierbei darauf, dass die Angaben deutlich zu lesen sein müssen."),r.createElement("h3",null,"Hier könnt ihr vor Ort unterschreiben oder Listen abgeben"),r.createElement(K,{name:"list-alt",color:n?void 0:"#1D7441",onClick:function(){return t(!1)}}),r.createElement(K,{name:"map-marked-alt",color:n?"#1D7441":void 0,onClick:function(){return t(!0)}}),n?r.createElement(W,{locations:_}):r.createElement(B,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Anschrift"),r.createElement("th",null,"Ort"),r.createElement("th",null,"Art"))),r.createElement("tbody",null,_.map((function(e,n){var t=e[0],l=e[1],i=e[2],a=e[3];e[4],e[5],e[6];return r.createElement("tr",{key:n},r.createElement("td",null,t),r.createElement("td",null,l),r.createElement("td",null,i),r.createElement("td",null,M[a]))})))),r.createElement("p",null,"Ansonsten weitersagen, weitersagen, weitersagen!"),r.createElement("p",null,"Wir bedanken uns bei allen Menschen, die uns unterstützen! Gemeinsam schaffen wir es, Ulm und Neu-Ulm klimaneutral zu machen!"),r.createElement("h3",null,"Downloads"),r.createElement("ul",null,r.createElement("li",null,r.createElement(I,{href:N},"Unterschriftenliste Ulm")),r.createElement("li",null,r.createElement(I,{href:D},"Unterschriftenliste Neu-Ulm")),r.createElement("li",null,r.createElement(I,{href:A},"Klimastadtplan Ulm")),r.createElement("li",null,r.createElement(I,{href:C},"Klimastadtplan Neu-Ulm"))),r.createElement("h3",null,"Wieso Klimaneutralität?"),r.createElement("p",null,"Nach dem"," ",r.createElement("a",{href:"https://www.ipcc.ch/sr15/"},"IPCC-Sonderbericht (2018)")," lag das globale CO2-Budget weltweit bei 580 Gt CO2 um mit 50%iger Wahrscheinlichkeit das 1,5°C Ziel zu erreichen. Für Deutschland bleibt somit gemäß dem Sachverständigenrat für Umweltfragen (SRU) ab dem Jahr 2020 noch ein Restbudget von 4,2 Gt CO2 – unter der Annahme, dass die weltweit noch erlaubten Emissionen pro Kopf der Bevölkerung gleichverteilt werden und ohne Berücksichtigung von Rückkoppelungseffekten oder Ausgleichsmaßnahmen."),r.createElement("p",null,"Die"," ",r.createElement("a",{href:"https://fridaysforfuture.de/studie/"},"Machbarkeitsstudie des Wuppertal Instituts (2020)")," ","hat aus diesen Daten ergeben, dass Deutschland bis 2035 klimaneutral werden muss, um einen gerechten Beitrag zum 1,5°C Ziel zu leisten."),r.createElement("p",null,"Eine erhöhte globale Temperatur hat Dürren, Überschwemmungen, Naturkatastrophen, Artensterben, Extremwetterlagen, erhöhte Meeresspiegel und viele weitere lebensbedrohliche Konsequenzen zur Folge. Schon jetzt bei 1,2°C sind sowohl lokal, als auch global katastrophale Auswirkungen zu sehen."),r.createElement("h3",null,"Was ist ein Bürger:innenrat?"),r.createElement("p",null,"Ein Bürger:innenrat ist eine intensive Beratung und Beschlussfassung durch geloste Bürger:innen (ca. 100-200) die von Expert:innen zuvor zu allen Themenbereichen informiert wurden."),r.createElement("p",null,"Die im Anschluss an die fachliche Informationsweitergabe stattfindenden Diskussionen werden in Kleingruppen gehalten, die immer wieder neu zufällig zusammengesetzt werden."),r.createElement("p",null,"Ein Bürger.innenrat dauert ungefähr 4 Arbeitstage. Als Ergebnis resultiert ein Bürger.innengutachten, welches die gemeinsam getroffenen Aussagen zusammenfasst."),r.createElement("p",null,"Ein Bürger:innenrat ermöglicht somit die Teilnahme von einem breiten Schnitt der Gesellschaft und den Einbezug ihrer Meinungen."))}}}]);
//# sourceMappingURL=component---src-pages-germanzero-index-js-834bfb18a1cd3f1cbe82.js.map