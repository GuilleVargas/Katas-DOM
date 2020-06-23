document.write("<table>");

for(let i=1; i<=10; i++){
document.write(`<tr><td>5 X ${i} = ${i*5}</td></tr>`);
}

document.write("</table>");

txt = document.getElementById("txt");
console.log(txt.innerHTML);
txt.innerText = "Holi";