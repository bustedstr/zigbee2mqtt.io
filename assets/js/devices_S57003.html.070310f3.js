"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42146],{24476:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>o,data:()=>a});var s=n(6254);const i={},o=(0,n(89596).A)(i,[["render",function(e,t){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t[8]||(t[8]=(0,s.Lk)("h1",{id:"the-light-group-s57003",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#the-light-group-s57003"},[(0,s.Lk)("span",null,"The Light Group S57003")])],-1)),(0,s.Lk)("table",null,[t[6]||(t[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[t[2]||(t[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"S57003")],-1)),(0,s.Lk)("tr",null,[t[1]||(t[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(n,{to:"/supported-devices/#v=The%20Light%20Group"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("The Light Group")]))),_:1})])]),t[3]||(t[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"SLC SmartOne Zigbee wall remote 4-channels")],-1)),t[4]||(t[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"battery, action, linkquality")],-1)),t[5]||(t[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S57003.png",alt:"The Light Group S57003"})])],-1))])]),t[9]||(t[9]=(0,s.Lk)("h2",{id:"options",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#options"},[(0,s.Lk)("span",null,"Options")])],-1)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>t[7]||(t[7]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_l1</code>, <code>off_l1</code>, <code>brightness_move_up_l1</code>, <code>brightness_move_down_l1</code>, <code>brightness_stop_l1</code>, <code>on_l2</code>, <code>off_l2</code>, <code>brightness_move_up_l2</code>, <code>brightness_move_down_l2</code>, <code>brightness_stop_l2</code>, <code>on_l3</code>, <code>off_l3</code>, <code>brightness_move_up_l3</code>, <code>brightness_move_down_l3</code>, <code>brightness_stop_l3</code>, <code>on_l4</code>, <code>off_l4</code>, <code>brightness_move_up_l4</code>, <code>brightness_move_down_l4</code>, <code>brightness_stop_l4</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),a=JSON.parse('{"path":"/devices/S57003.html","title":"The Light Group S57003 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"The Light Group S57003 control via MQTT","description":"Integrate your The Light Group S57003 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735565273000},"filePathRelative":"devices/S57003.md"}')}}]);