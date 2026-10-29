/* 软件交付自测工具: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const items=tableRows(d),counts={未测:0,通过:0,失败:0,不适用:0};items.forEach(r=>{if(!Object.hasOwn(counts,r.status))throw Error('测试状态无效');if(r.status==='通过'&&!String(r.actual||'').trim())throw Error('标为通过的测试必须记录实际结果：'+r.feature);counts[r.status]++;});return {metrics:[metric('已通过',counts.通过),metric('失败',counts.失败),metric('未测',counts.未测),metric('验收状态',counts.失败||counts.未测?'尚有待处理项':'已填写项完成')],columns:['测试项','步骤','预期','实际','状态'],rows:items.map(r=>[r.feature,r.steps,r.expected,r.actual,r.status]),sections:[note('环境与版本',d.project+' / '+d.version+'\n'+d.environment)],notes:['报告反映使用者填写的结果；不自动执行测试。']};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
