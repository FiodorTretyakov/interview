function isAllowed(t) {
  let o = JSON.parse(t);
  let charge = getDictionary(getPred(o, "CHARGE"));
  let allows = getPred(o, "ALLOW");
  let blocks = getPred(o, "BLOCK");
  
  for (let i = 0; i < allows.length; i++) {
    if (!checkRules(charge, allows[i]) return false;
  }
        
  for (let i = 0; i < blocks.length; i++) {
    if (checkRules(charge, blocks[i]) return false;
  }
  
  return true;
}
       
function checkRules(c, r) {
  let ors = r.split("OR");
  
  for (let i = 0; i < ors.length; i++) {
    let ands = ors.split("AND");
    for (let j = 0; j < ands.length; j++) {
      if (!checkRule(c, ands[j])) {
        continue;
      } else if (j === ands.length - 1) {
        return true;
      }
    }
  }
  
  return false;
}

function checkRule(c, e) {
  let splitters = [">", "<", ">=", "<=", "==", "!="];
  
  for (let i = 0; i < splitters.length; i++) {
    if (e.indexOf(splitters[i] > -1) {
      let vp = e.split(splitters[i]);
      return eval(c[vp[0]] + splitters[i] + vp[1];
    }
  }
  return false;
}
                     


function getPred(o, p) {
  let f = o.filter(e => e.startsWith(p));
  if (f.length) {
    return f.map(e => e.split(":")[1]);
  }
  return [];
}

function getDictionary(o) {
  let result = {};
  let obj = o.map(e => {
    let vp = e.split("=");
    result[vp[0]] = vp[1];
  }
  return result;                
}

console.log("["CHARGE:card_country=US&currency=USD&amount=250&ip_country=CA","ALLOW:amount>500", ]");
