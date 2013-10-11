/*****
 * Lager en bakterie
 *
 */
function createBakterie(x_pos, y_pos)
{
	        var texture 	= PIXI.Texture.fromImage("bakterie.png");
                var bakt    	= new PIXI.Sprite( texture );
                bakt.anchor.x 	= 0.5;
                bakt.anchor.y 	= 0.5;
                bakt.position.x = x_pos;
                bakt.position.y = y_pos;
		bakt.width	= 20;
		bakt.height	= 20;
		
		bakt.x	= (Math.random()*0.5)-0.25;
		bakt.y	= (Math.random()*0.5)-0.25;

		bakt.update = function(bakt)
		{
			if(bakt.position.x > renderer.view.width)
			{
				bakt.x = -(Math.random()*0.25);	
			}
			else if(bakt.position.x < 0)
			{		
				bakt.x = Math.random()*0.25;
			}	

			if(bakt.position.y > renderer.view.height)
			{
				bakt.y = -(Math.random()*0.25);
			}
			else if(bakt.position.y < 0)
			{
				bakt.y = Math.random()*0.25;
			}	
			bakt.position.x += bakt.x;
			bakt.position.y += bakt.y;
		}


		function kill(e)
		{
			alert("bing");
			stage.children.removeChild(e.target);
		}
		bakt.mouseover  = kill;
		bakt.setInteractive(true);

		return bakt;
}

