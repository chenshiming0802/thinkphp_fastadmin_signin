const e={length:e=>e.length,isEquals:(e,s)=>JSON.stringify(e)===JSON.stringify(s),contains:(e,s)=>e.includes(s),isEmpty:e=>0===e.length,indexOf:(e,s)=>e.indexOf(s),lastIndexOf:(e,s)=>e.lastIndexOf(s),subarray:(e,s,t)=>(void 0===t&&(t=e.length-s),e.slice(s,s+t-1)),addObject:(e,s)=>(e.push(s),e),addObjects:(e,s)=>e.concat(s),insertObject:(e,s,t)=>(e.splice(t,0,s),e),removeObject:(e,s)=>e.filter((e=>e!==s)),remove:(e,s,t)=>(void 0===t&&(t=e.length-s),e.splice(s,t),e),reverse:e=>e.reverse(),clone:e=>JSON.parse(JSON.stringify(e)),toString:e=>e.join(", "),push:(e,s)=>(e.unshift(s),e),pop:e=>(e.pop(),e)};export{e as x};