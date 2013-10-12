/*****
 * Lager en bakterie
 *
 */
 var __fysikk__;
 __fysikk__ = true;
 __MAX_WIDTH__ = 21;

function createBakterie(x_pos, y_pos)
{
	var texture 	= PIXI.Texture.fromImage("bakterie.png");
        var bakt    	= new PIXI.Sprite( texture );
        bakt.anchor.x 	= 0.5;
        bakt.anchor.y 	= 0.5;
        bakt.position.x = x_pos;
        bakt.position.y = y_pos;
	bakt.width	= 10 + parseInt(Math.random()*__MAX_WIDTH__);
	bakt.height	= bakt.width;
	bakt.spinn	= (Math.random()-0.5)*0.1;
	
		/** setup next position updater ***/
		bakt.x	= (Math.random()-0.6)*0.5;
		bakt.y	= (Math.random()-0.6)*0.5;

		bakt.update = function(bakt)
		{
			g_faktor = 0.000002;
			g_max	 = 45;
			g_min    = 2;


			/** enekel fysikk ? **/	
			if(__fysikk__)
			{
				for(i in stage.children)
				{
					rnd_faktor = 1;
					nabo	= stage.children[i];

					if(nabo == bakt){break;}

					/** x -akse **/
					nnx     = (bakt.position.x-nabo.position.x);//+nabo.width;	
					
					if(Math.abs(nnx) < g_max && Math.abs(nnx) > g_min)
					{
						nx	= Math.abs(nnx-width);		// invert
						if(nnx < 0){nx = -nx;}
						nx 	= nx * (nabo.width/__MAX_WIDTH__);
						bakt.x  += (nx*g_faktor)*rnd_faktor;
					}



					/** y - akse **/
					nny	= (bakt.position.y - nabo.position.y);

					if(Math.abs(nny) < g_max && Math.abs(nny) > g_min)
					{
						ny	= Math.abs(nny-height);		// invert
						if(nny < 0){ny = -ny;}
						ny 	= ny * (nabo.width/__MAX_WIDTH__);

						bakt.y  += (ny*g_faktor)*rnd_faktor;
						
					}
				}
				
				bakt.x = bakt.x * 0.9999;
				bakt.y = bakt.y * 0.9999;	
			}


			/*** Collision detection **/
			if(bakt.position.x > renderer.view.width)
			{
				bakt.x = (Math.random()*1);	
			}
			else if(bakt.position.x < 0)
			{		
				bakt.x = -Math.random()*1;
			}	

			if(bakt.position.y > renderer.view.height)
			{
		 		bakt.y = (Math.random()*1);
			}
			else if(bakt.position.y < 0)
			{
				bakt.y = -Math.random()*1;
			}	


			/** update position **/
			bakt.rotation   += bakt.spinn
			bakt.position.x -= bakt.x;
			bakt.position.y -= bakt.y;
		}


		function kill(e)
		{
			document.getElementById("antallLabel").innerHTML = "Antall bakterier: "+list.length;
			stage.removeChild(e.target);
		}
		bakt.mouseover  = kill;
		bakt.setInteractive(true);

		return bakt;
}

