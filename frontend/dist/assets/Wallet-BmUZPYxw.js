import{bZ as e}from"./index-BE75cmpZ.js";const n=window.localStorage.getItem("serviceToken"),s={headers:{Authorization:`Bearer ${n}`}},o=async()=>(await e.get("/api/get_wallets",s)).data,c=async()=>(await e.get("/api/get_admin_wallet",s)).data,i=async a=>(await e.get("/api/get_transactions?wallet_address="+a,s)).data,p=async()=>(await e.get("/api/get_admin_wallet_transactions",s)).data,l=async a=>(await e.post("/api/add_wallet",a,s)).data,d=async a=>(await e.post("/api/update_wallet",a,s)).data,w=async a=>(await e.post("/api/delete_wallet",a,s)).data,g=async a=>(await e.post("/api/transfer",a,s)).data,u=async a=>(await e.post("/api/transfer_admin",a,s)).data;export{o as a,l as b,c,w as d,p as e,g as f,i as g,u as t,d as u};
