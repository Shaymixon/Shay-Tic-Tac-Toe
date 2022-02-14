const p1=window.prompt("Enter Player 1 Name:")
const p2=window.prompt("Enter Player 2 Name:")
if(p1=="")
{
p1="Player 1";
}
if(p2=="")
{
p2="Player 2";
}
let ss="X";
let result=new Array(9);
let counter=0;
function dis()
{
for(i=0;i<=9;i++)
{
let c=document.getElementById(i);
c.disabled=true;
console.log(c)
}
}
function b()
{
let b1=document.getElementById("myb");
let bt="NEW GAME";
b1.innerHTML=bt;
}
function xC(bl)
{
let a1=document.getElementById(bl);
if(result[bl]=="X")
{
a1.style.color = 'red';
}
else
{
a1.style.color = 'blue';
}
}
function B_press(b_d)
{
let t=document.getElementById("turn");
let c=document.getElementById(b_d);
c.innerHTML=ss;
result[b_d] = ss;
c.disabled=true;
xC(b_d);
if(ss=="X")
{
ss="O";
}
else
{
ss="X";
}
if(counter>3)
{
Win();
}
if(c.innerHTML=="X")
{
t.innerHTML="Player turn=" + p2;
}
else
{
t.innerHTML="Player turn=" + p1;
}
counter++;
}
function arr()
{
for(i=0;i<=9;i++)
{
result[i]=null;
}
counter=0;
}
function col(x,y,z)
{
let a1=document.getElementById(x);
let b1=document.getElementById(y);
let c1=document.getElementById(z);
a1.style.background = 'grey';
b1.style.background = 'grey';
c1.style.background = 'grey';
}
function Win()
{
if(result[0]==result[1]&&result[0]==result[2])
{
if(result[0]!=null)
{
let a=0;
let b=1;
let c=2;
col(a,b,c);
if(result[0]=="X")
{
alert (p1 + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
else if(result[3]==result[4]&&result[3]==result[5])
{
if(result[3]!=null)
{
let a=3;
let b=4;
let c=5;
col(a,b,c);
if(result[3]=="X")
{
      alert (p1 + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
if(result[6]==result[7]&&result[6]==result[8])
{
if(result[6]!=null)
{
let a=6;
let b=7;
let c=8;
col(a,b,c);
if(result[6]=="X")
{
alert (p1 + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
if(result[0]==result[3]&&result[0]==result[6])
{
if(result[0]!=null)
{
let a=0;
let b=3;
let c=6;
col(a,b,c);
if(result[0]=="X")
{
alert (p1 + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
}
dis();
b();
}
if(result[1]==result[4]&&result[1]==result[7])
{
if(result[1]!=null)
{
let a=1;
let b=4;
let c=7;
col(a,b,c);
if(result[1]=="X")
{
alert (result[1] + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
if(result[2]==result[5]&&result[2]==result[8])
{
if(result[2]!=null)
{
let a=2;
let b=5;
let c=8;
col(a,b,c);
if(result[2]=="X")
{
alert (p1 + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
if(result[0]==result[4]&&result[0]==result[8])
{
if(result[0]!=null)
{
let a=0;
let b=4;
let c=8;
col(a,b,c);
if(result[0]=="X")
{
alert (p1 + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
if(result[2]==result[4]&&result[2]==result[6])
{
if(result[2]!=null)
{
let a=2;
let b=4;
let c=6;
col(a,b,c);
if(result[2]=="X")
{
alert (result[2] + " Wins ");
}
else
{
alert (p2 + " Wins ");
}
dis();
b();
}
}
if(counter==8)
{
alert ("MATCH DRAW");
b();
}
}
function T()
{
let v=0;
ss="X";
let tbody = "<table border='5px' width='300px' height='300px'>";
for (i=0;i<3;i++)
{
tbody+="<tr>";
	for (j=0;j<3;j++)
	{
	let b_id=v;
	tbody+="<td><button id='"+b_id+"' onclick='B_press(\""+b_id+"\")'></button></td>";
	v++;
	}
	tbody+="</tr>";
}

tbody+="</table>";
let o=document.getElementById("tb");
o.innerHTML = tbody;
arr();
alert(p1 + " turn")
}
document.write("<h2 class='player1'>Player 1 = "+p1+"</h2>");
document.write("<h2 class='player2'>Player 2 = "+p2+"</h2>");
