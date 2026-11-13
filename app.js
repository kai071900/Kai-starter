const $=id=>document.getElementById(id);
const templates={
 reply:"Thanks for your message. I’m currently unavailable, but I’ll get back to you as soon as I can.",
 busy:"Hi! I’m busy at the moment and may not be able to respond immediately. I’ll get back to you when I’m available. If it’s urgent, please let me know.",
 email:"Subject: Re: Your message\n\nHello,\n\nThank you for reaching out. I’m currently occupied, but I’ll review this and respond as soon as possible.\n\nBest regards",
 summary:"DAILY KAI SUMMARY\n\n• Important messages: [add items]\n• Missed calls to return: [add items]\n• Emails requiring action: [add items]\n• Follow-ups: [add items]"
};
let selected="reply";
document.querySelectorAll("[data-tool]").forEach(b=>b.addEventListener("click",()=>{selected=b.dataset.tool;$("output").value=templates[selected];$("notice").textContent="Template loaded. Edit it before copying."; }));
$("draft").addEventListener("click",()=>{
 const source=$("context").value.trim(); const tone=$("tone").value;
 if(!source){$("output").value=templates[selected];$("notice").textContent="Loaded a starter template. Add context to personalize it.";return;}
 const opener=tone==="Professional"?"Thank you for your message.":tone==="Short and direct"?"Thanks for letting me know.":tone==="Warm and polite"?"Thanks so much for reaching out.":"Hey, thanks for your message.";
 $("output").value=opener+" I’ve noted: “"+source+"”\n\nI’m currently unavailable, but I’ll respond properly as soon as I can.";
 $("notice").textContent="Draft created locally. Review it before sending.";
});
$("copy").addEventListener("click",async()=>{if(!$("output").value)return;try{await navigator.clipboard.writeText($("output").value);$("notice").textContent="Copied to clipboard."; }catch(e){$("output").select();$("notice").textContent="Select and copy the draft manually."; }});
$("clear").addEventListener("click",()=>{$("context").value="";$("output").value="";$("notice").textContent="Cleared.";});
$("busyToggle").addEventListener("change",e=>{$("busyState").textContent=e.target.checked?"Busy Mode is on in this app only. No calls or messages are intercepted.":"Busy Mode is off.";$("busyState").className="note"+(e.target.checked?" ok":"");});
if("serviceWorker" in navigator && location.protocol.startsWith("http")){navigator.serviceWorker.register("./sw.js").catch(()=>{});}
