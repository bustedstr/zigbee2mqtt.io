"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10436],{14823:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>s,data:()=>l});var i=a(6254);const t={},s=(0,a(89596).A)(t,[["render",function(e,n){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n[14]||(n[14]=(0,i.Lk)("h1",{id:"livolo-ti0001-illuminance",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#livolo-ti0001-illuminance"},[(0,i.Lk)("span",null,"Livolo TI0001-illuminance")])],-1)),(0,i.Lk)("table",null,[n[6]||(n[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[n[2]||(n[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TI0001-illuminance")],-1)),(0,i.Lk)("tr",null,[n[1]||(n[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Livolo"},{default:(0,i.k6)((()=>n[0]||(n[0]=[(0,i.eW)("Livolo")]))),_:1})])]),n[3]||(n[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee digital illuminance and sound sensor")],-1)),n[4]||(n[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"noise_detected, illuminance, noise_level, linkquality")],-1)),n[5]||(n[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TI0001-illuminance.png",alt:"Livolo TI0001-illuminance"})])],-1))])]),n[15]||(n[15]=(0,i.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,i.Lk)("span",null,"Notes")])],-1)),(0,i.Lk)("p",null,[n[8]||(n[8]=(0,i.eW)('After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using ')),(0,i.bF)(a,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestdeviceconfigure"},{default:(0,i.k6)((()=>n[7]||(n[7]=[(0,i.eW)("MQTT message")]))),_:1}),n[9]||(n[9]=(0,i.eW)(" right after pairing. In case of problems it's recommended to remove device and then retry pairing and re-configuring device."))]),n[16]||(n[16]=(0,i.Lk)("h3",{id:"important",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#important"},[(0,i.Lk)("span",null,"Important")])],-1)),(0,i.Lk)("p",null,[n[11]||(n[11]=(0,i.eW)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file ")),(0,i.bF)(a,{to:"/guide/configuration/"},{default:(0,i.k6)((()=>n[10]||(n[10]=[(0,i.eW)("data/configuration.yaml")]))),_:1}),n[12]||(n[12]=(0,i.eW)(" must contain the following:"))]),n[17]||(n[17]=(0,i.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These devices may not co-exist with other Zigbee devices on the same network. You may need to add a dedicated coordinator and create a new network for Livolo. The Deconz adapter may not work as a coordinator. Pairing with the Deconz dongle needs to take place immediately after pairing the device with the Livolo hub, but status messages from the device are not then reflected in Zigbee2MQTT (so you can&#39;t see when the button has been pressed on the device). The Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P does seem to work once reflashed. To allow the device to complete its interview, re-pairing needs to be initiated on the device before the device exits pairing mode (ie before the rapid flashing sequence finishes and as soon as the device appears for the first time in Zigbee2MQTT). If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>n[13]||(n[13]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),n[18]||(n[18]=(0,i.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="noise-detected-binary" tabindex="-1"><a class="header-anchor" href="#noise-detected-binary"><span>Noise detected (binary)</span></a></h3><p>Indicates whether the device detected noise. Value can be found in the published state on the <code>noise_detected</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> noise detected is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="noise-level-enum" tabindex="-1"><a class="header-anchor" href="#noise-level-enum"><span>Noise level (enum)</span></a></h3><p>Detected noise level. Value can be found in the published state on the <code>noise_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>silent</code>, <code>normal</code>, <code>lively</code>, <code>noisy</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10))])}]]),l=JSON.parse('{"path":"/devices/TI0001-illuminance.html","title":"Livolo TI0001-illuminance control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Livolo TI0001-illuminance control via MQTT","description":"Integrate your Livolo TI0001-illuminance via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Important","slug":"important","link":"#important","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Noise detected (binary)","slug":"noise-detected-binary","link":"#noise-detected-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Noise level (enum)","slug":"noise-level-enum","link":"#noise-level-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735565273000},"filePathRelative":"devices/TI0001-illuminance.md"}')}}]);