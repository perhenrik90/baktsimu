/*****
 * Lager en bakterie
 *
 */
 var __fysikk__;
 __fysikk__ = true;

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
	bakt.spinn	= (Math.random()-0.5)*0.1;
		
		/** setup next position updater ***/
		bakt.x	= (Math.random()-0.5)*0.5;
		bakt.y	= (Math.random()-0.5)*0.5;

		bakt.update = function(bakt)
		{
			g_faktor = 0.00008;
			g_max	 = 20;
			g_min    = 6;


			/** enekel fysikk ? **/	
			if(__fysikk__)
			{
				for(i in stage.children)
				{
					rnd_faktor = Math.random()*2;
					nabo	= stage.children[i];

					/** x -akse **/
					nx      = (nabo.position.x - bakt.position.x);	
					nx	-= (Math.abs(nabo.position.y - bakt.position.y));
 
					if(Math.abs(nx) < g_max && Math.abs(nx) > g_min)
						bakt.x  += (nx*g_faktor)*rnd_faktor;

					/** y - akse **/
					ny		= (nabo.position.y - bakt.position.y);
					ny	-= (nabo.position.x - bakt.position.x);
					if(Math.abs(ny) < g_max && Math.abs(ny) > g_min)
						bakt.y  += (ny*g_faktor)*rnd_faktor;
				}	
			}


			/*** Collision detection **/
			if(bakt.position.x > renderer.view.width)
			{
				bakt.x = -(Math.random()*0.5);	
			}
			else if(bakt.position.x < 0)
			{		
				bakt.x = Math.random()*0.5;
			}	

			if(bakt.position.y > renderer.view.height)
			{
		 		bakt.y = -(Math.random()*0.25);
			}
			else if(bakt.position.y < 0)
			{
				bakt.y = Math.random()*0.25;
			}	


			/** update position **/
			bakt.rotation   += bakt.spinn
			bakt.position.x += bakt.x;
			bakt.position.y += bakt.y;
		}


		function kill(e)
		{
			console.log(e);
			stage.removeChild(e.target);
		}
		bakt.mouseover  = kill;
		bakt.setInteractive(true);

		return bakt;
}

