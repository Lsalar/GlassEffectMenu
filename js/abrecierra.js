var $fn_aoc = function()
{
	if(obgral.instance == 0)
  	{
  		obgral.elm.classList.add('active');
  		obgral.instance	= 1;
  	}
  	else if(obgral.instance == 1)
  	{
  		obgral.elm.classList.remove('active');
  		obgral.instance	= 0;
  	}
}

const 	mnu		= document.getElementById("menu");
var 	obgral 	= {instance:0,elm: mnu};

var 	back	= document.getElementById("back");
var 	brg 	= document.getElementById("brg");
		brg.addEventListener('click', $fn_aoc,false);
		back.addEventListener('click', $fn_aoc,false);